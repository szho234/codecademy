function unit3() {

/*jshint multistr:true */

var text = "hello hi there what is \ happening Shiwei I hope that this Shiwei will be \ productive Shiwei Shiwei get better Shiwei soon";

var myName = "Shiwei";

var hits = []; 

for (var i = 0; i < text.length; i++) {
    if(text[i] === "S") {
        for (var j = i; j < (i + myName.length); j++) {
            hits.push(text[j]);  
        }
    }
}

if (hits.length == 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);    
}

}; 