import Vue from 'vue';
import actions from './action';
import mutations from './mutation';
import Vuex,  { ActionTree, MutationTree } from 'vuex';

Vue.use(Vuex);

interface State {
    userData: StoreState.userData,
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
