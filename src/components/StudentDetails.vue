<template>
  <div class="container">
    <div class="row pt-2">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="card-box">
          <div class="card-head">
            <header>Student Info Details</header>
            <div class="filter-box">
              <span for="filter-text-box">Search Here : </span>
              <input id="filter-text-box" v-model="filterText" class="search-box" type="text" placeholder="Search By Name/E-mail Id/Phone_Number" />
              <button class="btn btn-primary" @click="onFilterButtonClick">Search</button>
              <p v-if="showRequiredMessage" style="color: red;">Input field is required.</p>
            </div>
            <div class="card-body ">
              <div style="padding: 20px;">
                <div class="example-wrapper">
                  <div style="height: 100%;">
                    <ag-grid-vue
                      v-if="hasSearched"
                      :dom-layout="domLayout" class="ag-theme-alpine" :column-defs="columnDefs"
                      :row-data="rowData" :edit-type="editType" :row-selection="rowSelection"
                      :default-col-def="defaultColDef" :suppress-excel-export="true" :popup-parent="popupParent"
                      cache-quick-filter=true :pagination="true" :pagination-page-size="paginationPageSize"
                      is-loding="true" @grid-ready="onGridReady" @cell-value-changed="onCellValueChanged"
                      @row-clicked='onCellClicked'>
                    </ag-grid-vue>
                  </div>
                </div>
              </div>

              <div v-if="showChildRow">
                <div class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLabel" style="display:block;" aria-modal="true" role="dialog">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content mc">
                      <div class="modal-body" style="overflow: auto !important;">
                        <div class="container bg-light">
                          <div v-if="ismodel" class="row">
                            <div class="col-sm-12">
                              <p><b>ID: </b> {{ childPara.id }}</p>
                              <p><b>Course ID:</b> {{ childPara.courseId }}</p>
                              <p><b>User CognitoId:</b> <a :href="getUserLink(childPara.userCognitoId)">{{ childPara.userCognitoId }}</a></p>
                              <p><b>Start Date:</b> {{ formatDate(childPara.startdate) }}</p>
                              <p><b>End Date:</b> {{ formatDate(childPara.enddate) }}</p>
                            </div>
                          </div>
                          <div v-else class="row">
                            <div class="col-sm-12">
                              <p><b>ID: </b> {{ childPara.id }}</p>
                              <p><b>Course ID: </b> {{ childPara.courseId }}</p>
                              <p><b>Start Date: </b>{{ formatDate(childPara.startdate) }}</p>
                              <div class="">
                                <label><b>End Date:</b></label><br>
                                <!-- <Datepicker v-model="childPara.enddate"></Datepicker> -->
                                <el-date-picker v-model="childPara.enddate" type="datetime"></el-date-picker>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="editUpdateAction()"> {{ ismodel ? 'Edit' : 'Update' }}</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="OpenCloseFun()">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Loading v-model:active="isLoading"></Loading>
            </div>
          </div>
        </div>
      </div>
    </div>    
    <Confirmation ref="Confirmation" />    
  </div>  
</template>
  
<script>

