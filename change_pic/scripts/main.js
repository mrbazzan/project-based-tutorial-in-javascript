
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h6');

function setUserName(){
    let myName = prompt('Enter another name');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName;
    }

}cd

if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
}

myHeading.onclick = function(){
    setUserName();
}

let myImage = document.querySelector('img');

myImage.onclick = function() {

    let mySrc = myImage.getAttribute('src');

    if(mySrc === "images/martial.jpg"){
        myImage.setAttribute('src', 'images/lindelof.jpg');
        myImage.setAttribute('alt', 'Victor indelof');
    } else if(mySrc === "images/lindelof.jpg") {
        myImage.setAttribute('src', "images/matic.jpg");
        myImage.setAttribute('alt', 'Nemanja Matic');
    } else{
        myImage.setAttribute('src', "images/martial.jpg");
        myImage.setAttribute('alt', 'Anthony Martial');
    }
}
