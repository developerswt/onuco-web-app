<template>
    <div class="row pt-2">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="card-box">
                <div class="card-head">
                    <header>Faculty Vs Student</header>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table table-hover">
                                <thead>
                                    <tr>
                                        <th>ActiveStudentCount</th>
                                        <th>StartDate</th>
                                        <th>EndDate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="student in lectureStudent" :key="student.id">
                                        <td>{{ student.activeStudentsCount }}</td>
                                        <td>{{ student.startdate }}</td>
                                        <td>{{ student.enddate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="card-box">
                <div class="card-head">
                    <header>Faculty Subject Vs Student</header>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table table-hover">
                                <thead>
                                    <tr>
                                        <th>CourseName</th>
                                        <th>TotalPrice</th>
                                        <th>TotalStudentsSubscribed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ lectureSubject.courseName }}</td>
                                        <td>{{ lectureSubject.totalPrice }}</td>
                                        <td>{{ lectureSubject.totalStudentsSubscribed }}</td>
                                    </tr>		
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FacultyPayment />
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import FacultyPayment from './FacultyPayment.vue';

export default {
    name: 'ViewDetails',
    components: {
        FacultyPayment,
    },
    data() {
        return {
            lectureStudent: [],
            lectureSubject: []
        }
    },
    async created() {
        try {
            const resu = await AxiosInstance.get(`/CoursesFacultyJ/GetActiveStudents`);
            this.lectureStudent = resu.data;
            const resul = await AxiosInstance.get(`/CoursesFacultyJ/GetCourseDetails`);
            this.lectureSubject = resul.data;
        } catch (error) {
        console.error(error);
        }    
    }
}
</script>

<style scoped>
.col-12 {
    flex: 0 0 auto;
    width: 100%;
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
}

b,
strong {
    font-weight: bolder;
}

.h6,
h6 {
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
}</style>