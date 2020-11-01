const app = Vue.createApp({
    data() {
        return {
            //    i can now use the courseGoal in html section part.
            courseGoal: "Finish the course and learn VuE",
            vueLink: `https://vuejs.org/`,
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return "learn Vue !!";
            } else {
                return "monster view!";
            }
        },
    },
});
//  i want to control the section id=usergoal

app.mount("#user-goal");