const box = document.querySelector(".box");
const card = document.createElement("div");
const image = document.createElement("img");
const title = document.createElement("h3");
const number = document.createElement("p");
const image12 = document.createElement("img"); 
const button = document.createElement("button");
const buttonn = document.createElement("button");
image.src = "person.webp"
image12.src = "image.png";
number.innerHTML = "Hello Facebook"
title.innerHTML = 'Facebook'; 
button.innerHTML = 'About Facebook';
buttonn.innerHTML = 'Hire Facebook';  
card.append(image,title,number,image12,button,buttonn);
title.classList.add("title");
number.classList.add("number");
card.classList.add("card");
image.classList.add("image");
image.style.width = "45%";
image.style.height = "100px";
image.style.marginTop = "30px";
image12.style.width = "50%";
image12.style.height = "30px";
box.appendChild(card)


const box1 = document.querySelector(".box1");
const card1 = document.createElement("div");
const image1 = document.createElement("img1");
const title1 = document.createElement("h3");
const number1 = document.createElement("p1");
const button1 = document.createElement("button");
const buttonn2 = document.createElement("button");
number1.innerHTML = "Hello Instagram"
title1.innerHTML = 'Instagram'; 
button1.innerHTML = 'About Instagram'; 
buttonn2.innerHTML = 'Hire Instagram';
card1.append(title1,number1,button1,buttonn2);
title1.classList.add("title1");
number1.classList.add("number1");
card1.classList.add("card1");
box1.appendChild(card1)


const box2 = document.querySelector(".box2");
const card2 = document.createElement("div");
const image2 = document.createElement("img");
const title2 = document.createElement("h3");
const number2 = document.createElement("p");
const button2 = document.createElement("button");
const buttonn3 = document.createElement("button");
number2.innerHTML = "Hello GitHUB!"
title2.innerHTML = 'GITHUB' ; 
button2.innerHTML = 'About gitHub!'; 
buttonn3.inertHTML ='Hire Github!';
card2.append(title2,number2,button2,buttonn3);
title2.classList.add("title2");
number2.classList.add("number2");
card2.classList.add("card2");
box2.appendChild(card2)