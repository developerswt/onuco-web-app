<template>
  <div class="container">
    <form-wizard
      back-button-text="Go Back!"
      next-button-text="Go Next!"
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
import { FormWizard, TabContent } from "vue3-form-wizard";
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