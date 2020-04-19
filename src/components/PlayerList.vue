<template>
    <div>
        <div v-for="player in players" :key="player.surname">
            Joueur : {{ player.firstName }} {{ player.surname }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PlayerList',
        props: ['players']
    }
</script>