const app = Vue.createApp({
    data() {
        return {
            blockAClicked: false,
            blockBClicked: false,
            blockCClicked: false
        }
    },
    computed: {
        boxAClasses() {
            return {active: this.blockAClicked};
        },
        boxBClasses() {
            return {active: this.blockBClicked};
        },
        boxCClasses() {
            return {active: this.blockCClicked};
        }
    },
    methods : {
        boxClicked(block) {
            switch (block) {
                case 'a':
                    this.blockAClicked = !this.blockAClicked;
                    break;
                case 'b':
                    this.blockBClicked = !this.blockBClicked;
                    break;
                case 'c':
                    this.blockCClicked = !this.blockCClicked;
                    break;
            
                default:
                    break;
            }
        }
    }
})

app.mount('#styling')