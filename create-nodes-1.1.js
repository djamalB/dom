// const divElement = document.createElement('div')

// const b = document.createElement('b')
// b.classList.add('red')
// b.classList.add('strong')

// divElement.classList.add('block')
// console.log(divElement)







// const ul = document.createElement('ul')

// ul.classList.add('list')

// const li = document.createElement('li')

// li.textContent = 'привет мир'

// ul.appendChild(li)

// console.log(ul)
// console.log(li)









// const red = document.createElement('div')
// red.classList.add('red')

// const green = document.createElement('div')
// green.classList.add('green')

// const blue = document.createElement('div')
// blue.classList.add('blue')

// blue.textContent = 'я вложен'

// green.appendChild(blue)

// red.appendChild(green)

// console.log(red)







// const div = document.createElement('div')

// const ul = document.createElement('ul')

// const li1 = document.createElement('li')

// const a1 = document.createElement('a')
// a1.setAttribute("href", "https://instagram.com/intocode");
// a1.textContent = "наш инстаграм";

// li1.appendChild(a1)

// const li2 = document.createElement('li')

// const a2 = document.createElement('a2')
// a2.setAttribute("href", "https://intocode.ru");
// a2.textContent = "наш сайт";

// li2.appendChild(a2)

// ul.appendChild(li1)
// ul.appendChild(li2)

// div.appendChild(ul)

// const bodyElement = document.body;
// bodyElement.appendChild(div)

// console.log(bodyElement)







// const words = ["html", "css", "react", "js"];

// const ul = document.createElement("ul");

// for (let word of words) {
//   const li = document.createElement("li");
//   li.textContent = word;

//   ul.appendChild(li);
// }

// document.body.appendChild(ul)






// function render(words) {
//     const ul = document.createElement('ul')

//     for (let i of words) {
//         const li = document.createElement('li')
//         li.textContent = i

//         ul.appendChild(li)
//     }
//     document.body.appendChild(ul)
// }

// render(['html','js','css'])






// function render(linksArray) {
//   const ulElement = document.createElement("ul");

//   for (const linkObj of linksArray) {
//     const liElement = document.createElement("li");

//     const aElement = document.createElement("a");

//     aElement.setAttribute("href", linkObj.url);

//     aElement.textContent = linkObj.name;

//     liElement.appendChild(aElement);

//     ulElement.appendChild(liElement);
//   }

//   document.body.appendChild(ulElement);
// }
// const linksArray = [
//   {
//     name: "Google",
//     url: "https://google.com",
//   },
//   {
//     name: "Instagram",
//     url: "https://instagram.com",
//   },
//   {
//     name: "intocode",
//     url: "https://intocode.ru",
//   },
// ];

// render(linksArray);






// const addTitle = () => {
//   const title = document.createElement("h1");
//   title.textContent = "Работа с DOM";

//   document.body.insertBefore(title, document.querySelector("div#main"));
// };

// const addLinkToArticle = () => {
//   const link = document.createElement("a");

//   link.href = "ссылка_на_статью";
//   link.textContent = "Статья о DOM";

//   document.querySelector("div#main").appendChild(link);
// };






// const changeBackgroundColor = (color) => {
//   document.body.style.backgroundColor = color;
// };

// const addToLi = (text) => {
//   const listItem = document.createElement("li");

//   listItem.textContent = text;

//   document.querySelector("#list").appendChild(listItem);
// };

// const removeCopyright = () => {
//   const copyright = document.querySelector("#copyright");
//   copyright.parentNode.removeChild(copyright);
// };

// addTitle();
// addLinkToArticle();
// changeBackgroundColor("green");
// addToLi("Новый элемент списка");
// removeCopyright();

