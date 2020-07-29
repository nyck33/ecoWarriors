function nameValidator(){
    var x;
    var letters = (/^[a-zA-Z]+$/);
    
    //get val of input field with id="name"
    x = document.getElementById("nameInput").value;
    
    //check input
    //if(x.value.match(letters)){
    if(letters.test(x)){
        window.alert(x+' even if a 100% plant-based diet is out of reach, an "all or something" approach cuts through confusion, fusing cutting edge science'+
        ' with practical advice --from the Game Changers website');
        
        document.getElementById("secretMsg").innerHTML = x + ', click below for some quick and delicious'+' <br><a href="https://gamechangersmovie.com/food/">Game Changers Recipes</a>';
        
    }
    else{
        window.alert('Please enter a valid name consisting only of a~z or A~Z');
        document.getElementById("secretMsg").innerHTML =  '<img src="../public/imgs/animals/notVealCaption.png">';
    }
    
}
