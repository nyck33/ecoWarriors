window.onload = function(){
    var clear = document.getElementById("clear-button");
    if(clear){
        clear.removeEventListener("click", reloader);
    }
    function reloader(){
        var currLink = document.getElementById("gcLink");
        if(currLink){
            currLink.parentNode.removeChild(currLink);
        }
        var currImg = document.getElementById("newImg");
        if(currImg){
            currImg.parentNode.removeChild(currImg);
        }
        
    }
}