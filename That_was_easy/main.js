function saythatwaseasy(){
    var thatWasEasy = new Audio("https://raw.githubusercontent.com/hackclub/hackclub/master/workshops/that_was_easy/sounds/that_was_easy.mp3");
    thatWasEasy.play();
}
/*$*/("#easy").on("click", saythatwaseasy);

/*$*/(document).keypress(delegatekeypress)

function delegatekeypress(event) {
    if (event.keycode ==32) {
        /*$*/("#easy").trigger("click");
    }
}