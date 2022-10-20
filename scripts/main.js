/*var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world"*/

//alert('hello!');

let iceCream = 'chocolate';

/*if(iceCream ==='chocolate'){
    alert('Yay,I love')
}else{
    alert('Awwww,NONO')
}*/

function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}
multiply(4,7);

/*document.querySelector('html').onclick = function(){
    alert('Ouch! Stop poking me!')
}*/

var myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/test.png'){
        myImage.setAttribute('src','image/test_1.png')
    }else{
        myImage.setAttribute('src','image/test.png')
    }
}
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName(){
    let myName = prompt('Pleasr enter your name.')
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = "Mozilla is cool," + myName;
    }

}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Mozilla is cool" + storedName;
}
myButton.onclick = function(){
    setUserName();
}