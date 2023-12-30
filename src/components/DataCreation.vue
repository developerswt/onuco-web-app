<template>
  <div class="container">
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

    // Your validation logic for the "Types" tab
    if (this.selectedType !== null && this.selectedType !== undefined) {
      this.validationErrors.types = false;
    } else {
      this.validationErrors.types = true;
    }
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
  /* Your scoped styles go here */
  .error-message {
    color: red;
    margin-top: 10px;
  }
</style>