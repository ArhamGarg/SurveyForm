class Form {
    constructor() {
        this.input = createInput("Name");
        this.email = createInput("Email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "A SURVEY TO BRING ABOUT CHANGE");
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio1 = createRadio('h3');
        this.radio1.option('Yes');
        this.radio1.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio2 = createRadio('h3');
        this.radio2.option('Yes');
        this.radio2.option('No');
        this.question3 = createElement('h3', "Q3. How much would you be willing to pay per month?");
        this.radio3 = createRadio('h3');
        this.radio3.option('Rs. 100');
        this.radio3.option('Rs. 500');
        this.radio3.option('Rs. 1000');
        this.radio3.option('More');
    }

    hide(){
        this.input.hide();
        this.email.hide();
        this.button.hide();
        this.text.hide();
        this.question1.hide();
        this.radio1.hide();
        this.question2.hide();
        this.radio2.hide();
        this.question3.hide();
        this.radio3.hide();
    }

    show(){
        this.greeting.show();
    }


    display() {
        this.input.position(displayWidth/2 - 90,displayHeight/2 - 325)
        this.email.position(displayWidth/2 - 90,displayHeight/2 - 300)
        this.button.position(displayWidth/2 - 35,displayHeight/2 - 25)
        this.greeting.position(displayWidth - 20,displayHeight - 20)
        this.text.position(displayWidth/2 - 300,displayHeight/2 - 400)
        this.question1.position(displayWidth/2 - 400,displayHeight/2 - 275)
        this.radio1.position(displayWidth/2 - 50,displayHeight/2 - 225)
        this.question2.position(displayWidth/2 - 350,displayHeight/2 - 200)
        this.radio2.position(displayWidth/2 - 50,displayHeight/2 - 150)
        this.question3.position(displayWidth/2 - 225,displayHeight/2 - 125)
        this.radio3.position(displayWidth/2 - 125,displayHeight/2 - 75)

        this.button.mousePressed(()=>{
            voter.input = this.input.value();
            voter.email = this.email.value();
            voter.answer = ["","",""]
            voterCount += 1;
            voter.index = voterCount;
            voter.update();
            voter.updateCount(voterCount);
            this.input.hide();
            this.email.hide();
            this.button.hide();
            this.text.hide();
            this.question1.hide();
            this.radio1.hide();
            this.question2.hide();
            this.radio2.hide();
            this.question3.hide();
            this.radio3.hide();
            this.greeting.show();
            this.greeting.html('Thank you for your response.');
            this.greeting.position(displayWidth/2 - 150,displayHeight/2 - 150)
        });
    }
}