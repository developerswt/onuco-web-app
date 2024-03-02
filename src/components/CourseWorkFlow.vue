<template>
  <div class="container">
    <p>Dashbord > Course Workflow</p>
    <div style="padding: 20px 20px 80px 20px;">

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
                    <p><b> ID: </b> {{ childPara.id }}</p>
                    <!-- <p>Customer Details:{{ childPara.customerDetails }} </p> -->
                    <p><b>Subject Name:</b>{{ childPara.name }}</p>
                    <p><b>Price:</b> {{ childPara.actualPrice }}</p>
                    <p><b>Work Flow:</b> {{ childPara.workFlowStatement }}</p>

                  </div>


                </div>
                <div v-else class="row">

                  <div class="col-sm-4">
                    <p><b>ID: </b> {{ childPara.id }}</p>
                    <!-- <p>Customer Details:{{ childPara.customerDetails }} </p> -->
                    <p><b>Subject Name:</b>{{ childPara.name }}</p>
                    <p><b>Price:</b> {{ childPara.actualPrice }}</p>
                    <div>
                      <label><b>Work Flow:</b></label><br>
                      <select v-model="childPara.workFlowStatement">
                        <option value="Draft">Draft</option>
                        <option value="Review">Review</option>
                        <option value="Release">Release</option>
                      </select>
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

    <Loading v-model:active="isLoading"></Loading>
  </div>
</template>
  
<script>
import AxiosInstance from '../config/axiosInstance';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axios from 'axios'


export default {
  name: "OrdersPage",
  components: {
    AgGridVue,
    Loading,

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
      showAllTechnicians: [],
      columnDefs: [{ name: 'SL.No', field: 'id', suppressSizeToFit: true }, { name: 'Subject Name', field: 'name' }, { name: 'Price', field: 'actualPrice' }, { name: 'Work Flow', field: 'workFlowStatement' }],
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
      const res = await AxiosInstance.get(`/Course`);
      let req = res.data;
      this.Orders = req;
      if (Array.isArray(req.courses)) {
        this.rowData = req.courses;
      } else {
        console.error('completedStudents is not an array:', req.courses);
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
    this.popupParent = document.body;
    this.paginationPageSize = 10;
  },

  methods: {

    onCellClicked(params) {
      this.childPara = params.node.data
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

    updateUserStatus(params) {
      this.showDialog = false;
      try {
        const res = axios.put(this.status + '?id=' + params.id + '&status=' + this.updateStatus);
        console.log(res);
        this.showDialog = true;
        this.dialogTitle = "Success";
        this.dialogMessage = "Successfully Update The Status";

      } catch (error) {
        this.showDialog = true;
        this.dialogTitle = "Error";
        this.dialogMessage = "Not get data";
      }
    },
    statusEditor(params) {
      this.showDialog = false;
      try {
        this.showDialog = false;
        const res = axios.put(this.status + '?id=' + params.id + '&status=' + this.updateStatus);
        console.log(res);
        // this.showDialog = true;  
        this.dialogTitle = "Success";
        this.dialogMessage = "Successfully Update The Status";

      } catch (error) {
        console.log(error);
        this.showDialog = true;
        this.dialogTitle = "Error";
        this.dialogMessage = "Not get data";
      }
    },

    edit() {
      this.ismodel = false;
    },


    update(id) {
      this.showDialog = false;
      try {
        const res = AxiosInstance.put(`/Course/UpdateWorkflow/` + id + '/' + this.childPara.workFlowStatement);
        console.log(res);
        this.ismodel = true;
        this.gridApi.refreshCells({ force: true });

      } catch (error) {
        console.log(error);
      }
    },



  },

};

</script>
<style>
.example-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 55%;
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

.modal-content {
  height: 100%;
  overflow: hidden;
}

.modal-body {
  max-height: 400px;
  /* Adjust the max-height as needed */
  overflow-y: auto;
}

.mc {
  height: 300px;
  width: 580px;
  overflow: hidden;
}

@media (max-width:520px) {

  .example-wrapper {
    width: 100%;
  }
}
</style>