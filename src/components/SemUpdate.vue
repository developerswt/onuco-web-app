

<template>
    <div class="container" ><p>Dashbord > semester Update </p>
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
     <button class="btn1" @click="toggleForm">{{ formVisible ? 'CLOSE' : 'POST DATA' }}</button>
     </div>
     <div class="col-lg-6 col-sm-12">
     <form  v-show="formVisible" class="frm" style="margin-top:22px" @submit.prevent="addBranch">     
         <p><b></b> {{newBranch.id}}</p>
      <label for="branchName"> Name:</label>
      <input id="branchName" v-model="newBranch.name" type="text" required><br>

      <label for="description">Description:</label>
      <input id="description" v-model="newBranch.description" type="text" required><br>

      <label for="universityId">University Id:</label>
      <input id="academiaId" v-model="newBranch.universityId" type="text" required><br>

      <label for="semesterName"><b>Semester Name:</b></label>
      <input id="branchName" v-model="newBranch.semesterName" type="text" required>

      <button class="btn2" type="submit">Add Semester</button>
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
                                          <!-- <p>Customer Details:{{ childPara.customerDetails }} </p> -->
                                          <p><b>Semester Name:</b>{{childPara.name }}</p>
                                          <p><b>Description:</b> {{ childPara.description }}</p>
                                          
                                          
                                      </div>
                                 </div>
                                 <div v-else class="row">
                                   <div class="col-sm-12">
                                          <p><b>ID: </b> {{childPara.id  }}</p>
                                          
                                          <div class="">
                                           <label><b>Semester Name:</b></label><br>
                                           <input v-model="childPara.name" type="text" />
                                         </div> 
                                         <div class="">
                                           <label><b>Description:</b></label><br>
                                           <input v-model="childPara.description" type="text" />
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
        universityId: '',
        semesterName: '',
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
         columnDefs: [{ name: 'SL.No', field: 'id', suppressSizeToFit: true  },{ name:'Semester Name', field: 'name' },{name:'Description',field:'description'}],
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
        const res = await AxiosInstance.get(`/Semester`);
        let req = res.data;
    this.Orders = req;
    if (Array.isArray(req.semester)) {
      this.rowData = req.semester;
    } else {
      console.error('completedStudents is not an array:', req.semester);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    this.isLoading = false;
  }
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
      //  onRowDataA() {
      //    this.gridApi.setRowData(colors);
      //  },
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
                 const res = await AxiosInstance.put(`/Semester` + '?' +'id='+ id + '&name='+encodeURIComponent( this.childPara.name) + '&desc=' +encodeURIComponent( this.childPara.description) );
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
    const response = await AxiosInstance.post('/Semester', this.newBranch);
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
    console.error("Error adding branch:", error);
  } finally {
    this.isLoading = false;
  }
},
  
         async getdata(){
           this.domLayout = 'autoHeight'; 
           this.isLoading = true;
           try {
            const res = await AxiosInstance.get(`/Semester`);
        let req = res.data;
    this.Orders = req;
    if (Array.isArray(req.semester)) {
      this.rowData = req.semester;
    } else {
      console.error('completedStudents is not an array:', req.semester);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    this.isLoading = false;
  }
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
     /* --ag-header-cell-hover-background-color: #0d4b7e;
     --ag-header-cell-moving-background-color: #0d4b7e;
    */
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