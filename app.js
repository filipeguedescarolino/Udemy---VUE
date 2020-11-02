const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            num: 5,
            name: ""
        };
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value + '' + lastName;
        },
        add(num) {
            this.counter = this.counter + this.num;
        },
        remove(num) {
            this.counter = this.counter - this.num;
        }
    }
});

app.mount('#events');