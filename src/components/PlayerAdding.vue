<template>
    <div>
        <input v-model="firstName" placeholder="Prénom"/>
        <input v-model="surname" placeholder="Nom"/>
        <button @click="addPlayer">Ajouter un joueur</button>
    </div>
</template>

<script>
    export default {
        name: 'PlayerAdding',
        data() {
            return {
                firstName: '',
                surname: ''
            }
        },
        methods: {
            addPlayer() {
                this.$store.commit('ADD_PLAYER', {firstName: this.firstName, surname: this.surname});
                // this.$store.dispatch('addPlayer', { firstName: this.firstName, surname: this.surname });
                this.firstName = '';
                this.surname = '';
            }
        }
    }
</script>