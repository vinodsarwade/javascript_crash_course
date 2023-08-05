
//single element

console.log(document.getElementById('my_form'));
console.log(document.querySelector('h1'));


//multiple element

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));



const ul = document.querySelector('.item');
// ul.remove();         


// ul.lastElementChild.remove();  //it will remove last element 

// ul.firstElementChild.textContent ='hello';     // will add hello 

// ul.lastElementChild.innerHTML = '<h2>Hello</h2>'; //will add header to the html file


const btn =document.querySelector('.btn');
btn.Style.background = 'red';