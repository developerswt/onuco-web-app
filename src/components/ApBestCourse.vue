<template>
    <div class="container">
      <div class="card-box">
       <div class="card-head">
         <header>Add Best Course</header>
       </div>
       <div class="card-body">
          <div style="padding: 20px;">
  
            <div class="example-wrapper">
  
              <div style="height: 100%;">
                <ag-grid-vue
:dom-layout="domLayout"  class="ag-theme-alpine" :column-defs="columnDefs" :row-data="rowData"
                  :edit-type="editType" :row-selection="rowSelection" :default-col-def="defaultColDef"
                  :suppress-excel-export="true" :popup-parent="popupParent" cache-quick-filter=true :pagination="true"
                  :pagination-page-size="paginationPageSize" is-loding="true" @grid-ready="onGridReady"
                  @cell-value-changed="onCellValueChanged" @row-clicked='onCellClicked'>
                </ag-grid-vue>
              </div>
            </div>
          </div>
          <button class="btn1" @click="toggleForm">{{ formVisible ? 'Close' : 'Add New' }}</button>
  
  <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': formVisible }">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title">Add Best Course</h5>
         <button type="button" class="close" @click="toggleForm">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <el-form ref="form" @submit.prevent="addBranch"> 
            <div>
              <label for="productDropdown">Subject Name :</label>
              <el-select v-model="selectedOption" placeholder="Please Select" @change="loadProductDetails">
                  <el-option
                      v-for="product in Products.courses"
                      :key="product.id"
                      :value="product.id"
                      :label="product.name"
                    ></el-option>
                </el-select>
            </div>
          
            <button class="btn2" type="submit"> Add </button>
          </el-form>
        </div>
      </div>
      </div>
      </div>
      </div>
  </div>
      <Loading v-model:active="isLoading"></Loading>
      <Confirmation ref="Confirmation" />    
    </div>
  </template>
     
  <script>
  
  import AxiosInstance from '../config/axiosInstance';
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  import { AgGridVue } from "ag-grid-vue3";
  import Confirmation from './Confirmation.vue';
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  
  export default {
    name: "OrdersPage",
    components: {
      AgGridVue,
      Loading,
      Confirmation,
    },
    data: function () {
      return {
        newBranch: {
          name: '',
        },
        selectedOption: '',
        formVisible: false,
        userName: '',
        ismodel: true,
        isLoading: false,
        showDialog: false,
        dialogTitle: '',
        dialogMessage: '',
        domLayout: null,
        Orders: [],
        Products:[],
        req: [],
        // columnDefs: [{ name: 'Faculty Id', field: 'id', suppressSizeToFit: true }, { name: 'Name', field: 'name' }, { name: 'Description', field: 'description' }, { name: 'ActualPrice', field: 'actualPrice' }, { name: 'DiscountPrice', field: 'discountPrice' },{ name: 'courseName', field: 'courseName' } ,{ name: 'Is Active', field: 'isActive' }],
        columnDefs: [
  { headerName: 'Subject Id', field: 'id', suppressSizeToFit: true },
  { headerName: 'Subject Name', field: 'name' },
  { headerName: 'Description', field: 'description' },
  { headerName: 'Actual Price', field: 'actualPrice' },
  { headerName: 'Discount Price', field: 'discountPrice' },
  { headerName: 'Subject Rout Name', field: 'courseName' },
  { headerName: 'Is Active', field: 'isActive' }
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
      isLoggedIn() {
        return this.$store.state.IsLoggedIn;
      },
    },
  
    async created() {
      this.domLayout = 'autoHeight';
      this.isLoading = true;
      try {
        const res = await AxiosInstance.get(`/TopRatedCourses`);
        let req = res.data;
        this.Orders = req;
        console.log(res)
        const response = await AxiosInstance.get('/Course');
        this.Products = response.data;
  
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
      this.rowData = this.Orders;
      this.rowSelection = 'single';
      this.popupParent = document.body;
      this.paginationPageSize = 10;
  
    },
   
    methods: {
        async loadProductDetails() {
    const selectedProduct = this.Products.courses.find(product => product.id === this.selectedOption);
    if (selectedProduct) {
      // Update properties of newBranch with the selected product details
      this.newBranch = {...this.newBranch,
        name: selectedProduct.name,
      };
    }
  },
        toggleForm() {
       this.formVisible = !this.formVisible;
         if (!this.formVisible) {
         this.resetForm();
       }
     },
  
     resetForm() {
       this.newBranch = {
        Name: '',
       };
     },
      // toggleForm() {
      //   this.formVisible = !this.formVisible;
      // },
  
      onCellClicked(params) {
        this.childPara = params.node.data
        this.showChildRow = true;
  
      },
  
      OpenCloseFun() {
        this.showChildRow = false;
        this.ismodel = true;
      },
  
      onCellValueChanged(event) {
        console.log(event);
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
      async addBranch() {
  this.isLoading = true;
  try {
    const response = await AxiosInstance.post(`/Course/AddToTopRatedCourses`+ '?' + 'Name=' + encodeURIComponent(this.newBranch.name));
    this.ismodel = true;

    if (response.status === 200) {
      await this.getdata();
      this.loadProductDetails();
      this.$refs.Confirmation.open("Top Course Added successfully.");
      this.newBranch = {
        name: '',
      };
      this.$refs.form.reset(); 
    }
  } catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);

  } finally {
    this.isLoading = false;
    this.formVisible = false;
  }
},
    
      async getdata() {
        this.domLayout = 'autoHeight';
      this.isLoading = true;
      try {
        const res = await AxiosInstance.get(`/TopRatedCourses/getTopRatedCourses`);
        let req = res.data;
        this.Orders = req;

        const response = await AxiosInstance.get('/Course');
        this.Products = response.data;
  
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
      this.rowData = this.Orders;
      this.rowSelection = 'single';

      this.popupParent = document.body;
      this.paginationPageSize = 10;
  
    },
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
    max-width: 644px;
    margin: 1.75rem auto;
    height: 692px;
    overflow-y: auto;
    position: relative;
    top: 145px;
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
    padding: 10px 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn3 {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 3px 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
   font-size: 15px;
  }
  .btn2 {
    bottom: 32px;
    left: 224px;
    position: relative;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 5px 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
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
    position: relative;
   top: 15px;
   left: 21px;
   font-weight: 600;
   font-size: 15px;
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
   .search-box{
    width:70%;
    padding: 0px;
  }
  .filter-box{
     position: relative;
     left: 22px;
     top: 11px;
  }
  </style>