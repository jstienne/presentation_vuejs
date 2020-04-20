<template>
    <div>
        <PlayerList/>
        <PlayerAdding/>
        <div>Il y a {{ playerCounterFromComputed }} joueurs.</div>
        <div>Il y a {{ playerCounterFromWatch }} joueurs.</div>
    </div>
</template>

<script>
    import Vuex from "vuex";
    import PlayerList from "./PlayerList";
    import PlayerAdding from "./PlayerAdding";

    export default {
        name: 'Player',
        components: {
            PlayerList,
            PlayerAdding
        },
        data() {
            return {
                playerCounterFromWatch: 0
            }
        },
        beforeMount() {
            this.playerCounterFromWatch = this.players.length;
        },
        computed: {
            ...Vuex.mapGetters({players: "players"}),
            playerCounterFromComputed() {
                return this.players.length;
            }
        },
        watch: {
            players() {
                this.playerCounterFromWatch = this.players.length;
            }
        }
    }
</script>