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
import ReadingFile from './components/ReadingFile.vue';
import RazorPay from './components/RazorPay.vue';
import Errorone from './components/Errorone.vue';
import Errortwo from './components/Errortwo.vue';
import Picture from './components/Picture.vue';
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
import { breadcrumbState, updateBreadcrumbs } from "./breadcrumb.service";
import Learning from "./components/Learning.vue"
import NewLearning from "./components/NewLearning.vue"
import Notification from "./components/Notification.vue"
import Course from "./components/Course.vue"
import CoursePayment from "./components/CoursePayment.vue"
import Payment from "./components/Payment.vue"

let user;

// getUser().then((user) => {
//     if (user) {
//         router.push({path: '/'});
//     }
// });

// function getUser() {
//     return Auth.currentAuthenticatedUser().then((data) => {
//         if (data && data.signInUserSession) {
//             store.commit('setUser', data);
//             return data;
//         }
//     }).catch(() => {
//         store.commit('setUser', null);
//         return null;
//     });
// }

// Hub.listen("auth", async (data) => {
//     // if (data.payload.event === 'signOut'){
//     //     user = null;
//     //     store.commit('setUser', null);
//     //     router.push({path: '/SignIn'});
//     // } else
//     if (data.payload.event === 'signIn') {
//         user = await getUser();
//         // await Auth.rememberDevice();
//         // console.log('Signed in and remembered device');
//         router.go(-1);
//         // router.push({path: '/'});
//         store.commit('isLoggedIn', true); 
//         localStorage.setItem("username", user.signInUserSession.idToken.jwtToken); 
        
       
        

//     }
// });
function getUser() {
  return Auth.currentAuthenticatedUser()
    .then((data) => {
      if (data) {
        store.commit('setUser', data);
        return data;
      }
    })
    .catch(() => {
      store.commit('setUser', null);
      return null;
    });
}

Hub.listen('auth', async (data) => {
  if (data.payload.event === 'signIn') {
    const user = await getUser();
    console.log(user);
    console.log("hi");
    if (user) {
      router.go(-1);
      store.commit('isLoggedIn', true);
      // Store user data as needed, considering data from Google or Facebook sign-ins.
      localStorage.setItem('username', user.signInUserSession.idToken.jwtToken);
      
    }
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
  // {
  //   path: "/Mylearnings",
  //   name: "Mylearnings",
  //   component: Mylearnings,
  //   meta: {
  //     title: 'Unoco Application',
  //   },
  // },
  {
    path: "/Login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
        title: 'Log In And Start Learning',
        // breadcrumb: 'Login'
    },
  },
  {
    path: "/errorone",
    name: "Errorone",
    component: Errorone,
    meta: {
        title: '',
        // breadcrumb: 'Errorone'
    },
  },
  {
    path: "/search",
    // path: "/search/:query",
    name: "Search",
    component: Search,
    meta: {
        title: '',
        // breadcrumb: 'Search'
    },
  },
  {
    path: "/searchresults",
    name: "Searchresults",
    component: Searchresults,
    meta: {
        title: '',
        // breadcrumb: 'Searchresults'
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: Errortwo,
    meta: {
        title: '',
        // breadcrumb: 'Errortwo'
    },
  },
  
  {
    // path: "/Academia/:name"
    path: "/Academia/:name",
    name: "Branches",
    component: Branches,
    meta: {
        title: 'Branches Details Page',
        breadcrumb: {
            label: 'Branches',
            parent: 'Home' 
        }
    },
  },
  {
    path: "/Courses",
    name: "CoursesPage",
    component: CoursesPage,
    meta: {
        title: 'Courses Page',
        // breadcrumb: {
        //   label: 'Courses',
        //   parent: 'Mylearnings' // Here you should use exact string as for name property in "parent" route
        // }
    },
  },
  {
    path: "/CollegeDetails/:name",
    name: "CollegeDetails",
    component: CollegeDetails,
    meta: {
        title: 'College Semaster details Page',
        // breadcrumb: 'CollegeDetails'
    },
  },
  {
    path: "/CourseDetails/:name",
    name: "CourseDetails",
    component: CourseDetails,
    meta: {
        title: 'Semaster details Page',
        // breadcrumb: CourseDetails
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
        // breadcrumb: 'Instructor'
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
    path: "/ReadingFile",
    name: "ReadingFile",
    component: ReadingFile,
    meta: {
        title: 'ReadingFile Page',
    },
  },
  {
    path: "/RazorPay",
    name: "RazorPay",
    component: RazorPay,
    meta: {
        title: 'Amount Payment Page',
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
    name: "GetSupport",
    component: GetSupport,
    meta: {
        title: 'ContactUs Page',
    },
  },
  {
    path: "/Picture",
    name: "Picture",
    component: Picture,
    meta: {
        title: 'Picture Page',
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
    path: "/Learning",
    name: "Learning",
    component: Learning,
    meta: {
        title: 'Privacy Page',
    },
  },

  {
    path: "/NewLearning",
    name: "NewLearning",
    component: NewLearning,
    meta: {
        title: 'Privacy Page',
    },
  },
  {
    path:"/Notification",
    name: "Notification",
    component: Notification,
    meta: {
        title: 'Notification Page',
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

];

const router = createRouter({
	history: createWebHistory(),
	routes,
  breadcrumbs: {
    separator: " / ", // Customize the separator
  },
	// scrollBehavior() {
	// 	document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
	// }
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
// router.use(Breadcrumbs);

router.beforeEach((to, from, next) => {
	//document.title = `${to.meta.title}`;
	//document.title = `${to.meta.title}`;
    //document.title = `${to.params.name}`;
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