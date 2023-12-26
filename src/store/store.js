import createPersistedState from 'vuex-persistedstate'
import { createStore } from 'vuex'

export default createStore ({
    plugins: [
        createPersistedState({
            storage: window.localStorage,
        })
    ],
    state: {
        IsLoggedIn: false,
        user: null,
        token: null,
        jwtToken: null,
        users: null,
        selectedType: null,
    selectedBranch: null,
    selectedUni: null,
    selectedSem: null,
    selectedCourse: null,
    selectedAcademics: null,
        // isCourseActive: false,
    },
    
    mutations: {
        isLoggedIn(state, status) {
            state.IsLoggedIn = status;
            
        },
        setJwtToken(state, token) {
            state.jwtToken = token;
        },
        // setUser(state, users) {
        //     state.users = users;
        // },
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        // setIsAboutActive(state, isActive) {
        //     state.isCourseActive = isActive;
        // },
        setType(state, type) {
            state.selectedType = type;
          },
          setBranch(state, branch) {
            state.selectedBranch = branch;
          },
          setUni(state, uni) {
            state.selectedUni = uni;
          },
          setSem(state, sem) {
            state.selectedSem = sem;
          },
          setCourse(state, course) {
            state.selectedCourse = course;
          },
          setAcademics(state, Academia){
            state.selectedAcademics = Academia;
          }
        
    },

    actions: {
        logout({ commit }) {  
            commit('setUser', null);
          },
    }

    
})       