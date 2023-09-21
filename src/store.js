// store.js
// import the createStore method
import { createStore } from 'vuex'

// configure the store
export const store = createStore({
    state() {
        return {
            logedin: false,
        }
    }
})