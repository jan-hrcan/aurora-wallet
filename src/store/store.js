import Vuex from 'vuex';
import TestModule from './modules/TestModule'

const store = new Vuex.Store({
    modules: {
        test: TestModule
    }
}); 

export default store;