var togbutton = document.createElement('input');
togbutton.setAttribute('type','button');
togbutton.setAttribute('name','ToggleComments');
togbutton.setAttribute('value','Comments');
togbutton.setAttribute('class','yt-uix-button yt-uix-tooltip yt-uix-tooltip-reverse');
togbutton.setAttribute('title','Toggle Comments');

var placement= document.getElementById("watch-actions");
placement.appendChild(togbutton);

togbutton.onclick = function () {
    var comments = document.getElementById("watch-discussion");
    comments.style.display = (comments.style.display === "inline") ? "none" : "inline";
};
