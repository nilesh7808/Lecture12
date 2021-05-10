 // Style of h1 using java script orr DOM manipulation

 //----------------#########--------------------- getElementByTagName ------------------------#########-------

 // const h1 = document.getElementsByTagName('h1')[0];
 // h1.style.color = "green";
 // h1.style.border = "2px solid gray";
 // h1.style.backgroundColor = "yellow";

 //----------------#########--------------------- getElementById ------------------------#########-------

 // const x = document.getElementById('special');
 // x.style.color = "red";

 //----------------#########--------------------- getElementByClassName ------------------------#########-------


 // const para = document.getElementsByClassName('one');

 // para.style.color = "red";   =>>>>>> It will give wrong output because we have many class as name one
 //  So the better way to use it using for loop and you will be able to mainpulate them as we have done below

 // const paragraphs = document.getElementsByClassName('one');

 // for (const para of paragraphs) {
 //     para.style.color = "red";
 // }

 //----------------#########--------------------- querySelector ------------------------#########-------

 //  let h = document.querySelector("#special");
 //  h.style.color = "red";

 //  let paragraphs = document.querySelector('.one');
 //  paragraphs.style.color = "red";


 //----------------#########--------------------- querySelectorAll ------------------------#########-------

 //  const paragraphs = document.querySelectorAll('.one');
 //  for (const para of paragraphs) {
 //      para.style.textTransform = "uppercase";
 //      para.style.color = "blue";
 //      para.style.fontSize = "25px";
 //      para.style.fontFamily = "Arial, heveltica, sans-sarif"
 //  }

 //----------------#########--------------------- querySelector for outer anchor tag------------------------#########-------

 //  const a = document.querySelector('a');
 //  a.style.color = 'black';
 //  a.style.textDecoration = 'none';

 //-----------#########------------- querySelector for inner anchor tag in list items -------#########-------

 //  const a = document.querySelectorAll('ol li a');
 //  for (const anc of a) {
 //      anc.style.color = 'red';
 //      anc.style.textDecoration = 'None';
 //  }

 //  let inp = document.querySelector('input[type="text"]');
 //  inp.style.color = "red";

 //  let inp = document.querySelectorAll('input[type="text"]');
 //  inp.style.color = "red"; =======>>>>>>>. Wrong way of doing this

 //  const x = document.getElementById('special');
 //  console.log(x.innerText);
 //  console.log(x.textContent);

 //  let y = document.querySelector('h1');
 //  console.log(y.innerText);
 //  y.innerText = "This is another heading.";
 //  console.log(y.innerText);

 //----------------#########----------------- getAttribute and setAttribute -----------------#########-------

 // ************************************** getAttribute *************************************

 //  let x = document.querySelector('input');
 //  console.log(x.getAttribute('type'));

 //  let y = document.querySelector('input');
 //  console.log(y.getAttribute('placeholder'));

 //  let z = document.querySelector('input');
 //  console.log(z.getAttribute('src'));

 // ************************************ setAttribute ***************************************

 //  let a = document.querySelector('input');
 //  a.setAttribute('type', 'date');

 //  let b = document.querySelector('input');
 //  b.setAttribute('type', 'number');

 //  let c = document.querySelector('input');
 //  c.setAttribute('type', 'color');

 //  const image = document.querySelector('img');

 //  let isTrue = false;

 //  setInterval(() => {

 //      if (isTrue) {
 //          image.setAttribute('src', 'https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
 //      } else {
 //          image.setAttribute('src', 'https://images.unsplash.com/photo-1501822810445-bba370e517ab?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
 //      }

 //      isTrue = !isTrue;

 //  }, 1500);


 //  ======================= first way to add class and their properties ======================
 //  const h1 = document.querySelector('h1');
 //  //  h1.classList;
 //  h1.classList.add('first');

 //  ====================== another way to add class and their properties =====================

 //  const h1 = document.querySelector('h1');
 //  h1.setAttribute('class', 'first');

 //  const section = document.querySelector('section');
 //  section.classList.toggle('third');

 //  ############################# Append text using JavaScript Selector ####################################

 //  const Postpara = document.getElementById('special');
 //  Postpara.append('THIS TEXT IS JUST ADDED INTO THE PARAGRAPH.');


 //  const Prepara = document.getElementById('special');
 //  Prepara.prepend('THIS TEXT IS JUST ADDED FIRST LINE INTO THE PARAGRAPH.');

 //  ############################# appendChild using JavaScript Selector ####################################

 //  const strong = document.createElement('strong');
 //  strong.innerText = "This is external added element";
 //  const para = document.getElementById('special');
 //  para.appendChild(strong);

 //  const strong = document.createElement('strong');
 //  strong.innerText = "This is another external added element";
 //  const para = document.getElementById('special');
 //  para.append(strong);

 //  ############################# remove string using JavaScript Selector ####################################

 //  const em = document.querySelector('em');
 //  const para = document.querySelector('#special');
 //  para.removeChild(em);

 const em = document.querySelector('em');
 em.remove();