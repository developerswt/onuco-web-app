

<template>
  <div class="container" ><p>Types Update </p>
      <div class="row">
          <div class="col-lg-6 col-sm-12">
   <div style="padding: 20px;"  >
     
     <div class="example-wrapper" >
       
       <div style="height: 100%;">
         <ag-grid-vue 
           :dom-layout="domLayout"
           class="ag-theme-alpine"
           :column-defs="columnDefs"
           :row-data="rowData"
           :edit-type="editType"
           :row-selection="rowSelection"
           :default-col-def="defaultColDef"
           :suppress-excel-export="true"
           :popup-parent="popupParent"
           cache-quick-filter = true
           :pagination = "true"
           :pagination-page-size="paginationPageSize"
           is-loding ="true"
           @grid-ready="onGridReady"
           @cell-value-changed="onCellValueChanged"
           @row-clicked='onCellClicked'
         >
         </ag-grid-vue>
       </div>  
     </div> 
   </div>
   <button class="btn1" @click="toggleForm">{{ formVisible ? 'Close' : 'Add New' }}</button>
  </div>
   <div class="col-lg-6 col-sm-12">
   <form v-show="formVisible" class="frm" style="margin-top:23px" @submit.prevent="addBranch" >      
      <p><b></b> {{newBranch.id}}</p>
    <label for="userCourseSubscriptionId"> UserCourse Subscription Id:</label>
    <input id="userCourseSubscriptionId" v-model="newBranch.userCourseSubscriptionId" type="text" required><br>

    <label for="facuiltyCognitoId">Facuilty CognitoId:</label>
    <input id="facuiltyCognitoId" v-model="newBranch.facuiltyCognitoId" type="text" required><br>

    <label for="paymentDate">Payment Date:</label>
    <input id="paymentDate" v-model="newBranch.paymentDate" type="text" required><br>

    <label for="amountPaid">Amount Paid:</label>
    <input id="amountPaid" v-model="newBranch.amountPaid" type="text" required><br>

    <label for="balanceAmount">Balance Amount:</label>
    <input id="balanceAmount" v-model="newBranch.balanceAmount" type="text" required><br>

    <label for="modeofPay">Mode Of Pay:</label>
    <input id="modeofPay" v-model="newBranch.modeofPay" type="text" required><br>

    <label for="isActive">IsActive:</label>
    <input id="isActive" v-model="newBranch.isActive" type="text" required><br>

    <button class="btn2" type="submit">Add Payment Data</button>
  </form>
  </div>
  </div>
 <div v-if="showChildRow">
 <div class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLabel" style="display:block;" aria-modal="true" role="dialog" >
   <div class="modal-dialog" role="document">
     <div class="modal-content mc">
       
       <div class="modal-body" style="overflow: auto !important;">
         
           <div class="container bg-light">
                               <div v-if="ismodel" class="row">
                                   <div class="col-sm-12">
                                     <p><b>ID: </b> {{childPara.id  }}</p>
                                        <p><b>Amount Paid:</b>{{childPara.amountPaid }}</p>
                                        <p><b>Balance Amount:</b> {{ childPara.balanceAmount }}</p>
                                        <p><b>Mode Of Pay:</b>{{ childPara.modeofPay }} </p>
                                        <p><b>IsActive</b>:{{ childPara.isActive }} </p>

                                   </div>
                               </div>
                               <div v-else class="row">
                                 <div class="col-sm-12">
                                        <p><b>ID: </b> {{childPara.id  }}</p>
                                        
                                        <div class="">
                                         <label><b>Amount Paid:</b></label><br>
                                         <input v-model="childPara.amountPaid" type="text" />
                                       </div> 
                                       <div class="">
                                         <label><b>Balance Amount:</b></label><br>
                                         <input v-model="childPara.balanceAmount" type="text" />
                                       </div>  
                                       <div class="">
                                         <label><b>Mode of Pay:</b></label><br>
                                         <input v-model="childPara.modeofPay" type="text" />
                                       </div> 
                                       <div class="">
                                         <label><b>IsActive:</b></label><br>
                                         <input v-model="childPara.isActive" type="text" />
                                       </div> 
                                   </div>
                                       
                               </div>
                              </div>
          </div>
         <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="edit()">Edit</button>
                               <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="update(childPara.id)">Update</button>
                               <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="addBranch(this.childPara)">Add Branch</button> -->
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="OpenCloseFun()">Close</button> 
       </div>
         
 </div>
 
     
     </div>
   </div>
   <!-- <button type="button" class="btn btn-secondary" @click="addBranch(childPara)">Add Branch</button> -->
 </div>
   <Loading v-model:active="isLoading"></Loading>
   </div>
 </template>
 
 <script>
 
 import AxiosInstance  from '../config/axiosInstance';
 import "ag-grid-community/styles/ag-grid.css";
 import "ag-grid-community/styles/ag-theme-alpine.css";
 import { AgGridVue } from "ag-grid-vue3";
 import Loading from 'vue3-loading-overlay';
 import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
 
 export default {
   name: "OrdersPage",
   components: {
     AgGridVue,
     Loading,
     // AlertDialog
   },
   data: function () {
     return {
      newBranch: {
      userCourseSubscriptionId: '',
      facuiltyCognitoId: '',
      paymentDate: '',
      amountPaid: '',
      balanceAmount: '',
      modeofPay: '',
      isActive: '',
     
    },
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
       columnDefs: [{ name: 'SL.No', field: 'id', suppressSizeToFit: true  },{ name:'Facuilty CognitoId', field: 'facuiltyCognitoId' },{name:'Payment Date',field:'paymentDate'},{name:'Amount Paid',field:'amountPaid'},{name:'Balance Amount',field:'balanceAmount'},{name:'Modeof Pay',field:'modeofPay'},{name:'IsActive',field:'isActive'}],
       gridApi: null,
       defaultColDef:{sortable: true, filter: true, width: 150, resizable: true, applyMiniFilterWhileTyping : true},
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
      
           const res = await AxiosInstance.get(`/FacultyCourseSubscriptionPayment`);
           let req = res.data;
           this.Orders = req;
         
         } catch (error) {
             this.isLoading = false;
             console.log(error);
             this.showDialog = true;  
             this.dialogTitle= "Error";
             this.dialogMessage= "Not get data";
           }
           finally {
           this.isLoading = false;
           }
           this.rowData = this.Orders;
           this.rowSelection = 'single'; 
           console.log(this.rowData);
           this.popupParent = document.body;
           this.paginationPageSize = 10;
     
       },
      
   methods: {
      toggleForm() {
        this.formVisible = !this.formVisible;
      },
   onCellClicked(params) {
           this.childPara = params.node.data
       console.log(this.childPara);
       this.showChildRow= true;
 
       },
 
       OpenCloseFun(){
          this.showChildRow=false;
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
   
     async update(id) {
       this.showDialog = false;
         try {
               const res = await AxiosInstance.put(`/FacultyCourseSubscriptionPayment` + '?' +'id='+ id + '&amountpaid='+ this.childPara.amountPaid + '&balanceamount=' + this.childPara.balanceAmount + '&mode=' + this.childPara.modeofPay + '&isActive=' + this.childPara.isActive );
               console.log(res);
               this.ismodel = true;
     
           if (res.status === 200) {
             await this.getdata();
             this.gridApi.refreshCells({ force: true });
           }
         } catch (error) {
           console.log(error);
           }
     },

     async addBranch() {
      this.isLoading = true;
    try {
      const response = await AxiosInstance.post('/FacultyCourseSubscriptionPayment', this.newBranch);
      this.ismodel = true; 
      if (response.status === 200) {
        console.log("Branch added successfully");
        await this.getdata();
        this.gridApi.refreshCells({ force: true });

      alert("Insert Successful");
  } else {
    // Show failure message
    alert("Insert Fail");
  }
      
    } catch (error) {
      this.isLoading = false;
      console.error("Error adding branch:", error);
    }
    finally {
           this.isLoading = false;
           }
  },
        
       async getdata(){
         this.domLayout = 'autoHeight'; 
         this.isLoading = true;
         try {
           const res = await AxiosInstance.get(`/FacultyCourseSubscriptionPayment`);
           let req = res.data;
           this.Orders = req;
         
         } catch (error) {
             this.isLoading = false;
             console.log(error);
             this.showDialog = true;  
             this.dialogTitle= "Error";
             this.dialogMessage= "Not get data";
           }
           finally {
           this.isLoading = false;
           }
           this.rowData = this.Orders;
           this.rowSelection = 'single'; 
           console.log(this.rowData);
           this.popupParent = document.body;
           this.paginationPageSize = 10;
     
       }
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
   /* --ag-header-cell-hover-background-color: #0d4b7e;
   --ag-header-cell-moving-background-color: #0d4b7e; */
 
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
     height: 630px; /* Set the height as needed */
     overflow-y: auto;
   }
   .mc{
     height: 300px;
     width: 550px;
     overflow: hidden;
   }
   .modal-body {
     max-height: 400px; /* Adjust the max-height as needed */
     overflow-y: auto;
   }

   @media (max-width:520px) {
     /* .mc{
       height: 0px;
       width: 0px;
     } */
     .example-wrapper {
width: 100%;
     }
   }
   .frm{
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
  .btn1{
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
 </style>