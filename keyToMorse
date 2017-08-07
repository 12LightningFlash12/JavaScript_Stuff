fill(255, 0, 0);
textSize(20);

/*

This program uses the International version of Morse Code

Morse Code (International) includes the alphabet, numbers,
and some special characters:
.,?'!/:;=+-_"@

*/

text("Key To Morse Code", 115, 100);
text("Press A key", 150, 120);

var al = [
    ".-", "-...", "-.-.", "-..", ".", //a b c d e
    "..-.", "--.", "....", "..", ".---", //f g h i j
    "-.-", ".-..", "--", "-.", "---", //k l m n o
    ".--.", "--.-", ".-.", "...", "-", //p q r s t
    "..-", "...-", ".--", "-..-", "-.--", "--.." //u v w x y z
];

var nu = [
    "-----", ".----", "..---", "...--", "....-", //0 1 2 3 4
    ".....", "-....", "--...", "---..", "----." //5 6 7 8 9
];

var sp = [
    ".-.-.-", "--..--", "..--..", ".----.", "-.-.--", // . , ? ' !
    "-..-.", "---...", "-.-.-.", "-...-", ".-.-.", // / : ; = +
    "-....-", "..--.-", ".-..-.", ".--.-." // - _ " @
];

var keyPressed = function(){
    textSize(20);
    background(255, 255, 255);
    text("Key To Morse Code", 115, 100);
    text("Press A key", 150, 120);
    
    text("Additional Notes:", 5, 260);
    text("1. a dot is one unit", 5, 280);
    text("2. a dash is three units", 5, 300);
    text("3. the space between units in a letter is", 5, 320);
    text("one unit", 30, 340);
    text("4. the space between letters is three units", 5, 360);
    text("5. the space between words is seven units", 5, 380);
    
    text(key, 200, 220);
    
    textSize(40);
    
    //ALPHABET
    
    if(key.toString() === "A" || key.toString() === "a"){ text(al[0], 190, 180); }
    if(key.toString() === "B" || key.toString() === "b"){ text(al[1], 180, 180); }
    if(key.toString() === "C" || key.toString() === "c"){ text(al[2], 180, 180); }
    if(key.toString() === "D" || key.toString() === "d"){ text(al[3], 185, 180); }
    if(key.toString() === "E" || key.toString() === "e"){ text(al[4], 200, 180); }
    if(key.toString() === "F" || key.toString() === "f"){ text(al[5], 180, 180); }
    if(key.toString() === "G" || key.toString() === "g"){ text(al[6], 185, 180); }
    if(key.toString() === "H" || key.toString() === "h"){ text(al[7], 185, 180); }
    if(key.toString() === "I" || key.toString() === "i"){ text(al[8], 190, 180); }
    if(key.toString() === "J" || key.toString() === "j"){ text(al[9], 175, 180); }
    if(key.toString() === "K" || key.toString() === "k"){ text(al[10], 185, 180); }
    if(key.toString() === "L" || key.toString() === "l"){ text(al[11], 180, 180); }
    if(key.toString() === "M" || key.toString() === "m"){ text(al[12], 195, 180); }
    if(key.toString() === "N" || key.toString() === "n"){ text(al[13], 190, 180); }
    if(key.toString() === "O" || key.toString() === "o"){ text(al[14], 185, 180); }
    if(key.toString() === "P" || key.toString() === "p"){ text(al[15], 180, 180); }
    if(key.toString() === "Q" || key.toString() === "q"){ text(al[16], 180, 180); }
    if(key.toString() === "R" || key.toString() === "r"){ text(al[17], 185, 180); }
    if(key.toString() === "S" || key.toString() === "s"){ text(al[18], 187, 180); }
    if(key.toString() === "T" || key.toString() === "t"){ text(al[19], 195, 180); }
    if(key.toString() === "U" || key.toString() === "u"){ text(al[20], 180, 180); }
    if(key.toString() === "V" || key.toString() === "v"){ text(al[21], 180, 180); }
    if(key.toString() === "W" || key.toString() === "w"){ text(al[22], 185, 180); }
    if(key.toString() === "X" || key.toString() === "x"){ text(al[23], 180, 180); }
    if(key.toString() === "Y" || key.toString() === "y"){ text(al[24], 180, 180); }
    if(key.toString() === "Z" || key.toString() === "z"){ text(al[25], 180, 180); }
    
    //NUMBERS
    if(key.toString() === "0"){ text(nu[0], 180, 180); }
    if(key.toString() === "1"){ text(nu[1], 180, 180); }
    if(key.toString() === "2"){ text(nu[2], 180, 180); }
    if(key.toString() === "3"){ text(nu[3], 180, 180); }
    if(key.toString() === "4"){ text(nu[4], 180, 180); }
    if(key.toString() === "5"){ text(nu[5], 180, 180); }
    if(key.toString() === "6"){ text(nu[6], 180, 180); }
    if(key.toString() === "7"){ text(nu[7], 180, 180); }
    if(key.toString() === "8"){ text(nu[8], 180, 180); }
    if(key.toString() === "9"){ text(nu[9], 180, 180); }
    
    //SPECIAL
    if(key.toString() === "."){ text(sp[0], 170, 180); }
    if(key.toString() === ","){ text(sp[1], 165, 180); }
    if(key.toString() === "?"){ text(sp[2], 170, 180); }
    if(key.toString() === "'"){ text(sp[3], 165, 180); }
    if(key.toString() === "!"){ text(sp[4], 170, 180); }
    if(key.toString() === "/"){ text(sp[5], 170, 180); }
    if(key.toString() === ":"){ text(sp[6], 170, 180); }
    if(key.toString() === ";"){ text(sp[7], 170, 180); }
    if(key.toString() === "="){ text(sp[8], 175, 180); }
    if(key.toString() === "+"){ text(sp[9], 175, 180); }
    if(key.toString() === "-"){ text(sp[10], 170, 180); }
    if(key.toString() === "_"){ text(sp[11], 170, 180); }
    if(key.toString() === "\""){ text(sp[12], 170, 180); }
    if(key.toString() === "@"){ text(sp[13], 170, 180); }
};

text("Additional Notes:", 5, 260);
text("1. a dot is one unit", 5, 280);
text("2. a dash is three units", 5, 300);
text("3. the space between units in a letter is", 5, 320);
text("one unit", 30, 340);
text("4. the space between letters is three units", 5, 360);
text("5. the space between words is seven units", 5, 380);
