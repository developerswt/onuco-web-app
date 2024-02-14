<template>
  <div class="container">
    <div class="card-box">
      <div class="card-head">
        <header>Faculty Payment Info</header>
          <div class="filter-box">
            <span for="filter-text-box">Search Here : </span>
            <input class="search-box" id="filter-text-box" v-model="filterText" type="text" placeholder="Search By Faculty Name/E-mail Id/Phone Number" />
            <button class="btn btn-primary" @click="onFilterButtonClick">Search</button>
            <p v-if="showRequiredMessage" style="color: red;">Input field is required.</p>
          </div>
      </div>
      <div class="card-body">
        <div style="padding: 20px;">
          <div class="example-wrapper">
            <div style="height: 100%;">
              <ag-grid-vue
                v-if="hasSearched"
                :dom-layout="domLayout"
                class="ag-theme-alpine"
                :column-defs="columnDefs"
                :row-data="rowData"
                :edit-type="editType"
                :row-selection="rowSelection"
                :default-col-def="defaultColDef"
                :suppress-excel-export="true"
                :popup-parent="popupParent"
                cache-quick-filter="true"
                :pagination="true"
                :pagination-page-size="paginationPageSize"
                is-loding="true"
                @grid-ready="onGridReady"
                @cell-value-changed="onCellValueChanged"
                @row-clicked="onCellClicked">
              </ag-grid-vue>
            </div>
          </div>
          <el-button class="btn1" @click="toggleForm">{{ formVisible ? 'Close' : 'Add New' }}</el-button>
            <el-dialog class="fdata" v-model="formVisible" title="Add Faculty Payment Details" :width="'470px'" :style="{ 'height': '810px' }">
              <el-form :model="newBranch" ref="form" label-position="top" class="frm"> 
                <p><b></b> {{ newBranch.id }}</p>
                <el-form-item label="UserCourse Subscription Id:" prop="userCourseSubscriptionId" required>
                  <el-input v-model="newBranch.userCourseSubscriptionId"></el-input>
                </el-form-item>
                <el-form-item label="Facuilty CognitoId:" prop="facuiltyCognitoId" required>
                  <el-input v-model="newBranch.facuiltyCognitoId"></el-input>
                </el-form-item>
                <el-form-item label="Payment Date:" prop="paymentDate" required>
                  <el-date-picker v-model="newBranch.paymentDate" type="datetime"></el-date-picker>
                </el-form-item>
                <el-form-item label="Amount Paid:" prop="amountPaid" required>
                  <el-input v-model="newBranch.amountPaid"></el-input>
                </el-form-item>
                <el-form-item label="Balance Amount:" prop="balanceAmount" required>
                  <el-input v-model="newBranch.balanceAmount"></el-input>
                </el-form-item>
                <el-form-item label="Mode Of Pay:" prop="modeofPay" required>
                  <el-input v-model="newBranch.modeofPay"></el-input>
                </el-form-item>
                <el-form-item label="IsActive:" prop="isActive" required>
                  <el-input v-model="newBranch.isActive"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="btn1" type="primary" @click="addBranch">Add Payment Data</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
      </div>
  </div>
         <!-- <div v-if="showChildRow">
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
                         <p><b>Amount Paid:</b>{{ childPara.amountPaid }}</p>
                         <p><b>Balance Amount:</b> {{ childPara.balanceAmount }}</p>
                         <p><b>Mode Of Pay:</b>{{ childPara.modeofPay }} </p>
                         <p><b>IsActive</b>:{{ childPara.isActive }} </p>

                       </div>
                     </div>
                     <div v-else class="row">
                       <div class="col-sm-12">
                         <p><b>ID: </b> {{ childPara.id }}</p>

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
                   <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="editUpdateAction()"> {{ ismodel ? 'Edit' : 'Update' }} </button>
                   <button v-if="!ismodel" type="button" class="btn btn-danger" @click="deleteUserSubscription"> Delete</button>
                   <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="OpenCloseFun()">Close</button>
                 </div>

               </div>


             </div>
           </div>
         </div> -->
         <Loading v-model:active="isLoading"></Loading>
       </div>
       <Confirmation ref="Confirmation" />    
 </div>      
</template>

