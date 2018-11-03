import TYPES from './type';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
    [TYPES.UPDATE_USERDATA](state, payload): void {
        state.userData = payload;
    }
}

export default mutations;
