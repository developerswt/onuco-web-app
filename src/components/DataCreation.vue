<template>

    <div class="container">
        <h5>Data Creation & Update</h5>
  
        <form-wizard
    @on-complete="onComplete"
    back-button-text="Go back!"
    next-button-text="Go next!"
    finish-button-text="FINISH"
    color="#007bff"
    @on-next="onNext">
    <tab-content title="Types">
        <AddTypes @selected-type-changed="handleSelectedTypeChange" />
    </tab-content>
    <tab-content title="Academics">
<AddAcademics :selectedtype="selectedType" @selected-academic-changed="handleSelectedAcademicChange" v-if="selectedType !== null" />
    </tab-content>
    <tab-content title="Branches">
      <AddBranches :selectedacademic="selectedAcademic" @selected-branches-changed="handleSelectedBranchesChange" v-if="selectedAcademic" />
    </tab-content>
    <tab-content title="University">
      <AddUni :selectedbranch="selectedBranch" @selected-university-changed="handleSelectedUniversityChange" v-if="selectedBranch" />
    </tab-content>
    <tab-content title="Semester">
      <AddSem :selecteduniversity="selectedUniversity" @selected-semester-changed="handleSelectedSemesterChange" v-if="selectedUniversity" />
    </tab-content>
    <tab-content title="Courses" >
      <AddCourse :selectedsemester="selectedSemester" v-if="selectedSemester" />
    </tab-content>
    <!-- <tab-content title="Academics" v-if="selectedType" >
      <AddAcademics />
    </tab-content>
    <tab-content title="Branches" v-if="selectedAcademics">
      <AddBranches />
    </tab-content> -->
    <!-- <tab-content title="University" v-if="selectedBranch">
      <AddUni />
    </tab-content>
    <tab-content title="Semester">
      <AddSem />
    </tab-content>
    <tab-content title="Courses" >
      <AddCourse />
    </tab-content> -->
  
  </form-wizard>
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
    name: "Aphome",
  data() {
    return {
        selectedType: null,
        selectedAcademic: null,
        selectedBranch: null,
        selectedUniversity: null,
        selectedSemester: null
    }    
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
     computed: {
        // selectedType() {
        //     console.log(this.$store.state.selectedType);
        //     return this.$store.state.selectedType;
        // },
        // selectedAcademics(){
        //     console.log(this.$store.state.selectedAcademics);
        //     return this.$store.state.selectedAcademics;
        // },
        // selectedBranch() {
        //     console.log(this.$store.state.selectedBranch);
        //     return this.$store.state.selectedBranch;
        // },
  },
  methods: {
    onComplete() {
      // Handle completion if needed
    },
    onNext() {
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

</style>
