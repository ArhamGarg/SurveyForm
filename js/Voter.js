class Voter {
    constructor() {
        this.index = null;
        this.email = null
        this.input = null;  
    }

    updateCount(count) {
        database.ref('/').update({
            voterCount: count
        });
    }

    update() {
        var voterIndex = "voter" + this.index;
        database.ref(voterIndex).set({
            input: this.input,
            email: this.email,
            answer: ["","",""]
        });
    }
}