import AxiosInstance from '../config/axiosInstance';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import Confirmation from './Confirmation.vue';
import moment from 'moment';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default {
  name: "StudentDetails",
  components: {
    AgGridVue,
    Loading,
    Confirmation,
    Datepicker,

  },
  data: function () {
    return {
      showRequiredMessage: false,
      hasSearched: false,
      gridApi: null, 
      gridColumnApi: null,
      filterText: '',
      userName: '',
      ismodel: true,
      isLoading: false,
      showDialog: false,
      dialogTitle: '',
      dialogMessage: '',
      domLayout: null,
      Orders: [],
      req: [],
      columnDefs: [{ name: 'SL.No', field: 'id', suppressSizeToFit: true },{name:'name',field:'userName'},{name:'e_mailId', field:'e_mailId'},{name:'phone_Number', field:'phone_Number'},{ name: 'Course Name', field: 'courseName' }, { name: 'Price', field: 'price' },{ name: 'Start Date', field: 'startdate', valueFormatter: this.dateFormat.bind(this), filterType: 'date' }, { name: 'End Date', field: 'enddate', valueFormatter: this.dateFormats.bind(this), filterType: 'date' }],
      gridApi: null,
      defaultColDef: { sortable: true, filter: true, width: 150, resizable: true, applyMiniFilterWhileTyping: true },
      columnApi: null,
      editType: null,
      showChildRow: false,
      childPara: null,
      rowData: null,
      rowSelection: null,
      paginationPageSize: null,
      rightAligned: {
        headerClass: 'ag-right-aligned-header',
        cellClass: 'ag-right-aligned-cell'
      },
    };
  },
  computed: {

    isLoggedIn() {
      return this.$store.state.IsLoggedIn;
    },
  },
  watch: {
  filterText: {
    handler: function (newFilterText) {
      // Ensure gridApi is available before setting quick filter
      if (this.gridApi) {
        this.gridApi.setQuickFilter(newFilterText);
      }
    },
    deep: true, // Watch changes deeply
  },
},

  async created() {
    this.domLayout = 'autoHeight';
    this.isLoading = true;
    try {
      const res = await AxiosInstance.get(`/UserCourseSubscription/GetUserSubscription`);
      let req = res.data;
      this.Orders = req;

    } catch (error) {
      console.error(error);
      console.log(error);
    }
    finally {
      this.isLoading = false;
    }
    this.rowData = this.Orders;
    this.rowSelection = 'single';
    this.popupParent = document.body;
    this.paginationPageSize = 10;

  },

  methods: {

    onFilterButtonClick() {
    this.filterText = this.filterText.trim();
    
    if (this.filterText === '') {
      this.showRequiredMessage = true;
      this.hasSearched = false;
      this.rowData = []; // or reset to the initial state
      console.log('Input field is required.');
    } else {
      this.showRequiredMessage = false;
      this.hasSearched = true;
      
      console.log('Filter Text:', this.filterText);
      this.rowData = this.Orders.filter(order => {
        const lowerCaseFilter = this.filterText.toLowerCase();
        const includescourseName = order.courseName.toLowerCase().includes(lowerCaseFilter);
        const includesuserName = order.userName.toLowerCase() === lowerCaseFilter;
        const includese_mailId = order.e_mailId.toLowerCase() === lowerCaseFilter;
        const includesphone_Number = order.phone_Number;

        return includescourseName || includesuserName || includese_mailId || includesphone_Number ;
      });

      console.log('Filtered Data:', this.rowData);
    }
  },

    getUserLink(userName) {
      return `/user-profile/${userName}`;
    },

    formatDate(date) {
      return moment(date).format('DD-MM-YYYY T HH:mm:ss');
    },
    dateFormat(params) {
      let value = params.data.startdate;
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY T HH:mm:ss');
      }
    },
    dateFormats(params) {

      let value2 = params.data.enddate;
  
      if (value2) {
        return moment(String(value2)).format('DD/MM/YYYY T HH:mm:ss');
      }
    },
    onCellClicked(params) {
      this.childPara = params.node.data
      this.showChildRow = true;
      this.edit()
    },

    OpenCloseFun() {
      this.showChildRow = false;
      this.ismodel = true;
    },

    onCellValueChanged(event) {
      console.log('Data after change is', event.data);
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },

    onBtnExport() {
      this.gridApi.exportDataAsCsv();
    },
    onFilterTextBoxChanged() {
      this.gridApi.setQuickFilter(
        document.getElementById('filter-text-box').value
      );
    },
    onPrintQuickFilterTexts() {
      this.gridApi.forEachNode(function (rowNode, index) {
        console.log(
          'Row ' +
          index +
          ' quick filter text is ' +
          rowNode.quickFilterAggregateText
        );
      });
    },

    edit() {
      this.ismodel = false;
    },
    editUpdateAction() {
      if (this.ismodel) {
        // If in edit mode, switch to update mode
        this.ismodel = false;
      } else {
        // If in update mode, perform the update action
        this.update(this.childPara.id);
      }
    },
    update(id) {
      this.showDialog = false;
      try {
        // const formattedStartDate = moment(this.childPara.startdate).format('YYYY-MM-DDTHH:mm:ss');
        const formattedEndDate = moment(this.childPara.enddate).format('YYYY-MM-DDTHH:mm:ss');
        const res = AxiosInstance.put(`/UserCourseSubscription/ChangeCourseDuration` + '?' + 'id=' + id + '&courseId=' + this.childPara.courseId + '&newEndDate=' + encodeURIComponent(formattedEndDate));
  
        // this.gridApi.refreshCells({force : true});
        if (res.status === 200) {
          const newData = AxiosInstance.get(`/UserCourseSubscription/GetUserSubscription`);
          this.rowData = newData.data;
        }
        this.ismodel = true;
        this.gridApi.refreshCells({ force: true });
        this.OpenCloseFun();
        this.$refs.Confirmation.open("Updated successfully.");


      } catch (error) {
        console.log(error);
        this.$refs.Confirmation.open(" Updating Error");

      }
    },

  //   async deleteUserSubscription() {
  //       try {
  //         this.OpenCloseFun();

  //           const confirmed = await this.$refs.Confirmation.open(
  //               "Are you sure you want to delete this User?"
  //           );

  //           if (!confirmed) {
  //               return; 
  //           }

  //           const id = this.childPara.id;

  //           const res = await AxiosInstance.delete(`/UserCourseSubscription?id=${id}`);

  //           if (res.status === 200) {
  //               this.gridApi.refreshCells({ force: true });
  //               this.OpenCloseFun();
  //               this.$refs.Confirmation.open(" Subscribe User deleted successfully.");
  //               await this.getdata() ;

  //           } else {
  //               console.error('Failed to delete Subscribe User');
  //               this.$refs.Confirmation.open("Error deleting Subscribe User.");
  //           }
  //       } catch (error) {
  //           console.error("Error deleting Subscribe User:", error);
  //           this.$refs.Confirmation.open("Error deleting Subscribe User.");
  //       }
  //   },
  //   async getData() {
  //   this.domLayout = 'autoHeight';
  //   this.isLoading = true;
  //   try {
  //     const res = await AxiosInstance.get(`/UserCourseSubscription/GetUserSubscription`);
  //     let req = res.data;
  //     this.Orders = req;

  //   } catch (error) {
  //     console.log(error);
  //     this.showDialog = true;
      
  //   }
  //   finally {
  //     this.isLoading = false;
  //   }
  //   this.rowData = this.Orders;
  //   this.rowSelection = 'single';
  //   console.log(this.rowData);
  //   this.popupParent = document.body;
  //   this.paginationPageSize = 10;

  // },

  },


};


