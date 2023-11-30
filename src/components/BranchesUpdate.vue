<template>
    <div class="container" ><p> > Courses </p>
     <div style="padding: 20px;"  >
       
       <div class="example-wrapper" >
         
         <div style="height: 100%;">
           <ag-grid-vue 
             :domLayout="domLayout"
             class="ag-theme-alpine"
             :columnDefs="columnDefs"
             :rowData="rowData"
             :editType="editType"
             :rowSelection="rowSelection"
             :defaultColDef="defaultColDef"
             :suppressExcelExport="true"
             :popupParent="popupParent"
             @grid-ready="onGridReady"
             @cell-value-changed="onCellValueChanged"
             @row-clicked='onCellClicked'
             cacheQuickFilter = true
             :pagination = "true"
             :paginationPageSize="paginationPageSize"
             isLoding ="true"
           >
           </ag-grid-vue>
         </div>  
       </div> 
     </div>
     <form @submit.prevent="addBranch" >
      <p><b></b> {{newBranch.id}}</p>
      <label for="branchName"> Name:</label>
      <input type="text" id="branchName" v-model="newBranch.name" required><br>

      <label for="description">Description:</label>
      <input type="text" id="description" v-model="newBranch.description" required><br>

      <label for="academiaId">AcademiaId:</label>
      <input type="text" id="academiaId" v-model="newBranch.academiaId" required><br>

      <label for="branchName"><b>BranchName:</b></label>
      <input type="text" id="branchName" v-model="newBranch.branchName" required>

      <button type="submit">Add Branch</button>
    </form>
   <div v-if="showChildRow">
   <div class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLabel" style="display:block;position: fixed; top: 170px;left: 500px;" aria-modal="true" role="dialog" >
     <div class="modal-dialog" role="document">
       <div class="modal-content mc">
         
         <div class="modal-body" style="overflow: auto !important;">
           
             <div class="container bg-light">
                                 <div class="row" v-if="ismodel">
                                     <div class="col-sm-12">
                                       <p><b>ID: </b> {{childPara.id  }}</p>
                                          <!-- <p>Customer Details:{{ childPara.customerDetails }} </p> -->
                                          <p><b>Branch Name:</b>{{childPara.name }}</p>
                                          <p><b>Description:</b> {{ childPara.description }}</p>
                                          
                                      </div>
                                 </div>
                                 <div class="row" v-else>
                                   <div class="col-sm-12">
                                          <p><b>ID: </b> {{childPara.id  }}</p>
                                          
                                          <div class="">
                                           <label><b>Branch Name:</b></label><br>
                                           <input type="text" v-model="this.childPara.name" />
                                         </div> 
                                         <div class="">
                                           <label><b>Description:</b></label><br>
                                           <input type="text" v-model="this.childPara.description" />
                                         </div>  
                                     </div>
                                         
                                 </div>
                                </div>
            </div>
           <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="edit()">Edit</button>
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="update(this.childPara.id)">Update</button>
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
   
   import axios from "axios";
   import "ag-grid-community/styles/ag-grid.css";
   import "ag-grid-community/styles/ag-theme-alpine.css";
   import { AgGridVue } from "ag-grid-vue3";
   // import AlertDialog from './AlertDialog.vue';
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
        name: '',
        description: '',
        academiaId: '',
        branchName: '',
        // Add other properties as needed
      },
         userName: '',
         ismodel: true,
         isLoading: false,
         showDialog: false,
         dialogTitle: '',
         dialogMessage: '',
         domLayout: null,
         Orders: [],
         req: [],
         columnDefs: [{ name: 'SL.No', field: 'id', suppressSizeToFit: true  },{ name:'Branch Name', field: 'name' },{name:'Description',field:'description'}],
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
         const res = await axios.get(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/Branches`);
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
       onRowDataA() {
         this.gridApi.setRowData(colors);
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
                 const res = await axios.put(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/Branches` + '?' +'id='+ id + '&name='+ this.childPara.name + '&desc=' + this.childPara.description );
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
        const response = await axios.post('https://migzype4x8.ap-southeast-1.awsapprunner.com/api/Branches', this.newBranch);
         if (response.status === 201) {
          console.log("Branch added successfully");
           await this.getdata();
          this.gridApi.refreshCells({ force: true });
        }
      } catch (error) {
        this.isLoading = false;
        console.error("Error adding branch:", error);
      }
      finally {
             this.isLoading = false;
             }
    },
         onLogOut() {
           this.$store.commit('isLoggedIn', false);
           this.$router.push('/Loginpage');
         },  
         async getdata(){
           this.domLayout = 'autoHeight'; 
           this.isLoading = true;
           try {
             const res = await axios.get(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/Branches`);
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
   width: 45%;
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
       .mc{
         height: 0px;
         width: 0px;
       }
       .example-wrapper {
 width: 100%;
       }
     }
   </style>