import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const state = {
    players: [{firstName: 'John', surname: 'Doe'}, {firstName: 'Noé', surname: 'Pamula'}]
};

const getters = {
    players: state => state.players
};

const mutations = {
    ADD_PLAYER: (state, player) => {
        state.players.push(player);
    }
};

const actions = {
    addPlayer: (store, player) => {
        store.commit('ADD_PLAYER', player)
    }
};

const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});

export default store;