</script>
<style scoped>
.example-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#myGrid {
  flex: 1 1 0px;
  width: 100%;
}

.example-header {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 13px;
  margin-bottom: 5px;
}

.ag-theme-alpine {
  --ag-header-height: 30px;
  --ag-header-foreground-color: black;
  --ag-header-background-color: white;
  --ag-font-size: 15px;
  --ag-font-family: 'Times New Roman';

}

.ag-theme-alpine .ag-header {
  font-family: Charlie Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 14px;
}

.ag-theme-alpine .ag-header-group-cell {
  font-weight: normal;
  font-size: 22px;
}

.ag-theme-alpine .ag-header-cell {
  font-size: 16px;
  text-align: center;
}

.ag-header-cell-label {
  justify-content: center;
}

@media (max-width: 912px) {
  .ag-grid-vue {
    height: 20%;
  }
}

.ag-grid-vue {
  width: 100%;
  height: 80%;
}

.kl {
  text-align: center;
}

.sd {
  width: 15%;
  font-size: 1em;
}

.sd1 {
  width: 15%;
  font-size: 1em;
}

@media screen and (max-width: 600px) {
  .kl {
    text-align: left;
  }

  .sd {
    width: 55%;
    font-size: 1em;
  }

  .sd1 {
    width: 42%;
    font-size: 1em;
  }
}

.modal-dialog {
  max-width: 900px;

  margin: 1.75rem auto;
}

.modal-dialog {
  max-width: 900px;
  margin: 1.75rem auto;
  height: 630px;
  /* Set the height as needed */
  overflow-y: auto;
}

.mc {
  height: 480px;
  width: 750px;
  overflow: hidden;
}

.modal-body {
  max-height: 400px;
  /* Adjust the max-height as needed */
  overflow-y: auto;
}

@media (max-width:520px) {

  .example-wrapper {
    width: 100%;
  }
}

button {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #007bff;
}

.card-box {
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
  border: 1px solid #deebfd;
  box-shadow: -8px 12px 18px 0 #dadee8;
}

.card-head {
  border-radius: 2px 2px 0 0;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  padding: 2px;
  /* text-transform: uppercase; */
  color: #3a405b;
  font-size: 14px;
  font-weight: 600;
  line-height: 36px;
  min-height: 40px;
}

.card-head header {
  display: inline-block;
  padding: 11px 20px;
  vertical-align: middle;
  line-height: 17px;
  font-size: 17px;
  letter-spacing: 1px;
}

.card-box {
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
  border: 1px solid #deebfd;
  box-shadow: -8px 12px 18px 0 #dadee8;
}

.card-head {
  border-radius: 2px 2px 0 0;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  padding: 2px;
  /* text-transform: uppercase; */
  color: #3a405b;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  min-height: 40px;
}

.card-head header {
  display: inline-block;
  padding: 11px 20px;
  vertical-align: middle;
  line-height: 17px;
  font-size: 17px;
  letter-spacing: 1px;
}
.bg-light{
  height: 370px;
}
.search-box{
  width:70%;
  padding: 0px;
}
.filter-box{
  position: relative;
    left: 22px;
    top: 20px;
}
</style>