import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import LoginPage from "./components/LoginPage.vue";
import Branches from "./components/Branches.vue";
import CollegeDetails from './components/CollegeDetails.vue';
import CourseDetails from '././components/CourseDetails.vue';
import FileUpload from './components/FileUpload.vue';
import CoursesPage from './components/CoursesPage.vue';
import Universities from './components/Universities.vue';
import Instructor from './components/Instructor.vue';
import Errorone from './components/Errorone.vue';
import Errortwo from './components/Errortwo.vue';
import Faq from './components/Faq.vue';
import Search from './components/Search.vue'
import Searchresults from './components/Searchresults.vue'
import store from './store/store'
import { Hub } from "@aws-amplify/core"
import { Auth } from "@aws-amplify/auth"
import Privacy from "./components/Privacy.vue"
import TermsCondition from "./components/TermsCondition.vue"
import GetSupport from "./components/GetSupport.vue"
import Mylearnings from "./components/Mylearnings.vue"
import UpdatedProfile from "./components/UpdatedProfile.vue"
import TopCourse from "./components/TopCourse.vue"
import BestFaculty from "./components/BestFaculty.vue"
import AcademiNew from "./components/AcademiNew.vue"
import UserNotification from "./components/UserNotification.vue"
import Course from "./components/Course.vue"
import CoursePayment from "./components/CoursePayment.vue"
import Payment from "./components/Payment.vue"
import SideBar from "./components/SideBar.vue"
import ApLecture from "./components/ApLecture.vue"
import ApHome from "./components/ApHome.vue"
import Adminpanal from "./components/Adminpanal.vue"
import SubStudents from "./components/SubStudents.vue"
import StudentDetails from "./components/StudentDetails.vue"
import ActStudents from "./components/ActStudents.vue"
import InactStudents from "./components/InactStudents.vue"
import ApBilling from "./components/ApBilling.vue"
import AlertDialog from './components/AlertDialog.vue';
import ApFaculty from './components/ApFaculty.vue'
import ActstdBycourse from './components/ActstdBycourse.vue'
import CourseWorkFlow from './components/CourseWorkFlow.vue'
import BranchesUpdate from './components/BranchesUpdate.vue'
import SemUpdate from './components/SemUpdate.vue'
import UniUpdate from './components/UniUpdate.vue'
import CourseUpdate from './components/CourseUpdate.vue'
import ApBestFaculty from './components/ApBestFaculty.vue'
import ListOfSubject from './components/ListOfSubject.vue'
import AdUni from './components/AdUni.Vue'
import AdBranches from './components/AdBranches.vue'
import AdCourse from './components/AdCourse.vue'
import AdSem from './components/AdSem.vue'
import AcademicsUpdate from './components/AcademicsUpdate.vue'
import AdAcademics from './components/AdAcademics.vue'
import AdTypes from './components/AdTypes.vue'
import TypesUpdate from './components/TypesUpdate.vue'

let user = null; // Initialize user as null

function getUser() {
  return Auth.currentAuthenticatedUser()
    .then(data => {
      if (data && data.signInUserSession) {
        return data;
      }
    })
    .catch(error => {
      console.error(error);
        return null;
    });
}

Hub.listen("auth", async data => {
  if (data.payload.event === 'signOut') {
    user = null;
    store.commit('setUser', null);
    router.push({path: '/login'});
    // Handle sign-out actions
  } else if (data.payload.event === 'signIn') {
    user = await getUser();
    // Handle sign-in actions, e.g., store.commit('isLoggedIn', true)
    store.commit('isLoggedIn', true); 
    // Access the entire user attribute details
    const attributes = user.attributes;
    console.log(attributes);
    // Store the user data in your state, for example:
    store.commit('setUser', user); // Commit user data to the store

    localStorage.setItem("username", user.signInUserSession.idToken.jwtToken.payload); 
    const previousRoute = sessionStorage.getItem('previousRoute');
    if (previousRoute) {
      router.push(previousRoute); // Navigate to the previously visited page
    } else {
      router.push({ path: '/' }); // Redirect to the home page
    }

    // Continue with your application logic
  }
});


