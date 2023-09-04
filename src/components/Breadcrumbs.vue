<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(crumb, index) in breadcrumbs" :key="index" :to="crumb.to">{{ crumb.label }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>

export default {
    name: 'Breadcrumbs',
    data() {
        return {
            // breadcrumbs: [
            //     { route: '/', label: 'Home' },
            //     { route: '/Courses', label: 'Course' },
            //     { route: '/Contact', label: 'Contact' },
            //     { route: '/search', label: 'Search' },
            //     { route: '/searchresults', label: 'Searchresults' },
            //     { route: '/Academia/:name', label: 'Branches' },
            //     { route: '/CollegeDetails/:name', label: 'CollegeDetails' },
            //     { route: '/SemesterDetails', label: 'CourseDetails' },
            //     { route: '/Universities/:name', label: 'Universities' },
            //     { route: '/Instructor', label: 'Instructor' },
            //     { route: '/Faq', label: 'Faq' },
            //     { route: '/RazorPay', label: 'RazorPay' },
            //     { route: '/Privacy', label: 'Privacy' },
            //     { route: '/Terms', label: 'TermsCondition' },
            //     { route: '/Picture', label: 'ProfileUpload' },
            //     { route: '/Login', label: 'Login' },
                
            // ],
        };
    },
    computed: {
        breadcrumbs() {
            const breadcrumbs = [];
            const matchedRoutes = this.$route.matched;

            // Add a Home breadcrumb as the first item
            breadcrumbs.push({ label: 'Home', to: '/' });

            // Build breadcrumbs based on the matched routes
            matchedRoutes.forEach(route => {
                if (route.name) {
                    breadcrumbs.push({ label: route.name, to: route.path });
                }
            });

            return breadcrumbs;
        },
    },
}
</script>
