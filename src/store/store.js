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
        
    },

    actions: {
        logout({ commit }) {  
            commit('setUser', null);
          },
    }

    
})       