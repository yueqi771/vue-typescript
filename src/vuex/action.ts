import { ActionTree } from 'vuex';
import TYPES from './type';

const actions: ActionTree<any, any> = {
    // 更新用户信息
    updateUser({ state, commit }, payload) {
        commit(TYPES.UPDATE_USERDATA, payload)
    }
}

export default actions;