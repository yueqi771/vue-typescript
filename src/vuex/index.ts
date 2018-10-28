import Vue from 'vue';
import actions from './actions'
import mutations from './mutations'
import Vuex,  { ActionTree, MutationTree } from 'vuex';

Vue.use(Vuex);

interface State {
    userData: object,
}

let state: State = {
    userData: {
        name: "葛清霏",
        skill: "偃甲术"
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
});