<script>
import Confirmation from './Confirmation.vue';
import AxiosInstance from '../config/axiosInstance';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import moment from 'moment';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
 name: "OrdersPage",
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
    gridApi: null, // Ensure gridApi is initialized to null
    gridColumnApi: null,
    filterText: '',
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
     columnDefs: [{ name: 'userName', field: 'userName'},{ name: 'userEmail', field: 'userEmail'},{ name: 'phone_Number', field: 'phone_Number'}, { name: 'Facuilty CognitoId', field: 'facuiltyCognitoId' }, { name: 'Payment Date', field: 'paymentDate',valueFormatter: this.dateFormat.bind(this), filterType: 'date'}, { name: 'Amount Paid', field: 'amountPaid' }, { name: 'Balance Amount', field: 'balanceAmount' }, { name: 'Modeof Pay', field: 'modeofPay' }],
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

     const res = await AxiosInstance.get(`/FacultyCourseSubscriptionPayment/GetFacultyPaymentDetails`);
     let req = res.data;
     this.Orders = req;

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


   this.rowData = this.Orders.filter(order => {
 const lowerCaseFilter = this.filterText.toLowerCase();
 const includesuserName = order.userName.toLowerCase().includes(lowerCaseFilter);
 const includesModeofPay = order.modeofPay.toLowerCase() === lowerCaseFilter;
 const includesuserEmail = order.userEmail.toLowerCase().includes(lowerCaseFilter);
 const includesphone_Number = order.phone_Number;

 // You can adjust the logic based on your requirements, for example, using OR (||) or AND (&&) conditions
 return includesuserName || includesModeofPay || includesuserEmail || includesphone_Number;
});


   console.log('Filtered Data:', this.rowData);
 }
},
   
   toggleForm() {
     // Toggle the visibility of the form modal
     this.formVisible = !this.formVisible;

     // If the form is being closed, reset the newBranch data
     if (!this.formVisible) {
       this.resetForm();
     }
   },

   resetForm() {
     // Reset the newBranch data to clear the form fields
     this.newBranch = {
       userCourseSubscriptionId: '',
       facuiltyCognitoId: '',
       paymentDate: '',
       amountPaid: '',
       balanceAmount: '',
       modeofPay: '',
       isActive: '',
     };
   },
   dateFormat(params) {
     let value = params.data.paymentDate;
     if (value) {
       return moment(String(value)).format('DD/MM/YYYY T HH:mm:ss');
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
       // If in update mode, perform the update logic
       this.update(this.childPara.id);
     }
   },
   async update(id) {
     this.showDialog = false;
     try {
       const res = await AxiosInstance.put(`/FacultyCourseSubscriptionPayment` + '?' + 'id=' + id + '&amountpaid=' + this.childPara.amountPaid + '&balanceamount=' + this.childPara.balanceAmount + '&mode=' + this.childPara.modeofPay + '&isActive=' + this.childPara.isActive);
      
       if (res.status === 200) {
         await this.getdata();
       }
       this.ismodel = true;
       this.gridApi.refreshCells({ force: true });
       this.OpenCloseFun();
       this.$refs.Confirmation.open("Updated successfully.");
     } catch (error) {
       console.log(error);
       this.OpenCloseFun();
       this.$refs.Confirmation.open(" Updating Error");

     }
   },

   async addBranch() {
     this.isLoading = true;
     try {
       const response = await AxiosInstance.post('/FacultyCourseSubscriptionPayment', this.newBranch);
       this.ismodel = true;
         console.log(" added successfully");
         await this.getdata();
        //  this.gridApi.refreshCells({ force: true });
         this.toggleForm();
         this.$refs.Confirmation.open("Payment Details Added successfully.");
       
   } catch (error) {
       this.isLoading = false;
       console.error("Error adding branch:", error);
       this.$refs.Confirmation.open("Error Adding Payment Details.");
    }
     finally {
       this.isLoading = false;
       this.formVisible = false;

     }
   },

   async deleteUserSubscription() {
       try {
         this.OpenCloseFun();

           const confirmed = await this.$refs.Confirmation.open(
               "Are you sure you want to delete this Payment Details?"
           );

           if (!confirmed) {
               return; 
           }

           const id = this.childPara.id;

           const res = await AxiosInstance.delete(`/FacultyCourseSubscriptionPayment?id=${id}`);

           if (res.status === 200) {
               this.ismodel = true;
               this.gridApi.refreshCells({ force: true });
               this.OpenCloseFun();
               this.$refs.Confirmation.open(" Payment Details deleted successfully.");
               await this.getdata() ;
           } else {
               console.error('Failed to delete Payment Details ');
               this.$refs.Confirmation.open("Error deleting");
           }
       } catch (error) {
           console.error("Error deleting Payment Details:", error);
           this.$refs.Confirmation.open("Error deleting Payment Details.");
       }
   },


   async getdata() {
     this.domLayout = 'autoHeight';
     this.isLoading = true;
     try {
       const res = await AxiosInstance.get(`/FacultyCourseSubscriptionPayment`);
       let req = res.data;
       this.Orders = req;

     } catch (error) {
       this.isLoading = false;
       console.log(error);
       
     }
     finally {
       this.isLoading = false;
     }
     this.rowData = this.Orders;
     this.rowSelection = 'single';
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
 height: 630px;
 /* Set the height as needed */
 overflow-y: auto;
}

.mc {
 height: 500px;
 width: 750px;
 overflow: hidden;
}

.modal-body {
 max-height: 400px;
 /* Adjust the max-height as needed */
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
 height: 690px;
}

label {
 display: block;
 margin-bottom: 5px;
 font-weight: bold;
}

input {
 width:100%;
 padding: 2px;
 margin-bottom: 20px;
 box-sizing: border-box;
}

button {
 color: #fff;
 background-color: #007bff;
 border-color: #007bff;
 padding: 11px 25px;
 border: none;
 border-radius: 4px;
 cursor: pointer;

}

.btn2 {
 color: #fff;
 background-color: #007bff;
 border-color: #007bff;
 padding: 12px 15px;
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
 padding: 22px 23px;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 margin-bottom: 80px;
 font-weight: 600;
 font-size: 15px;
 position: relative;
 top: 15px;
 left: 2px;
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
.modal {
   display: none;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
 }

.modal-dialog {
 position: relative;
 margin: 10% auto;
}

.modal-content {
 position: relative;
 background-color: #fff;
 border: 1px solid #ccc;
 border-radius: 5px;
 box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
 padding: 15px;
 border-bottom: 1px solid #ccc;
 background-color: #f8f9fa;
}

 .modal-body {
   padding: 15px;
 }
 .button-row button {
 margin-right: 10px; 
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