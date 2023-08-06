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
        token: null
    },
    getters: {
        cartItemCount(state) {
            return state.cart.length;
        },
        isInCart(state, product) {
            let found = state.cart.find(item => item.id == product.id);
            if (found) {
                return true;
            }
            else {
                return false;
            }
        },
        // isLoggedIn(state) {
        //     let found = state.IsLoggedIn;
        //     if(found) {
        //         return true;
        //     } 
        //     else {
        //         return false;
        //     }
        // }
    },
    mutations: {
        addToCart(state, product) {
            let found = state.cart.find(item => item.id == product.id);
  
            if (found) {
                found.quantity++;
                found.totalPrice = found.quantity * found.price;
            } else {
                state.cart.push(product);
            }

            state.cartItemCount;
        },

        removeFromCart(state, product) {
            let objProduct = state.cart.find(o => o.id === product.id)
            let index = state.cart.indexOf(objProduct);
            
            if(index > -1) {
                state.cart.pop[index];
                state.cart.splice(index,1);
            }

        },
        resetCart(state){
            state.cart = [];
        },

        increment(state, id) {
            const item = state.cart.find(i => i.id === id);
            item.Quantity++;
        },
        decrement(state, id) {
            const item = state.cart.find(i => i.id === id);
            if(item.Quantity > 1)
            {
            item.Quantity--;
            }
        },
        isLoggedIn(state, status) {
            state.IsLoggedIn = status;
            
        },
        addWebinar(state, data) {
            state.webinar = data;
            console.log(state.webinar);
        },
        addProfile(state, data) {
            state.profile = data;
            console.log(state.profile);
        },
        updateProfile(state, data) {
            state.updateProfile = data;
            console.log(state.updateProfile);
        },
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        
    },

    actions: {

    }

    
})       