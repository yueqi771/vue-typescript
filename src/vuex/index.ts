import Vue from 'vue';
import actions from './actions'
import mutations from './mutations'
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
