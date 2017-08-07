//setup
background(0, 0, 0);

//Loop
var draw = function() {
    //variables
    var x = random(0, 400); /* X-POSITION */
    var y = random(0, 400); /* Y-POSITION */
    var w = random(20, 60); /* WIDTH */
    var h = random(20, 60); /* HEIGHT */
    
    //color variables
    var r = random(0, 255); /* RED */
    var g = random(0, 255); /* GREEN*/
    var b = random(0, 255); /* BLUE*/
    
    //Drawing circles
    strokeWeight(5);
    stroke(b, g, r);
    fill(r, g, b);
    ellipse(x, y, w, h);
};
