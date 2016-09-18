function unit6() {

var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    }, 
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    }
}; 


var list = function(friends) { 
    for (var list in friends) {
        console.log(list); 
    }
}; 

var search = function(name) {
    for (var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]); 
            return friends[key];
        }
        else {
        } 
    }
}

};