const routes = [
 
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
        title: 'Unoco Application',
    },

  },
  {
    path: "/Mylearnings",
    name: "Mylearnings",
    component: Mylearnings,
    meta: {
      title: 'Unoco Application',
    },  
  },
  {
    path: "/Login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
        title: 'Log In And Start Learning',
    },
  },
  {
    path: "/errorone",
    name: "Errorone",
    component: Errorone,
    meta: {
        title: '',
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
        title: '',
    },
  },
  {
    path: "/searchresults",
    name: "Searchresults",
    component: Searchresults,
    meta: {
        title: '',
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: Errortwo,
    meta: {
        title: '',
    },
  },
  
  {
    path: "/Academia/:name",
    name: "Branches",
    component: Branches,
    meta: {
        title: 'Branches Details Page',
    },
  },
  {
    path: "/Courses",
    name: "CoursesPage",
    component: CoursesPage,
    meta: {
        title: 'Courses Page',
    },
  },
  {
    path: "/CollegeDetails/:name",
    name: "Semester",
    component: CollegeDetails,
    meta: {
        title: 'College Semaster details Page',
    },
  },
  {
    path: "/CourseDetails/:name",
    name: "CourseDetails",
    component: CourseDetails,
    meta: {
        title: 'Semaster details Page',
    },
  },
  {
    path: "/FileUpload",
    name: "FileUpload",
    component: FileUpload,
    meta: {
        title: 'File Upload Page',
    },
  },
  {
    path: "/Universities/:name",
    name: "Universities",
    component: Universities,
    meta: {
        title: 'Universities Upload Page',
        // breadcrumb: route => route.params.id
    },
  },
  {
    path: "/Instructor/:name",
    name: "Instructor",
    component: Instructor,
    meta: {
        title: 'Instructor Page',
    },
  },
  {
    path: "/Faq",
    name: "Faq",
    component: Faq,
    meta: {
        title: 'Faq Page',
    },
  },
  {
    path: "/Privacy",
    name: "Privacy",
    component: Privacy,
    meta: {
        title: 'Privacy Page',
    },
  },
  {
    path: "/Terms",
    name: "TermsCondition",
    component: TermsCondition,
    meta: {
        title: 'Terms Condition Page',
    },
  },
  {
    path: "/Contact",
    name: "Contact",
    component: GetSupport,
    meta: {
        title: 'ContactUs Page',
    },
  },
  {
    path: "/UpdatedProfile",
    name: "UpdatedProfile",
    component: UpdatedProfile,
    meta: {
        title: 'Picture Page',
    },
  },
  {
    path:"/TopCourse",
    name: "TopCourse",
    component: TopCourse,
    meta: {
        title: 'Picture Page',
    },
  }, 
  {
    path:"/BestFaculty",
    name: "BestFaculty",
    component: BestFaculty,
    meta: {
        title: 'Picture Page',
    },
  },
  {
    path:"/UserNotification",
    name: "UserNotification",
    component: UserNotification,
    meta: {
        title: 'Notification Page',
    },
  },

  {
    path: "/AcademiNew",
    name: "AcademiNew",
    component: AcademiNew,
    meta: {
        title: 'Privacy Page',
    },
  },
  

  {
    path:"/Course",
    name: "Course",
    component: Course,
    meta: {
        title: 'Course Page',
    },
  },
  
  {
    path:"/CoursePayment",
    name: "CoursePayment",
    component: CoursePayment,
    meta: {
        title: 'CoursePayment Page',
    },
  },
  {
    path:"/Payment",
    name: "Payment",
    component: Payment,
    meta: {
        title: 'Payment Page',
    },
  },
  {
    path: "/SideBar",
    name: "SideBar",
    component: SideBar,
    meta: {
      title: 'Unoco Application',
    },  
  },

  {
    path: "/Adminpanal",
    name: "Adminpanal",
    component: Adminpanal,
    children: [
      {
        path: "/ApHome",
        name: "ApHome",
        component: ApHome,
      },
      {
        path: "/ApLecture",
        name: "ApLecture",
        component: ApLecture,
      },
      {
        path: "/StudentDetails",
        name: "StudentDetails",
        component: StudentDetails,
      },
      {
        path: "/ActStudents",
        name: "ActStudents",
        component: ActStudents,

      },
      {
        path: "/InactStudents",
        name: "InactStudents",
        component: InactStudents,
      },
      {
        path: "/ApBilling",
        name: "ApBilling",
        component: ApBilling,
      },
      {
        path: "/ApFaculty",
        name: "ApFaculty",
        component: ApFaculty,
      },
      {
        path: "/SubStudents",
        name: "SubStudents",
        component: SubStudents,
      },
      {
        path: "/ActstdBycourse",
        name: "ActstdBycourse",
        component: ActstdBycourse,
      },
      {
        path: "/CourseWorkFlow",
        name: "CourseWorkFlow",
        component: CourseWorkFlow, 
      },
      {
        path: "/BranchesUpdate",
        name: "BranchesUpdate",
        component: BranchesUpdate, 
      },
      {
        path: "/SemUpdate",
        name: "SemUpdate",
        component: SemUpdate, 
      },
      {
        path: "/UniUpdate",
        name: "UniUpdate",
        component: UniUpdate, 
      },
      {
        path: "/CourseUpdate",
        name: "CourseUpdate",
        component: CourseUpdate, 
      },
      {
        path: "/ApBestFaculty",
        name: "ApBestFaculty",
        component: ApBestFaculty, 
      },
      {
        path: "/ListOfSubject",
        name: "ListOfSubject",
        component: ListOfSubject, 
      },
      {
        path: "/AdBranches",
        name: "AdBranches",
        component: AdBranches, 
      },
      {
        path: "/AdCourse",
        name: "AdCourse",
        component: AdCourse, 
      },
      {
        path: "/AdSem",
        name: "AdSem",
        component: AdSem, 
      },
      {
        path: "/AdUni",
        name: "AdUni",
        component: AdUni, 
      },
      {
        path:"/AcademicsUpdate",
        name: "AcademicsUpdate",
        component: AcademicsUpdate, 

      },
      {
        path:"/AdAcademics",
        name: "AdAcademics",
        component: AdAcademics, 

      },
      {
        path:"/AdTypes",
        name: "AdTypes",
        component: AdTypes, 

      },
      {
        path:"/TypesUpdate",
        name: "TypesUpdate",
        component: TypesUpdate, 

      },
      

     ],
    meta: {
      title: 'Unoco Application',
    },
  },
  {
    path: '/Alert',
    name: 'AlertDialog',
    component: AlertDialog,
    meta: {
      title: 'Unoco Application'
    }
  },

];

const router = createRouter({
	history: createWebHistory(),
  // base: '',
	routes,
  breadcrumbs: {
    separator: " / ", // Customize the separator
  },
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',

			}
		} else {
			return { 
				top: 0 
			}
		}
	}
});
router.beforeEach((to, from, next) => {
    const title = to.meta.title

    //Take the title from the parameters
    const titleFromParams = to.params.name;
    // If the route has a title, set it as the page title of the document/page
    if (title) {
      document.title = title
    }
    // If we have a title from the params, extend the title with the title
    // from our params
    if (titleFromParams) {
      document.title = `${titleFromParams} - ${document.title}`;
    }
    // sessionStorage.setItem('previousRoute', from.fullPath + ':' + from.name);
    sessionStorage.setItem('previousRoute', from.fullPath);
    sessionStorage.setItem('previousRouteName', from.name);

    //Vue.$gtm.trackView(to.name, to.path);
	next();
});

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      user = await getUser();
      if (!user) {
          return next({
              path: '/login'
          });
      } 
      return next()
  }
  return next()
});

export default router;