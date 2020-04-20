<template>
    <div>
        <div v-for="player in players" :key="player.surname">
            Joueur : {{ player.firstName }} {{ player.surname }}
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: 'PlayerList',
        computed: {
            ...Vuex.mapGetters({players: "players"})
        }
    }
</script>