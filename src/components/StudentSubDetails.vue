<template>
    <div class="container">
      <div class="row pt-2">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card-box">
            <div class="card-head">
              <header>Student Course Details</header>
              <div class="card-body ">
                <div style="padding: 20px;">
                  <div class="example-wrapper">
                    <div style="height: 100%;">
                      <ag-grid-vue
                        :dom-layout="domLayout" class="ag-theme-alpine" :column-defs="columnDefs"
                        :row-data="rowData" :edit-type="editType" :row-selection="rowSelection"
                        :default-col-def="defaultColDef" :suppress-excel-export="true" :popup-parent="popupParent"
                        cache-quick-filter=true :pagination="true" :pagination-page-size="paginationPageSize"
                        is-loding="true" @grid-ready="onGridReady" @cell-value-changed="onCellValueChanged"
                        @row-clicked='onCellClicked'></ag-grid-vue>
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
  </template>
   
  <script>
  
  import AxiosInstance from '../config/axiosInstance';
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  import { AgGridVue } from "ag-grid-vue3";
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  import moment from 'moment';
  
  export default {
  name: "StudentsSub",
  components: {
    AgGridVue,
    Loading,
  },
  data() {
    return {
      formVisible: false,
      userName: '',
      ismodel: true,
      isLoading: false,
      showDialog: false,
      dialogTitle: '',
      dialogMessage: '',
      domLayout: null,
      Orders: [],
      req: [],
      columnDefs: [
        { name: 'userName', field: 'userName' },
        { name: 'courseName', field: 'courseName' },
        { name: 'price', field: 'price' },
        { name: 'startdate', field: 'startdate' },
        { name: 'enddate', field: 'enddate' },
        { name: 'userEmail', field: 'userEmail' },
        { name: 'phone_number', field: 'phone_number' }
      ],
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
    isuser() {
      console.log(this.$store.state.user);
      return this.$store.state.user.signInUserSession.idToken.payload;
    }
  },
  async created() {
    this.domLayout = 'autoHeight';
    this.isLoading = true;
    try {
      const res = await AxiosInstance.get(`/UserCourseSubscription/GetByUserCognitoId/` + this.isuser.sub);
      let req = res.data;
      this.Orders = req;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
      this.showDialog = true;
      this.dialogTitle = "Error";
      this.dialogMessage = "Not get data";
    } finally {
      this.isLoading = false;
    }
    this.rowData = this.Orders;
    this.rowSelection = 'single';
    this.popupParent = document.body;
    this.paginationPageSize = 10;
    
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
  
  .frm {
    padding: 20px;
    border: 1px solid black;
    width: 90%;
    background-color: #fff;
  }
  
  
  .frm {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 80px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 1px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  button {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn2 {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn1 {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 80px;
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
  }.card-box {
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
  </style>