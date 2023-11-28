// EXAMINES THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);
// // document.all[11].textContent ='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';
// headerTitle.textContent
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3';
// headerTitle.style.borderBottom = 'solid 3px #000';


// GetElementsByClassName //


// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor='yellow';

// // Gives error
// // items.syle.backgroundColor = '#f4f4f4';

// for(var i=0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// };


// Get Elements By Tag Name //


// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor='yellow';

// // // Gives error
// // // items.syle.backgroundColor = '#f4f4f4';

// for(var i=0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// };
// --------------------------------------------------------------------------------------

// QuerySelector //


// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value = 'Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';
// --------------------------------------------------------------------------------------

// Query Selector All


// var titles=document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';

// };
// --------------------------------------------------------------------------------------


// Traversing The DOM //


// var itemlist=document.querySelector('#items');

// parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);
// --------------------------------------------------------------------------------------

// parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);
// --------------------------------------------------------------------------------------

// // childNodes //   **too complex**
// console.log(itemlist.childNodes);
// --------------------------------------------------------------------------------------

// // use 'children' instead of childNode
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';
// // --------------------------------------------------------------------------------------

// // FirstChild //  **not very useful**
// console.log(itemlist.firstChild);
// // --------------------------------------------------------------------------------------

// // use 'firstElementChild' instead of firstChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='Hello 1';
// --------------------------------------------------------------------------------------

// use 'lastElementChild' instead of firstChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='Hello 4';
// --------------------------------------------------------------------------------------

// // nextSibling
// console.log(itemlist.nextSibling);
// // --------------------------------------------------------------------------------------
// // nextElementSibling
// console.log(itemlist.nextElementSibling); 
// // you get "null" because the index.html file does not have another sibling after the unordered list (ul)

// // --------------------------------------------------------------------------------------

// previousSibling
// console.log(itemlist.previousSibling);
// // --------------------------------------------------------------------------------------
// // previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';
// --------------------------------------------------------------------------------------


// createElement

// Creating a new 'div'
// var newDiv=document.createElement('div');

// // addClass
// newDiv.className='hello';

// // newId
// newDiv.id='hello1';

// // addAttr
// newDiv.setAttribute('title', 'Hello Div');

// // createTextNode
// var newDivText=document.createTextNode('Hello World');

// // Adding the text to the newly created div element
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize='30px';

// container.insertBefore(newDiv, h1);
// --------------------------------------------------------------------------------------




