import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import LoginPage from "./components/LoginPage.vue";
import SignUpPage from "./components/SignUpPage.vue";
import Engineering from "./components/Engineering.vue";
import Courses from "./components/Courses.vue";
import ScienceBsc from "./components/ScienceBsc.vue";
import Masters from "./components/Masters.vue";
import ComputerScience from "./components/ComputerScience.vue";
import Ece from "./components/Ece.vue";
import InformationTechnology from './components/InformationTechnology.vue';
import Mech from './components/Mech.vue';
import Cvil from './components/Cvil.vue';
import CollegeDetails from './components/CollegeDetails.vue';
import SemesterDetails from './components/SemesterDetails.vue';
import Confirm from './components/Confirm.vue';
import FileUpload from './components/FileUpload.vue';
import CoursesPage from './components/CoursesPage.vue';
import Universities from './components/Universities.vue';
import Instructor from './components/Instructor.vue';
import ReadingFile from './components/ReadingFile.vue';
<<<<<<< HEAD
import RazorPay from './components/RazorPay.vue';
=======
import Errorone from './components/Errorone.vue';
import Errortwo from './components/Errortwo.vue';
import Faq from './components/Faq.vue';

>>>>>>> b1bc560dfdf687c64e6804fda7b4b1e3be8b68fe

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
    path: "/Signup",
    name: "SignUpPage",
    component: SignUpPage,
    meta: {
        title: 'Sign Up And Start Learning',
    },
  },
  {
<<<<<<< HEAD
    path: "/Academia/:name",
=======
    path: "/branches",
>>>>>>> b1bc560dfdf687c64e6804fda7b4b1e3be8b68fe
    name: "Engineering",
    component: Engineering,
    meta: {
        title: 'Engineering Courses Page',
    },
  },
  {
    path: "/rt",
    name: "Courses",
    component: Courses,
    meta: {
        title: 'Courses Page',
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
    path: "/Branches",
    name: "ScienceBsc",
    component: ScienceBsc,
    meta: {
        title: 'Arts Science Page',
    },
  },
  {
    path:"/Branches",
    name: "Masters",
    component: Masters,
    meta: {
        title: 'Masters Science Page',
    },
  },
  {
    path: "/University",
    name: "ComputerScience",
    component: ComputerScience,
    meta: {
        title: 'Computer Science Page',
    },
  },
  {
    path: "/Ece",
    name: "Ece",
    component: Ece,
    meta: {
        title: 'Ece Page',
    },
  },
  {
    path: "/InformationTechnology",
    name: "InformationTechnology",
    component: InformationTechnology,
    meta: {
        title: 'InfromationTechnology Page',
    },
  },
  {
    path: "/Mech",
    name: "Mech",
    component: Mech,
    meta: {
        title: 'Mech Page',
    },
  },
  {
    path: "/Cvil",
    name: "Cvil",
    component: Cvil,
    meta: {
        title: 'Cvil Page',
    },
  },
  {
<<<<<<< HEAD
    path: "/CollegeDetails/:name",
=======
    path: "/Semester",
>>>>>>> b1bc560dfdf687c64e6804fda7b4b1e3be8b68fe
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
    path: "/Confirm",
    name: "Confirm",
    component: Confirm,
    meta: {
        title: 'Confirm details Page',
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
	next();
});

export default router;