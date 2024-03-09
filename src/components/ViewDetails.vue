<template>
    <div class="row pt-4">
        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card-box">
                <div class="card-head">
                    <header>Active Student Details</header>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>StudentName</th>
                                        <th>Cours Name</th>
                                        <th>StartDate</th>
                                        <th>EndDate</th>
                                        <th>ActualPrice</th>
                                        <th>DiscountedPrice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="Student in activeStudents.activeStudents" :key="Student.id">
                                        <td>{{ Student.id }}</td>
                                        <td>{{ Student.userName}}</td>
                                        <td>{{ Student.name }}</td>
                                        <td>{{ Student.startdate }}</td>
                                        <td>{{ Student.enddate }}</td>
                                        <td>{{ Student.actualPrice }}</td>
                                        <td>{{ Student.discountedPrice }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card-box">
                <div class="card-head">
                    <header>Active Student Result</header>
                    <div class="card-body ">
                        <div class="h6">Active Students Count</div><b> {{ activeStudents.activeStudentsCount }}</b>
                        <div class="h6">Discounted Amount</div><b>{{ activeStudents.discountedAmount }}</b>
                        <div class="h6">Total Amount</div><b>{{ activeStudents.totalAmount }}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card-box">
                <div class="card-head">
                    <header>Course Vs Subject Details</header>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>SubjectName</th>
                                        <th>SubjectId</th>
                                        <th>SemesterId</th>
                                        <th>TotalAmount</th>
                                        <th>Subscribed Std</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="student in course" :key="student.id">
                                        <td>{{ student.courseId }}</td>
                                        <td>{{ student.subjectName }}</td>
                                        <td>{{ student.subjectId }}</td>
                                        <td>{{ student.semesterId }}</td>
                                        <td>{{ student.totalAmountCollected }}</td>
                                        <td>{{ student.totalSubscribedStudents }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row pt-2">
        <div class="col-lg-5 col-md-12 col-sm-12 col-12">
            <div class="card-box">
                <div class="card-head">
                    <header>Lecture Vs Student</header>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table table-hover">
                                <thead>
                                    <tr>
                                        <th>Faculty Id</th>
                                        <th>SubScribedCount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="student in lectureStudent" :key="student.id">
                                        <td>{{ student.facultycognitoid }}</td>
                                        <td>{{ student.completesubscribedcount }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12 col-12">
            <div class="card-box">
                <div class="card-head">
                    <header>Lecture Vs Subject</header>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table table-hover">
                                <thead>
                                    <tr>
                                        <th>Faculty Id</th>
                                        <th>TotalCourseCount</th>
                                        <th>TotalPrice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="student in lectureSubject" :key="student.id">
                                        <td>{{ student.facultyCognitoId }}</td>
                                        <td>{{ student.totalCourseNameCount }}</td>
                                        <td>{{ student.totalPrice }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';

export default {
    name: 'ViewDetails',
    data() {
        return {
            activeStudents: [],
            course: [],
            lectureStudent: [],
            lectureSubject: [],
        }
    },
    async created() {
        try {
            const res = await AxiosInstance.get(`/UserCourseSubscription/GetActiveStudentsCount`);
            this.activeStudents = res.data;
            const result = await AxiosInstance.get(`/UserCourseSubscription/TotalAmountCollectedPerSubject`);
            this.course = result.data;
            const resu = await AxiosInstance.get(`/CoursesFacultyJ/GetAllCourseview`);
            this.lectureStudent = resu.data;
            const resul = await AxiosInstance.get(`CoursesFacultyJ/GetAllCourseDetails`);
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
}
</style>