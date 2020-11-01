const app = Vue.createApp({
    data() {
        return {
            myName: "Filipe",
            myAge: 21,
            vueImage: "cachorro.jpg"

        }
    },

    methods: {
        greet() {
            return this.myAge + 5;
        },

        randomNumber() {
            return Math.random()
        }
    }

})




app.mount("#assignment")