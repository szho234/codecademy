function(unit5) {

var user = prompt("Medal time!").toLowerCase();

var Olympics = prompt("How did you feel about the Rio Olympics? It was alright, could have been better, it was awesome, or no comment.").toLowerCase();
switch (Olympics) {
    case 'it was alright': 
        var ambivalent = prompt("Are you being ambivalent?").toLowerCase(); 
        var truth = prompt("Are you sure that you're being truthful to yourself?").toLowerCase(); 
        if(ambivalent === 'no' && truth === 'yes') {
            console.log("Glad that it met your expectations!");
        } 
        else {
            console.log("Okay, I get it."); 
        }
            break; 
    case 'could have been better': 
        console.log("There's always next time.");
        break; 
    case 'it was awesome':
        var excited = prompt("Excited for Tokyo 2020?").toLowerCase();
        var sad = prompt("It's sad without the Olympics, isn't it?").toLowerCase(); 
        if(excited === 'yes' || sad === 'yes') {
            console.log("I agree! Already sad that it's over. Can't wait for Tokyo.");
        } 
        else {
            console.log("The medal haul for NZ was phenomenal. Who wouldn't be celebrating over that?"); 
        }
        break;
    case 'no comment':
        var donotcare = prompt("Just answer yes or no.").toLowerCase();
        var bored = prompt("Did you grow bored of all the hubbub?").toLowerCase();
        if(donotcare === 'yes' || bored === 'yes') {
            console.log("To each their own.");
        } 
        else {
            console.log("How did you stay away from the news for that long?"); 
        }
        break;
    default:
        console.log("Not a fan, huh?"); 
} 
};