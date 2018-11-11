import Vue from 'vue';
import actions from './action';
import mutations from './mutation';
import Vuex,  { ActionTree, MutationTree } from 'vuex';

Vue.use(Vuex);

interface State {
    userData: StoreState.UserData[],
}

let state: State = {
    userData: []
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
});
