<template>
    <div>
        <PlayerList :players="players"/>
        <PlayerAdding @add-player="addPlayer"/>
        <div>Il y a {{ playerCounterFromComputed }} joueurs.</div>
        <div>Il y a {{ playerCounterFromWatch }} joueurs.</div>
    </div>
</template>

<script>
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
                players: [],
                playerCounterFromWatch: 0
            }
        },
        beforeMount() {
            this.players = [{firstName: 'John', surname: 'Doe'}, {firstName: 'Noé', surname: 'Pamula'}];
            this.playerCounterFromWatch = this.players.length;
        },
        computed: {
            playerCounterFromComputed() {
                return this.players.length;
            }
        },
        watch: {
            players() {
                this.playerCounterFromWatch = this.players.length;
            }
        },
        methods: {
            addPlayer(firstName, surname) {
                this.players.push({firstName: firstName, surname: surname});
            }
        }
    }
</script>