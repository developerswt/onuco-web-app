<template>
  <div class="container">
    <p>Dashbord > Complete Students </p>
    <div style="padding: 20px;">

      <div class="example-wrapper">

        <div style="height: 100%;">
          <ag-grid-vue
:dom-layout="domLayout" class="ag-theme-alpine" :column-defs="columnDefs" :row-data="rowData"
            :edit-type="editType" :row-selection="rowSelection" :default-col-def="defaultColDef"
            :suppress-excel-export="true" :popup-parent="popupParent" cache-quick-filter=true :pagination="true"
            :pagination-page-size="paginationPageSize" is-loding="true" @grid-ready="onGridReady"
            @cell-value-changed="onCellValueChanged" @row-clicked='onCellClicked'>
          </ag-grid-vue>
        </div>
      </div>
    </div>

    <div v-if="showChildRow">
      <div
class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLabel" style="display:block;"
        aria-modal="true" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content mc">

            <div class="modal-body" style="overflow: auto !important;">

              <div class="container bg-light">
                <div v-if="ismodel" class="row">
                  <div class="col-sm-12">
                    <p><b>ID: </b> {{ childPara.id }}</p>
                    <p><b>Course ID :</b>{{ childPara.courseId }}</p>
                    <p><b>Subject Name:</b>{{ childPara.name }}</p>
                    <p><b>Price:</b> {{ childPara.price }}</p>
                    <p><b>Start Date:</b> {{ childPara.startdate }}</p>
                    <p><b>End Date:</b> {{ childPara.enddate }}</p>
                    <p><b>Status:</b> {{ childPara.state }}</p>

                  </div>
                </div>
                <div v-else class="row">
                  <div class="col-sm-12">
                    <p><b>ID: </b> {{ childPara.id }}</p>
                    <p><b>Course ID :</b>{{ childPara.courseId }}</p>
                    <p><b>Subject Name:</b>{{ childPara.name }}</p>
                    <!-- <p><b>Price:</b> {{ childPara.price }}</p> -->
                    <div class="">
                      <label><b>Price:</b></label><br>
                      <input v-model="childPara.price" type="text" />
                    </div>
                    <div class="">
                      <label><b>Start Date:</b></label><br>
                      <input v-model="childPara.startdate" type="text" />
                    </div>
                    <div class="">
                      <label><b>End Date:</b></label><br>
                      <input v-model="childPara.enddate" type="text" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="edit()">Edit</button>
              <button
type="button" class="btn btn-secondary" data-dismiss="modal"
                @click="update(childPara.id)">Update</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="OpenCloseFun()">Close</button>
            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- <AlertDialog v-if="showDialog" :title="dialogTitle" :message="dialogMessage"/>   -->
    <Loading v-model:active="isLoading"></Loading>
  </div>
</template>
  
<script>

import AxiosInstance from '../config/axiosInstance';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
// import AlertDialog from './AlertDialog.vue';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default {
  name: "StudentDetails",
  components: {
    AgGridVue,
    Loading,
    // AlertDialog
  },
  data: function () {
    return {
      userName: '',
      ismodel: true,
      isLoading: false,
      showDialog: false,
      dialogTitle: '',
      dialogMessage: '',
      domLayout: null,
      Orders: [],
      req: [],
      columnDefs: [{ name: 'SL.No', field: 'id', suppressSizeToFit: true }, { name: 'Course Id', field: 'courseId', suppressSizeToFit: true }, { name: 'Subject Name', field: 'name' }, { name: 'Price', field: 'price' }, { name: 'Start Date', field: 'startdate', filter: 'agDateColumnFilter', filterParams: filterParams, }, { name: 'End Date', field: 'enddate', filter: 'agDateColumnFilter', filterParams: filterParams, }],
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

  async created() {
    this.domLayout = 'autoHeight';
    this.isLoading = true;
    try {
      const res = await AxiosInstance.get(`/UserCourseSubscription/GetCompletedStudentsCount`);
      let req = res.data;
      this.Orders = req;
      if (Array.isArray(req.completedStudents)) {
        this.rowData = req.completedStudents;
      } else {
        // Handle the case where completedStudents is not an array
        console.error('completedStudents is not an array:', req.completedStudents);
      }

    } catch (error) {
      this.isLoading = false;
      console.log(error);
      this.showDialog = true;
      this.dialogTitle = "Error";
      this.dialogMessage = "Not get data";
    }
    finally {
      this.isLoading = false;
    }
    this.rowSelection = 'single';
    console.log(this.rowData);
    this.popupParent = document.body;
    this.paginationPageSize = 10;

  },


  methods: {

    onCellClicked(params) {
      this.childPara = params.node.data
      console.log(this.childPara);
      this.showChildRow = true;

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

    update(id) {
      this.showDialog = false;
      try {
        const res = AxiosInstance.put(`/UserCourseSubscription/ChangeCourseDuration` + '?' + 'id=' + id + '&courseId=' + this.childPara.courseId + '&newStartDate=' + encodeURIComponent(this.childPara.startdate) + '&newEndDate=' + encodeURIComponent(this.childPara.enddate));
        console.log(res);

        // this.gridApi.refreshCells({force : true});
        if (res.status === 200) {
          const newData = AxiosInstance.get(`/UserCourseSubscription/GetCompletedStudentsCount`);
          this.rowData = newData.data.completedStudents;
        }

        this.ismodel = true;
        this.gridApi.refreshCells({ force: true });

      } catch (error) {
        console.log(error);
      }
    },

    onLogOut() {
      this.$store.commit('isLoggedIn', false);
      this.$router.push('/Loginpage');
    },


  },


};
var filterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
  minValidYear: 2000,
  maxValidYear: 2023,
  inRangeFloatingFilterDateFormat: 'YYYY MMM Do',
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
  height: 300px;
  width: 550px;
  overflow: hidden;
}

.modal-body {
  max-height: 400px;
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
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

button:hover {
  background-color: #007bff;
}
</style>