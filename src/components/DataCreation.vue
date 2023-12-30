<template>
  <div class="container">
    <div class="col-sm-12">
      <div class="card card-box">
          <div class="card-head">
            <header>Course Creation</header>
          </div>
          <div class="card-body">
    <form-wizard
      @on-complete="onComplete"
      back-button-text="Go Back!"
      next-button-text="Go Next!"
      finish-button-text="Finish"
      color="#007bff"
      @on-next="validateNext"
    >
      <tab-content title="Types">
        <AddTypes @selected-type-changed="handleSelectedTypeChange"  />
      </tab-content>
      <tab-content title="Academics">
        <AddAcademics
          :selectedtype="selectedType"
          @selected-academic-changed="handleSelectedAcademicChange"
          v-if="selectedType"
        />
      </tab-content>
      <tab-content title="Branches">
        <AddBranches
          :selectedacademic="selectedAcademic"
          @selected-branches-changed="handleSelectedBranchesChange"
          v-if="selectedAcademic"
        />
      </tab-content>
      <tab-content title="University">
        <AddUni
          :selectedbranch="selectedBranch"
          @selected-university-changed="handleSelectedUniversityChange"
          v-if="selectedBranch"
        />
      </tab-content>
      <tab-content title="Semester">
        <AddSem
          :selecteduniversity="selectedUniversity"
          @selected-semester-changed="handleSelectedSemesterChange"
          v-if="selectedUniversity"
        />
      </tab-content>
      <tab-content title="Courses" >
    <AddCourse :selectedsemester="selectedSemester" v-if="selectedSemester" />
  </tab-content>
    </form-wizard>
    <div v-if="validationError" class="error-message">
      Please select values for all fields.
    </div>
  </div>
  </div>
  </div>
  </div>

</template>

<script>
//import { mapState } from 'vuex';
import AddTypes from './AddTypes.vue'
import AddAcademics from './AddAcademics.vue'
import AddBranches from './AddBranches.vue'
import AddUni from './AddUni.vue'
import AddSem from './AddSem.vue'
import AddCourse from './AddCourse.vue'
import {FormWizard,TabContent} from "vue3-form-wizard";
import 'vue3-form-wizard/dist/style.css'
// import AxiosInstance  from '../config/axiosInstance';
export default {
  name: 'DataCreation',
  data() {
    return {
      selectedType: null,
      selectedAcademic: null,
      selectedBranch: null,
      selectedUniversity: null,
      selectedSemester: null,
      validationError: false,
    };
  },
  components: {
  FormWizard,
  TabContent,
  AddTypes,
  AddAcademics,
  AddBranches,
  AddUni,
  AddCourse,
  AddSem
},
  methods: {
    onComplete() {
      if (this.validateForm()) {
        alert('Completed');
        this.$router.push('/Aphome');
      } else {
        this.validationError = true;
      }
    },
    validateNext() {
      if (this.validateForm()) {
        FormWizard.value?.nextTab();
        this.validationError = false;
      } else {
        this.validationError = true;
      }
    },
    validateForm() {
      return (
        this.selectedType &&
        this.selectedAcademic &&
        this.selectedBranch &&
        this.selectedUniversity &&
        this.selectedSemester
      );
    },
  
    handleSelectedTypeChange(selectedType) {
    this.selectedType = selectedType;
    console.log(this.selectedType);
  },
  handleSelectedAcademicChange(selectedAcademic) {
    this.selectedAcademic = selectedAcademic;
    console.log(this.selectedAcademic);
  },
  handleSelectedBranchesChange(selectedBranch) {
      this.selectedBranch = selectedBranch;
      console.log(this.selectedBranch);
  },
  handleSelectedUniversityChange(selectedUniversity) {
      this.selectedUniversity = selectedUniversity;
      console.log(this.selectedUniversity);
  },
  handleSelectedSemesterChange(selectedSemester) {
      this.selectedSemester = selectedSemester;
      console.log(this.selectedSemester);
  }
  },
};
</script>

<style scoped>

  .form-wizard {
    width: 100% !important;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
  .card-box {
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    margin-bottom: 20px;
    margin-top: 20px;
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

.card-body:last-child {
    border-radius: 0 0 2px 2px;
}
.card-body {
    padding: 10px 24px 14px 24px;
    position: relative;
}
.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}
</style>