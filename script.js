// Qn 1 -- arr = ['Jeroni', 'Baskar', 'Hari', 'Mani', 'Mohan']
// Loop through the array and print the following  --  Jeroni is my friend

// const arr = ['Jeroni', 'Baskar', 'Hari', 'Mani', 'Mohan'];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] + ' is my friend');
// }

// Client Browser --> DNS --> Server --> Client Browser

// DOM Manipulation
// Document Object Model - is a tree like structure which is created by the browser when we run a html file
// Event - Whatever the user does in the webpage is called an event
// Manipulating the behavior of the webpage to make the page behave in a way we want

// Selecting elements
const changestyle = document.getElementById('changestyle');
// const clickme = document.getElementById('clickme');
// const head = document.getElementsByClassName('heading');
const elements = document.getElementsByTagName('div');

const clickme = document.querySelector('#clickme');
const head = document.querySelectorAll('.heading');

changestyle.addEventListener('mouseover', function(){
    for(let i = 0; i < head.length; i++){
        head[i].style.color = 'red';
    }
});
changestyle.addEventListener('mouseout', function(){
    for(let i = 0; i < head.length; i++){
        head[i].style.color = 'black';
    }
});
//  ctrl + space
changestyle.addEventListener('click', function(){
    for(let i = 0; i < head.length; i++){
        head[i].style.color = 'aqua';
    }
});