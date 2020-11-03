const app = Vue.createApp({
    data() {
        return {
            test: "",
            userInput: "",
            confirmedInput: ""
        }
    },

    methods: {
        showAlert() {
            alert("i am here now")
        },
        saveInput(event) {
            this.userInput = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.userInput;
        }



    }





})

app.mount("#assignment")