<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-xl-3 col-md-6 col-12">
                <div class="info-box bg-b-green">
                    <span class="info-box-icon push-bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Active Students</span>
                        <span class="info-box-number">{{ activeStudents.activeStudentsCount || 0 }}</span>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12">
                <div class="info-box bg-b-yellow">
                    <span class="info-box-icon push-bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Course vs Students</span>
                        <span class="info-box-number">{{ subject.length || 0 }}</span>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12">
                <div class="info-box bg-b-blue">
                    <span class="info-box-icon push-bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Faculty vs Students</span>
                        <span class="info-box-number">{{ lectureStudent.length || 0 }}</span>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12">
                <div class="info-box bg-b-pink">
                    <span class="info-box-icon push-bottom"><i class="material-icons"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Faculty vs Subjects</span>
                        <span class="info-box-number">{{ lectureSubject.length || 0 }}</span>
                    </div>
                </div>
            </div>
        </div>
        <ActiveStudents />
    </div>            
    
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import ActiveStudents from './ActiveStudents.vue';

export default {
    name: 'SuperAdmin',
    components: {
        ActiveStudents
    },
    data() {
        return {
            activeStudents: [],
            subject: [],
            lectureSubject: [],
            lectureStudent: []
        }
    },
    async created() {
        try {
            const res = await AxiosInstance.get(`/UserCourseSubscription/GetActiveStudentsCount`);
            this.activeStudents = res.data;
            console.log(this.activeStudents);
            const result = await AxiosInstance.get(`/UserCourseSubscription/TotalAmountCollectedPerSubject`);
            this.subject = result.data;
            const resu = await AxiosInstance.get(`/CoursesFacultyJ/GetAllCourseview`);
            this.lectureStudent = resu.data;
            const resul = await AxiosInstance.get(`CoursesFacultyJ/GetAllCourseDetails`);
            this.lectureSubject = resul.data;
        } catch (error) {
            console.log(error);
        }  
    }

}
</script>

<style scoped>
.col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
}
.col-12 {
    flex: 0 0 auto;
    width: 100%;
}
.bg-b-green {
    background: linear-gradient(45deg, #2ed8b6, #59e0c5);
}
.info-box {
    min-height: 100px;
    width: 100%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    transition: transform 0.3s ease;
    cursor: pointer;
}
.info-box:hover {
    transform: scale(1.1);
}
.info-box-icon.push-bottom {
    margin-top: 4px;
}
.info-box-icon {
    float: left;
    height: 70px;
    width: 70px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    line-height: 70px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 100%;
}
.info-box-content {
    padding: 10px 10px 10px 0;
    margin-left: 90px;
    color: #fff;
}
.bg-b-yellow {
    background: linear-gradient(45deg, #ffb64d, #ffcb80);
}
.bg-b-blue {
    background: linear-gradient(45deg, #4099ff, #73b4ff);
}
.bg-b-pink {
    background: linear-gradient(45deg, #ff5370, #ff869a);
}
.bg-purple-pink {
    background: linear-gradient(45deg, #8e54e9, #ff416c);
}
.bg-green-yellow {
    background: linear-gradient(45deg, #4caf50, #ffeb3b);
}
.bg-deep-blue-teal {
    background: linear-gradient(45deg, #0072ff, #00c6ff);
}

.info-box-text, .progress-description {
    display: block;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    color: #FFF;
    text-overflow: ellipsis;
    font-weight: 400;
}
.info-box-number {
    font-weight: 300;
    font-size: 21px;
}


/* @media screen and (max-width: 600px) {
.col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
}
} */
</style>
