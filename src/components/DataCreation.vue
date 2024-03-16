<template>
  <div class="container">
    <form-wizard
      back-button-text="<Back"
      next-button-text="Next>"
      finish-button-text="Finish"
      color="#007bff"
      @on-complete="onComplete"
      @on-next="validateNext"
    >
      <tab-content title="Types">
        <AddTypes @selected-type-changed="handleSelectedTypeChange"  />
      </tab-content>
      <tab-content title="Academics">
        <AddAcademics
          v-if="selectedType"
          :selectedtype="selectedType"
          @selected-academic-changed="handleSelectedAcademicChange"
        />
      </tab-content>
      <tab-content title="Branches">
        <AddBranches
          v-if="selectedAcademic"
          :selectedacademic="selectedAcademic"
          @selected-branches-changed="handleSelectedBranchesChange"
        />
      </tab-content>
      <tab-content title="University">
        <AddUni
          v-if="selectedBranch"
          :selectedbranch="selectedBranch"
          @selected-university-changed="handleSelectedUniversityChange"
        />
      </tab-content>
      <tab-content title="Semester">
        <AddSem
          v-if="selectedUniversity"
          :selecteduniversity="selectedUniversity"
          @selected-semester-changed="handleSelectedSemesterChange"
        />
      </tab-content>
      <tab-content title="Courses" >
    <AddCourse v-if="selectedSemester" :selectedsemester="selectedSemester" />
  </tab-content>
    </form-wizard>
    <div v-if="validationError" class="error-message">
      Please select values for all fields.
    </div>
    <Confirmation ref="Confirmation" />
  </div>
</template>

<script>
import Confirmation from './Confirmation.vue';
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
  components: {
  FormWizard,
  TabContent,
  AddTypes,
  AddAcademics,
  AddBranches,
  AddUni,
  AddCourse,
  AddSem,
  Confirmation,
},
  emits: ['toggle-favorite'],
  
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
  methods: {
    async onComplete() {
      try {
        await this.$nextTick();
        const confirmationRef = this.$refs.Confirmation;

        if (confirmationRef && confirmationRef.open) {
          if (this.validateForm()) {
            const result = await confirmationRef.open("Course Create successfully.");
            this.$refs.Confirmation.showOKButton = true;
            this.$refs.Confirmation.showCancelButton = false;
            
            if (result) {
              this.$emit('toggle-favorite', 'dashboard');

            } else {
              // Cancel button pressed or dialog closed
              // Handle accordingly
            }
          } else {
            this.validationError = true;
          }
        } else {
          console.error("Confirmation component or its open method not found in refs.");
        }
      } catch (error) {
        console.error(error);
        const confirmationRef = this.$refs.Confirmation;
        confirmationRef?.open("Error Course Creation.");
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
  },
  handleSelectedAcademicChange(selectedAcademic) {
    this.selectedAcademic = selectedAcademic;
  },
  handleSelectedBranchesChange(selectedBranch) {
      this.selectedBranch = selectedBranch;
  },
  handleSelectedUniversityChange(selectedUniversity) {
      this.selectedUniversity = selectedUniversity;
  },
  handleSelectedSemesterChange(selectedSemester) {
      this.selectedSemester = selectedSemester;
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