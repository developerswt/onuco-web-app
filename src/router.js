import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import LoginPage from "./components/LoginPage.vue";
import Branches from "./components/Branches.vue";
import CollegeDetails from './components/CollegeDetails.vue';
import SemesterDetails from './components/SemesterDetails.vue';
import FileUpload from './components/FileUpload.vue';
import CoursesPage from './components/CoursesPage.vue';
import Universities from './components/Universities.vue';
import Instructor from './components/Instructor.vue';
import ReadingFile from './components/ReadingFile.vue';
import RazorPay from './components/RazorPay.vue';
import Errorone from './components/Errorone.vue';
import Errortwo from './components/Errortwo.vue';
import Faq from './components/Faq.vue';
import store from './store/store'
import { Hub } from "@aws-amplify/core"
import { Auth } from "@aws-amplify/auth"


let user;

getUser().then((user) => {
    if (user) {
        router.push({path: '/'});
    }
});

function getUser() {
    return Auth.currentAuthenticatedUser().then((data) => {
        if (data && data.signInUserSession) {
            store.commit('setUser', data);
            return data;
        }
    }).catch(() => {
        store.commit('setUser', null);
        return null;
    });
}

Hub.listen("auth", async (data) => {
    // if (data.payload.event === 'signOut'){
    //     user = null;
    //     store.commit('setUser', null);
    //     router.push({path: '/SignIn'});
    // } else
    if (data.payload.event === 'signIn') {
        user = await getUser();
        router.push({path: '/'});
        store.commit('isLoggedIn', true);
        localStorage.setItem('username', JSON.stringify(user.attributes));

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
    path: "/errortwo",
    name: "Errortwo",
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
    name: "CollegeDetails",
    component: CollegeDetails,
    meta: {
        title: 'College Semaster details Page',
    },
  },
  {
    path: "/SemesterDetails",
    name: "SemesterDetails",
    component: SemesterDetails,
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
    },
  },
  {
    path: "/Instructor",
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
  }


];

const router = createRouter({
	history: createWebHistory(),
	routes,
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

// router.beforeEach((to, from, next) => {
// 	//document.title = `${to.meta.title}`;
// 	//document.title = `${to.meta.title}`;
//     //document.title = `${to.params.name}`;
//     const title = to.meta.title

//     //Take the title from the parameters
//     const titleFromParams = to.params.name;
//     // If the route has a title, set it as the page title of the document/page
//     if (title) {
//       document.title = title
//     }
//     // If we have a title from the params, extend the title with the title
//     // from our params
//     if (titleFromParams) {
//       document.title = `${titleFromParams} - ${document.title}`;
//     }
// 	next();
// });

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