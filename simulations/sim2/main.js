// Global variables to define the simulation

// Canvas dimensions
var canvasDiv = document.getElementById('water-tank-sim2');
var canvas_width = canvasDiv.offsetWidth;
var canvas_height = canvas_width * 0.6;

// Buttons
var soap_button = document.getElementById('soap_button');
var reset_button = document.getElementById('reset_button');

// Variables involving the virus capsule
var nCap = 18;                              // number of proteins forming the capsule
var angle = 360/nCap;                       // angle between the different proteins 
var rCell = canvas_height * 0.8 / 2;        // radii of the virus
var radiC = 2 * Math.PI * rCell / nCap;     // radii of the protein calculated so the touch each other
var cells = [];                             // empty array to contain all the proteins in the capsule

// Variables involving the virus DNA particles
var nDNA = 100;                             // number of DNA particles inside the virus
var radiD = canvas_height / 50;                             // radii of the DNA particles
var dnas = [];                              // empty array to contain all the dnas

// Variables involving the soap particles
var nSoaps = 0;                             // initial number of soap particles
var radiS = canvas_height / 40;                             // radii of the soap particles
var soaps = [];                             // empty array to contain all the soap particles

// Other variables
var nFree = 0;                              // number of proteins with a soap attached
var iniVel = 1;                             // initial velocity magnitude

// Setting up the simulation

function setup() {
    let cnv = createCanvas(canvas_width, canvas_height);
    cnv.parent('water-tank-sim2')

    resetSketch();

    let reset_button = createButton('Reset');
    reset_button.parent('reset_button');
    reset_button.mousePressed(resetSketch);

    let soap_button = createButton('New Soap');
    soap_button.parent('soap_button');
    soap_button.mousePressed(newSoap);

    // Creation of the capsule of the virus
    // it creates a circunference of nCap proteins
}


// Drawing loop

function draw() {
	background(0, 170, 255);
	translate(width/2, height/2); // This is needed so we have the (0,0) in the middle of the canvas

    // draws the soap particles and updates their coordinates
    for (var i = 0; i < soaps.length; i++) {
        if (soaps[i].free) {
            soaps[i].update(soaps, cells, i);
            soaps[i].show();
        } else {
            soaps[i].move();
            soaps[i].edges();
            soaps[i].tilt(20);
            soaps[i].show();
        }
    }

    // draws the dna particles and updates their coordinates
    for (i = 0; i < dnas.length; i++) {
        for (j = 0; j < cells.length; j++) {
            if (i != j) {
                elastic(dnas[i], cells[j]);     // elastic collision between particles
            }
        }
        for (j = i; j < dnas.length; j++) {
            if (i != j) {
                connect(dnas[i], dnas[j]);
            }
        }
        dnas[i].edges();
        dnas[i].tilt(0.5);
        dnas[i].move();
       	dnas[i].show();
    }


    // draws the proteins and updates their coordinates if a soap has already touched any of them
    for (i = 0; i < cells.length; i++) {
        for (j = 0; j < cells.length; j++) {
            if (i != j) {
                elastic(cells[i], cells[j]);
            }
        }
        cells[i].edges();
        cells[i].tilt(0.1);
        cells[i].move();
        cells[i].osc();
       	cells[i].show();
    }
}

