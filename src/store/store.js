import createPersistedState from 'vuex-persistedstate'
import { createStore } from 'vuex'

export default createStore ({
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
        })
    ],
    state: {
        cart: [],
        webinar: '',
        profile: '',
        updateProfile: '',
        IsLoggedIn: false,
        user: null,
        token: null,
        // isCourseActive: false,
    },
    
    mutations: {
        isLoggedIn(state, status) {
            state.IsLoggedIn = status;
            
        },
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        // setIsAboutActive(state, isActive) {
        //     state.isCourseActive = isActive;
        // },
        
    },

    actions: {
        logout({ commit }) {  
            commit('setUser', null);
          },
    }

    
})       