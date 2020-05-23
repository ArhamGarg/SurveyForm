var voterCount = 0;
var canvas;
var form;
var voter;

function setup() {
    canvas = createCanvas(displayWidth - 20,displayHeight - 20);
    database = firebase.database();
    form = new Form()
    form.display();
    voter = new Voter();
}