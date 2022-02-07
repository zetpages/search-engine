// const room = document.getElementsByClassName("room");
// const type = document.getElementById("type");
// const size = document.getElementById("size");

// const list = document.getElementById("list");
// const link = document.getElementById("link");


// (() => {
//     properties.forEach(element => {
//         const item = document.createElement("li");
//         item.innerHTML = (element.title ? element.title : "no title");
//         list.appendChild(item);
//     })
//     console.log("worjed");
// })()


// function filterProp() {
//     list.innerHTML = '';

//     const typeValue = String(type.value);
//     const sizeValue = parseInt(size.value);
//     const roomsValue = [];

//     for (let j = 0; j < room.length; j++) {
//         if (room[j].classList.contains('selected')) {
//             const tempRoom = parseInt(room[j].getAttribute('data-number'));
//             roomsValue.push(tempRoom);
//         }
//     }


//     const innerFiltered = [];
//     const outerFiltered = [];
//     properties.forEach(element => {
//         if (roomsValue.length > 0) {
//             for (let i = 0; i < roomsValue.length; i++) {
//                 if (((element.type === typeValue) && (element.size <= sizeValue)) || ((element.rooms === roomsValue[i]) && (element.size <= sizeValue))) {
//                     console.log("first if statement");
//                     if ((element.type === typeValue && element.rooms == roomsValue[i]) && element.size <= sizeValue) {
//                         innerFiltered.push(element)
//                         console.log(" inner filtered");
//                     } else {
//                         outerFiltered.push(element);
//                         console.log(" outer filtered");
//                     }
//                 }
//             }
//         } else {
//             if ((element.type === typeValue) || (element.size <= sizeValue)) {
//                 console.log("first if statement");
//                 if (element.type === typeValue && element.size <= sizeValue) {
//                     innerFiltered.push(element)
//                     console.log(" second --if-- inner filtered");
//                 } else {
//                     outerFiltered.push(element);
//                     console.log(" second --else-- outer filtered");
//                 }
//             }
//         }
//     });

//     if (innerFiltered.length > 0) {
//         innerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title + " ---inner ----" : "no title");
//             list.appendChild(item);
//         });
//     } else {
//         outerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title : "no title");
//             list.appendChild(item);
//         });
//     }

//     const listLength = list.children.length;
//     link.textContent = `Show ${listLength} results`;
// }



// for (let i = 0; i < room.length; i++) {
//     room[i].addEventListener('click', () => {
//         room[i].classList.toggle('selected');
//         filterProp();
//     });
// }

// type.addEventListener('change', filterProp);
// size.addEventListener('change', filterProp);

// --------------------------------------------------------------------------------------------------------------------------------------

// function random_item(types) {

//     return types[Math.floor(Math.random() * types.length)];

// }
// let types = ['house', 'apartment', 'new'];



// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// let propers = [];
// for (let i = 0; i < 100; i++) {
//     propers.push({
//         title: '',
//         size: getRandomIntInclusive(10, 200),
//         price: getRandomIntInclusive(100, 100000),
//         rooms: getRandomIntInclusive(1, 10),
//         type: random_item(types)
//     });

// }


// propers.forEach(el => {
//     el.title = 'type: ' + el.type + ', ____ rooms: ' + el.rooms + ',  ____ size: ' + el.size;
// })


// const room = document.getElementsByClassName("room");
// const type = document.getElementById("type");

// const list = document.getElementById("list");
// const link = document.getElementById("link");



// let html5Slider = document.getElementById('html5');

// noUiSlider.create(html5Slider, {
//     start: [0, 200],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 0,
//         'max': 200
//     }
// });


// let inputNumber = document.getElementById('input-number');
// let inputNumber1 = document.getElementById('input-number1');

// html5Slider.noUiSlider.on('update', function (values, handle) {

//     let value = values[handle];

//     if (handle) {
//         inputNumber.value = Math.round(value);
//         submitValue();
//     } else {
//         inputNumber1.value = Math.round(value);
//         submitValue1();
//     }
// });


// function filterProp() {
//     list.innerHTML = '';

//     const typeValue = String(type.value);
//     const minSizeValue = parseInt(inputNumber1.value);
//     const maxSizeValue = parseInt(inputNumber.value);
//     const roomsValue = [];

//     for (let j = 0; j < room.length; j++) {
//         if (room[j].classList.contains('selected')) {
//             const tempRoom = parseInt(room[j].getAttribute('data-number'));
//             roomsValue.push(tempRoom);
//         }
//     }


//     const innerFiltered = [];
//     const outerFiltered = [];
//     propers.forEach(element => {
//         if (roomsValue.length > 0) {
//             for (let i = 0; i < roomsValue.length; i++) {
//                 if (((element.type === typeValue) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) ||
//                     ((element.rooms === roomsValue[i]) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue)))) {
//                     if (((element.type === typeValue) && (element.rooms == roomsValue[i])) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                         innerFiltered.push(element)
//                         console.log(" inner filtered");
//                     } else {
//                         outerFiltered.push(element);
//                         console.log(" outer filtered");
//                     }
//                 }
//             }
//         } else {
//             if ((element.type === typeValue) || ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                 if ((element.type === typeValue) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                     innerFiltered.push(element)
//                     console.log(" second --if-- inner filtered");
//                 } else {
//                     outerFiltered.push(element);
//                     console.log(" second --else-- outer filtered");
//                 }
//             }
//         }
//     });

//     if (innerFiltered.length > 0) {
//         innerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title + " ---inner ----" : "no title");
//             list.appendChild(item);
//         });
//     } else {
//         outerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title : "no title");
//             list.appendChild(item);
//         });
//     }

//     const listLength = list.children.length;
//     link.textContent = `Show ${listLength} results`;
// }


// // call event listenters
// type.addEventListener('change', filterProp);

// for (let i = 0; i < room.length; i++) {
//     room[i].addEventListener('click', () => {
//         room[i].classList.toggle('selected');
//         filterProp();
//     });
// }

// function submitValue() {
//     filterProp();
// }
// inputNumber.addEventListener('change', submitValue);

// function submitValue1() {
//     filterProp();
// }
// inputNumber1.addEventListener('change', submitValue1);

// M.AutoInit();
// //----------------------------------------------------------------------------------------------------------------------
















// function random_item(types) {

//     return types[Math.floor(Math.random() * types.length)];

// }
// let types = ['house', 'apartment', 'new'];



// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// let propers = [];
// for (let i = 0; i < 100; i++) {
//     propers.push({
//         title: '',
//         size: getRandomIntInclusive(10, 200),
//         price: getRandomIntInclusive(100, 100000),
//         rooms: getRandomIntInclusive(1, 10),
//         type: random_item(types)
//     });

// }


// propers.forEach(el => {
//     el.title = 'type: ' + el.type + ', ____ rooms: ' + el.rooms + ',  ____ size: ' + el.size;
// })


// const room = document.getElementsByClassName("room");
// const type = document.getElementById("type");

// const list = document.getElementById("list");
// const link = document.getElementById("link");


// // ----------------------------------------
// let size = document.getElementById('size');

// noUiSlider.create(size, {
//     start: [0, 200],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 0,
//         'max': 200
//     }
// });


// let inputNumber = document.getElementById('input-number');
// let inputNumber1 = document.getElementById('input-number1');

// size.noUiSlider.on('update', function (values, handle) {

//     let value = values[handle];

//     if (handle) {
//         inputNumber.value = Math.round(value);
//         submitValue();
//     } else {
//         inputNumber1.value = Math.round(value);
//         submitValue1();
//     }
// });
// // ----------------------------------------

// // ----------------------------------------
// let price = document.getElementById('price');

// noUiSlider.create(price, {
//     start: [2000, 200000],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 2000,
//         'max': 200000
//     }
// });


// let priceNumber = document.getElementById('price-number');
// let priceNumber1 = document.getElementById('price-number1');

// price.noUiSlider.on('update', function (values, handle) {

//     let value = values[handle];

//     if (handle) {
//         priceNumber.value = Math.round(value);
//         // submitValuePrice();
//     } else {
//         priceNumber1.value = Math.round(value);
//         // submitValue1Price();
//     }
// });
// // ----------------------------------------



// function filterProp() {
//     list.innerHTML = '';

//     const typeValue = String(type.value);
//     const minSizeValue = parseInt(inputNumber1.value);
//     const maxSizeValue = parseInt(inputNumber.value);
//     const roomsValue = [];

//     for (let j = 0; j < room.length; j++) {
//         if (room[j].classList.contains('selected')) {
//             const tempRoom = parseInt(room[j].getAttribute('data-number'));
//             roomsValue.push(tempRoom);
//         }
//     }


//     const innerFiltered = [];
//     const outerFiltered = [];
//     propers.forEach(element => {
//         if (roomsValue.length > 0) {
//             for (let i = 0; i < roomsValue.length; i++) {
//                 if (((element.type === typeValue) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) ||
//                     ((element.rooms === roomsValue[i]) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue)))) {
//                     if (((element.type === typeValue) && (element.rooms == roomsValue[i])) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                         innerFiltered.push(element)
//                         console.log(" inner filtered");
//                     } else {
//                         outerFiltered.push(element);
//                         console.log(" outer filtered");
//                     }
//                 }
//             }
//         } else {
//             if ((element.type === typeValue) || ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                 if ((element.type === typeValue) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                     innerFiltered.push(element)
//                     console.log(" second --if-- inner filtered");
//                 } else {
//                     outerFiltered.push(element);
//                     console.log(" second --else-- outer filtered");
//                 }
//             }
//         }
//     });

//     if (innerFiltered.length > 0) {
//         innerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title + " ---inner ----" : "no title");
//             list.appendChild(item);
//         });
//     } else {
//         outerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title : "no title");
//             list.appendChild(item);
//         });
//     }

//     const listLength = list.children.length;
//     link.textContent = `Show ${listLength} results`;
// }


// // call event listenters
// type.addEventListener('change', filterProp);

// for (let i = 0; i < room.length; i++) {
//     room[i].addEventListener('click', () => {
//         room[i].classList.toggle('selected');
//         filterProp();
//     });
// }

// function submitValue() {
//     filterProp();
// }
// inputNumber.addEventListener('change', submitValue);

// function submitValue1() {
//     filterProp();
// }
// inputNumber1.addEventListener('change', submitValue1);

// M.AutoInit();


// let bigPropers = propers.filter(function (e) {
//     return e.rooms > 8;
// });
// console.log(bigPropers);

// largePropers = propers.filter((e) => e.size > 190);
// console.log(largePropers);





//----------------------------------------------------------------------------------------------------------------------















// function random_item(types) {

//     return types[Math.floor(Math.random() * types.length)];

// }
// let types = ['house', 'apartment', 'new'];



// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// let propers = [];
// for (let i = 0; i < 100; i++) {
//     propers.push({
//         title: '',
//         size: getRandomIntInclusive(10, 200),
//         price: getRandomIntInclusive(20000, 200000),
//         rooms: getRandomIntInclusive(1, 5),
//         type: random_item(types)
//     });
// }





// propers.forEach(el => {
//     el.title = 'type: ' + el.type + ', ____ rooms: ' + el.rooms + ',  ____ size: ' + el.size + ',  ____ price: ' + el.price;
// })

// // ------------------------------------------------------
// let newPropers = [];


// const room = document.getElementsByClassName("room");
// const type = document.getElementById("type");

// const list = document.getElementById("list");
// const link = document.getElementById("link");


// // ----------------------------------------
// let size = document.getElementById('size');

// noUiSlider.create(size, {
//     start: [0, 200],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 0,
//         'max': 200
//     }
// });


// let inputNumber = document.getElementById('input-number');
// let inputNumber1 = document.getElementById('input-number1');

// size.noUiSlider.on('update', function (values, handle) {

//     let value = values[handle];

//     if (handle) {
//         inputNumber.value = Math.round(value);
//         submitValue();
//     } else {
//         inputNumber1.value = Math.round(value);
//         submitValue1();
//     }
// });
// // ----------------------------------------

// // ----------------------------------------
// let price = document.getElementById('price');

// noUiSlider.create(price, {
//     start: [2000, 200000],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 2000,
//         'max': 200000
//     }
// });



// let priceNumber = document.getElementById('price-number');
// let priceNumber1 = document.getElementById('price-number1');

// price.noUiSlider.on('update', function (values, handle) {

//     let value1 = values[handle];

//     if (handle) {
//         priceNumber.value = Math.round(value1);
//         submitPriceValue();
//     } else {
//         priceNumber1.value = Math.round(value1);
//         submitPriceValue1();
//     }
//     const minPriceValue = parseInt(priceNumber1.value);
//     const maxPriceValue = parseInt(priceNumber.value);
//     newPropers = propers.filter((e) => e.price >= minPriceValue && e.price <= maxPriceValue);
// });
// // ----------------------------------------


// function filterProp(arr) {
//     list.innerHTML = '';

//     const typeValue = String(type.value);
//     const minSizeValue = parseInt(inputNumber1.value);
//     const maxSizeValue = parseInt(inputNumber.value);
//     // const minPriceValue = parseInt(priceNumber1.value);
//     // const maxPriceValue = parseInt(priceNumber.value);
//     const roomsValue = [];




//     for (let j = 0; j < room.length; j++) {
//         if (room[j].classList.contains('selected')) {
//             const tempRoom = parseInt(room[j].getAttribute('data-number'));
//             roomsValue.push(tempRoom);
//         }
//     }


//     const innerFiltered = [];
//     const outerFiltered = [];
//     arr.forEach(element => {
//         if (roomsValue.length > 0) {
//             for (let i = 0; i < roomsValue.length; i++) {
//                 if (((element.type === typeValue) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) ||
//                     ((element.rooms === roomsValue[i]) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue)))) {
//                     if (((element.type === typeValue) && (element.rooms == roomsValue[i])) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                         innerFiltered.push(element)
//                         console.log(" inner filtered");
//                     } else {
//                         outerFiltered.push(element);
//                         console.log(" outer filtered");
//                     }
//                 }
//             }
//         } else {
//             if ((element.type === typeValue) || ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                 if ((element.type === typeValue) && ((element.size >= minSizeValue) && (element.size <= maxSizeValue))) {
//                     innerFiltered.push(element)
//                     console.log(" second --if-- inner filtered");
//                 } else {
//                     outerFiltered.push(element);
//                     console.log(" second --else-- outer filtered");
//                 }
//             }
//         }
//     });

//     if (innerFiltered.length > 0) {
//         innerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title + " ---inner ----" : "no title");
//             list.appendChild(item);
//         });
//     } else {
//         outerFiltered.forEach(element => {
//             const item = document.createElement("li");
//             item.innerHTML = (element.title ? element.title : "no title");
//             list.appendChild(item);
//         });
//     }

//     const listLength = list.children.length;
//     link.textContent = `Show ${listLength} results`;
// }


// // call event listenters
// type.addEventListener('change', submitPriceValue);

// for (let i = 0; i < room.length; i++) {
//     room[i].addEventListener('click', () => {
//         room[i].classList.toggle('selected');
//         filterProp(newPropers);
//     });
// }

// function submitValue() {
//     filterProp(newPropers);
// }
// inputNumber.addEventListener('change', submitValue);

// function submitValue1() {
//     filterProp(newPropers);
// }
// inputNumber1.addEventListener('change', submitValue1);


// function submitPriceValue() {
//     filterProp(newPropers);

// }
// priceNumber.addEventListener('change', submitPriceValue);

// function submitPriceValue1() {
//     filterProp(newPropers);
// }
// priceNumber1.addEventListener('change', submitPriceValue1);

// M.AutoInit();


// M.AutoInit();

// const room = document.getElementsByClassName("room");
// const type = document.getElementsByClassName("type");

// const list = document.getElementById("list");
// const link = document.getElementById("link");

// let size = document.getElementById('size');

// let inputNumber = document.getElementById('input-number');
// let inputNumber1 = document.getElementById('input-number1');

// let price = document.getElementById('price');

// let priceNumber = document.getElementById('price-number');
// let priceNumber1 = document.getElementById('price-number1');



// // generating random property key values start!

// function random_item(types) {

//     return types[Math.floor(Math.random() * types.length)];

// }
// let types = ['house', 'apartment', 'new', 'office'];

// let regions = ['alamedin', 'belovodskoe', 'dachnoe', 'ivanovka', 'kant', 'kok-jar', 'lebedinovka', 'leninski', 'oktabyrski', 'pervomaiski'];



// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let propers = [];
// for (let i = 0; i < 100; i++) {
//     propers.push({
//         title: '',
//         size: getRandomIntInclusive(10, 200),
//         price: getRandomIntInclusive(20000, 200000),
//         rooms: getRandomIntInclusive(1, 5),
//         type: random_item(types),
//         region: random_item(regions)
//     });
// }


// // generating random property key values end!



// // ---------------------------------------

// noUiSlider.create(size, {
//     start: [0, 200],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 0,
//         'max': 200
//     }
// });



// size.noUiSlider.on('update', function (values, handle) {

//     let value = values[handle];

//     if (handle) {
//         inputNumber.value = Math.round(value);
//         submitValue();
//     } else {
//         inputNumber1.value = Math.round(value);
//         submitValue1();
//     }
// });
// // ----------------------------------------

// // ----------------------------------------

// noUiSlider.create(price, {
//     start: [2000, 200000],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 2000,
//         'max': 200000
//     }
// });



// price.noUiSlider.on('update', function (values, handle) {

//     let value1 = values[handle];

//     if (handle) {
//         priceNumber.value = Math.round(value1);
//         submitPriceValue();
//     } else {
//         priceNumber1.value = Math.round(value1);
//         submitPriceValue1();
//     }
// });

// function filterPropTypes(arr) {
//     list.innerHTML = '';
//     let typeValue;

//     for (let k = 0; k < type.length; k++) {
//         if (type[k].classList.contains('active')) {
//             typeValue = String(type[k].getAttribute('data-value'));
//         }
//     }

//     let filteredPropTypes = arr.filter((el) => el.type == typeValue)

//     console.log(filteredPropTypes);
//     return filteredPropTypes;
// }



// function filterPropRooms(arr) {
//     const roomsValue = [];
//     const tempRoomsValue = [1, 2, 3, 4, 5];

//     for (let j = 0; j < room.length; j++) {
//         if (room[j].classList.contains('selected')) {
//             const tempRoom = parseInt(room[j].getAttribute('data-number'));
//             roomsValue.push(tempRoom);
//         }
//     }

//     let tempFilteredPropRooms = arr.filter((el) => {
//         if (roomsValue.length > 0) {
//             for (let i = 0; i < roomsValue.length; i++) {
//                 if (el.rooms == roomsValue[i]) {
//                     return true;
//                 }
//             }
//         } else {
//             for (let y = 0; y < tempRoomsValue.length; y++) {
//                 if (el.rooms == tempRoomsValue[y]) {
//                     return true;
//                 }
//             }
//         }
//     });
//     let filteredPropRooms = filterPropTypes(tempFilteredPropRooms);
//     return filteredPropRooms;
// }


// function filterPropSize(arr) {
//     const minSizeValue = parseInt(inputNumber1.value);
//     const maxSizeValue = parseInt(inputNumber.value);

//     let tempFilteredPropSize = arr.filter((el) => el.size >= minSizeValue && maxSizeValue >= el.size);

//     let filteredPropSize = filterPropRooms(tempFilteredPropSize);

//     return filteredPropSize;
// }

// function filterPropPrice(arr) {
//     const minPriceValue = parseInt(priceNumber1.value);
//     const maxPriceValue = parseInt(priceNumber.value);

//     let tempFilteredPropPrice = arr.filter((el) => el.price >= minPriceValue && maxPriceValue >= el.price);

//     let filteredPropPrice = filterPropSize(tempFilteredPropPrice);

//     filteredPropPrice.forEach(el => {
//         const items = document.createElement('li');
//         items.textContent = el.title = 'type: ' + el.type + ', ____ rooms: ' + el.rooms + ',  ____ size: ' + el.size + ',  ____ price: ' + el.price + ', ____ region: ' + el.region;
//         list.appendChild(items)
//     })

//     const listLength = list.children.length;
//     link.textContent = `Show ${listLength} results`;

//     return filteredPropPrice;
// }

// function filterPropRegion(arr) {
//     let options = document.getElementById('region').selectedOptions;
//     let regionValues = Array.from(options).map(({ value }) => value);
//     regionValues.shift();
//     console.log(regionValues.length);
//     console.log(regionValues);
//     let tempFilteredPropRegion = [];
//     let filteredPropRegion = [];

//     if (regionValues.length > 0) {
//         tempFilteredPropRegion = arr.filter((el) => {
//             for (let i = 0; i < regionValues.length; i++) {
//                 if (el.region == regionValues[i]) {
//                     return true;
//                 }
//             }
//         });
//         filteredPropRegion = filterPropPrice(tempFilteredPropRegion);
//     } else {
//         filteredPropRegion = filterPropPrice(propers)
//     }
//     console.log(filteredPropRegion);

//     return filteredPropRegion;
// }


// for (let i = 0; i < type.length; i++) {
//     type[i].addEventListener('click', () => {
//         filterPropRegion(propers);
//     });
// }

// for (let i = 0; i < room.length; i++) {
//     room[i].addEventListener('click', () => {
//         room[i].classList.toggle('selected');
//         filterPropRegion(propers);
//     });
// }

// function submitValue() {
//     return filterPropRegion(propers);
// }
// inputNumber.addEventListener('change', submitValue);

// function submitValue1() {
//     return filterPropRegion(propers);
// }
// inputNumber1.addEventListener('change', submitValue1);


// function submitPriceValue() {
//     return filterPropRegion(propers);

// }
// priceNumber.addEventListener('change', submitPriceValue);

// function submitPriceValue1() {
//     return filterPropRegion(propers);
// }
// priceNumber1.addEventListener('change', submitPriceValue1);



// let parentUl = document.querySelector('.select-wrapper');

// let childLi = parentUl.querySelectorAll('li');

// for (let t = 0; t < childLi.length; t++) {
//     console.log(childLi[t]);
//     childLi[t].addEventListener('click', () => {
//         filterPropRegion(propers);
//     });
// }



// // M.AutoInit();
// let elems = document.querySelectorAll('select');
// let instances = M.FormSelect.init(elems, {});

// let el = document.querySelectorAll('.tabs');
// let instanceTab = M.Tabs.init(el, {});

// const room = document.getElementsByClassName("room");
// const type = document.getElementsByClassName("type");

// const list = document.getElementById("list");
// const link = document.getElementById("link");

// let size = document.getElementById('size');

// let inputNumber = document.getElementById('input-number');
// let inputNumber1 = document.getElementById('input-number1');

// let price = document.getElementById('price');

// let priceNumber = document.getElementById('price-number');
// let priceNumber1 = document.getElementById('price-number1');



// // generating random property key values start!

// function random_item(types) {

//     return types[Math.floor(Math.random() * types.length)];

// }
// let types = ['house', 'apartment', 'new', 'office'];

// let regions = ['alamedin', 'belovodskoe', 'dachnoe', 'ivanovka', 'kant', 'kok-jar', 'lebedinovka', 'leninski', 'oktabyrski', 'pervomaiski'];
// let streets = ['12 microdistrict', '11 microdistrict', '10 microdistrict', '9 microdistrict', '8 microdistrict', '7 microdistrict', '6 microdistrict', '5 microdistrict', '4 microdistrict', 'abdymomunova'];



// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let propers = [];
// for (let i = 0; i < 1000; i++) {
//     propers.push({
//         title: '',
//         size: getRandomIntInclusive(10, 200),
//         price: getRandomIntInclusive(20000, 200000),
//         rooms: getRandomIntInclusive(1, 5),
//         type: random_item(types),
//         region: random_item(regions),
//         street: random_item(streets)
//     });
// }


// // generating random property key values end!



// // ---------------------------------------

// noUiSlider.create(size, {
//     start: [0, 200],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 0,
//         'max': 200
//     }
// });



// size.noUiSlider.on('update', function (values, handle) {

//     let value = values[handle];

//     if (handle) {
//         inputNumber.value = Math.round(value);
//         submitValue();
//     } else {
//         inputNumber1.value = Math.round(value);
//         submitValue1();
//     }
// });
// // ----------------------------------------

// // ----------------------------------------

// noUiSlider.create(price, {
//     start: [2000, 200000],
//     connect: true,
//     tooltips: true,
//     range: {
//         'min': 2000,
//         'max': 200000
//     }
// });



// price.noUiSlider.on('update', function (values, handle) {

//     let value1 = values[handle];

//     if (handle) {
//         priceNumber.value = Math.round(value1);
//         submitPriceValue();
//     } else {
//         priceNumber1.value = Math.round(value1);
//         submitPriceValue1();
//     }
// });


// function filterPropTypes(arr) {
//     list.innerHTML = '';
//     let typeValue = '';

//     for (let i = 0; i < type.length; i++) {
//         if (type[i].classList.contains('active')) {
//             typeValue = String(type[i].getAttribute('data-value'));
//             console.log(typeValue);
//         }
//     }

//     let filteredPropTypes = arr.filter((el) => el.type == typeValue)

//     console.log(filteredPropTypes);
//     return filteredPropTypes;
// }



// function filterPropRooms(arr) {
//     const roomsValue = [];
//     const tempRoomsValue = [1, 2, 3, 4, 5];

//     for (let j = 0; j < room.length; j++) {
//         if (room[j].classList.contains('selected')) {
//             const tempRoom = parseInt(room[j].getAttribute('data-number'));
//             roomsValue.push(tempRoom);
//         }
//     }

//     let tempFilteredPropRooms = arr.filter((el) => {
//         if (roomsValue.length > 0) {
//             for (let i = 0; i < roomsValue.length; i++) {
//                 if (el.rooms == roomsValue[i]) {
//                     return true;
//                 }
//             }
//         } else {
//             for (let y = 0; y < tempRoomsValue.length; y++) {
//                 if (el.rooms == tempRoomsValue[y]) {
//                     return true;
//                 }
//             }
//         }
//     });
//     let filteredPropRooms = filterPropTypes(tempFilteredPropRooms);
//     return filteredPropRooms;
// }


// function filterPropSize(arr) {
//     const minSizeValue = parseInt(inputNumber1.value);
//     const maxSizeValue = parseInt(inputNumber.value);

//     let tempFilteredPropSize = arr.filter((el) => el.size >= minSizeValue && maxSizeValue >= el.size);

//     let filteredPropSize = filterPropRooms(tempFilteredPropSize);

//     return filteredPropSize;
// }

// function filterPropPrice(arr) {
//     const minPriceValue = parseInt(priceNumber1.value);
//     const maxPriceValue = parseInt(priceNumber.value);

//     let tempFilteredPropPrice = arr.filter((el) => el.price >= minPriceValue && maxPriceValue >= el.price);

//     let filteredPropPrice = filterPropSize(tempFilteredPropPrice);

//     filteredPropPrice.forEach(el => {
//         const items = document.createElement('li');
//         items.textContent = el.title = 'type: ' + el.type + ', ____ rooms: ' + el.rooms + ',  ____ size: ' + el.size + ',  ____ price: ' + el.price + ', ____ region: ' + el.region + ', ____ street: ' + el.street;
//         list.appendChild(items)
//     })

//     const listLength = list.children.length;
//     link.textContent = `Show ${listLength} results`;

//     return filteredPropPrice;
// }


// function filterPropRegionAndStreet(arr) {
//     let options = document.getElementById('region').selectedOptions;
//     let regionValues = Array.from(options).map(({ value }) => value);
//     regionValues.shift();
//     console.log(regionValues.length);
//     console.log(regionValues);
//     let tempFilteredPropRegion = [];
//     let filteredPropRegion = [];

//     let optionsStreet = document.getElementById('street').selectedOptions;
//     let streetValues = Array.from(optionsStreet).map(({ value }) => value);
//     streetValues.shift();
//     console.log(streetValues.length);
//     console.log(streetValues);
//     let tempFilteredPropStreet = [];
//     let filteredPropStreet = [];

//     let rLength = regionValues.length;
//     let sLength = streetValues.length;
//     let maxLength = Math.max(rLength, sLength);

//     let tempFilteredPropRegionAndStreet = [];

//     if (regionValues.length > 0 && streetValues.length > 0) {
//         let tempoTempo = arr.filter((el) => {
//             for (let i = 0; i < regionValues.length; i++) {
//                 // console.log("for loop " + i + " cicle");
//                 if (el.region == regionValues[i]) {
//                     return true;
//                 }
//             }
//         });
//         let tempoTempoSorted = tempoTempo.filter((el) => {
//             for (let i = 0; i < streetValues.length; i++) {
//                 // console.log("for loop " + i + " cicle");
//                 if (el.street == streetValues[i]) {
//                     return true;
//                 }
//             }
//         });
//         tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
//     } else {
//         if (regionValues.length > 0 || streetValues.length > 0) {
//             if (regionValues.length > 0 && streetValues.length == 0) {
//                 tempFilteredPropRegion = arr.filter((el) => {
//                     for (let i = 0; i < regionValues.length; i++) {
//                         if (el.region == regionValues[i]) {
//                             return true;
//                         }
//                     }
//                 });
//                 tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropRegion);
//             }
//             if (regionValues.length == 0 && streetValues.length > 0) {
//                 tempFilteredPropStreet = arr.filter((el) => {
//                     for (let i = 0; i < streetValues.length; i++) {
//                         if (el.street == streetValues[i]) {
//                             return true;
//                         }
//                     }
//                 });
//                 tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropStreet);
//             }
//         } else {
//             tempFilteredPropRegionAndStreet = filterPropPrice(propers);
//         }
//     }


//     console.log(tempFilteredPropRegionAndStreet);
//     return tempFilteredPropRegionAndStreet;
// }


// function runner() {
//     return filterPropRegionAndStreet(propers);
// }

// for (let i = 0; i < type.length; i++) {
//     // console.log(type[i]);
//     type[i].addEventListener('click', () => {
//         // filterPropRegion(propers);
//         runner()
//         // console.log(type[i]);
//     });
// }

// for (let i = 0; i < room.length; i++) {
//     room[i].addEventListener('click', () => {
//         room[i].classList.toggle('selected');
//         // filterPropRegion(propers);
//         runner()
//     });
// }

// function submitValue() {
//     // filterPropRegion(propers);
//     runner()
// }
// inputNumber.addEventListener('change', submitValue);

// function submitValue1() {
//     // filterPropRegion(propers);
//     runner()
// }
// inputNumber1.addEventListener('change', submitValue1);


// function submitPriceValue() {
//     // filterPropRegion(propers);
//     runner()

// }
// priceNumber.addEventListener('change', submitPriceValue);

// function submitPriceValue1() {
//     // filterPropRegion(propers);
//     runner()
// }
// priceNumber1.addEventListener('change', submitPriceValue1);



// let parentUl = document.querySelectorAll('.select-wrapper');

// // console.log(parentUl);

// let childLi1 = parentUl[0].querySelectorAll('li');

// for (let t = 0; t < childLi1.length; t++) {
//     // console.log(childLi1[t]);
//     childLi1[t].addEventListener('click', () => {
//         // filterPropRegion(propers);
//         runner()
//     });
// }


// let childLi2 = parentUl[1].querySelectorAll('li');

// for (let t = 0; t < childLi2.length; t++) {
//     // console.log(childLi1[t]);
//     childLi2[t].addEventListener('click', () => {
//         // filterPropRegion(propers);
//         runner()
//     });
// }

























// M.AutoInit();
let elems = document.querySelectorAll('select');
let instances = M.FormSelect.init(elems, {});

// let el = document.querySelectorAll('.tabs');
// let instanceTab = M.Tabs.init(el, {});

const room = document.getElementsByClassName("room");
const type = document.getElementsByClassName("type");

const list = document.getElementById("list");
const link = document.getElementById("link");

let size = document.getElementById('size');

let inputNumber = document.getElementById('input-number');
let inputNumber1 = document.getElementById('input-number1');

let price = document.getElementById('price');

let priceNumber = document.getElementById('price-number');
let priceNumber1 = document.getElementById('price-number1');



// generating random property key values start!

function random_item(types) {

    return types[Math.floor(Math.random() * types.length)];

}
let types = ['house', 'apartment', 'new', 'office'];

let regions = ['alamedin', 'belovodskoe', 'dachnoe', 'ivanovka', 'kant', 'kok-jar', 'lebedinovka', 'leninski', 'oktabyrski', 'pervomaiski'];
let streets = ['12 microdistrict', '11 microdistrict', '10 microdistrict', '9 microdistrict', '8 microdistrict', '7 microdistrict', '6 microdistrict', '5 microdistrict', '4 microdistrict', 'abdymomunova'];



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let propers = [];
for (let i = 0; i < 1000; i++) {
    propers.push({
        title: '',
        size: getRandomIntInclusive(10, 200),
        price: getRandomIntInclusive(20000, 200000),
        rooms: getRandomIntInclusive(1, 5),
        type: random_item(types),
        region: random_item(regions),
        street: random_item(streets)
    });
}


// generating random property key values end!



// ---------------------------------------

noUiSlider.create(size, {
    start: [0, 200],
    connect: true,
    tooltips: true,
    range: {
        'min': 0,
        'max': 200
    }
});



size.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
        inputNumber.value = Math.round(value);
        submitValue();
    } else {
        inputNumber1.value = Math.round(value);
        submitValue1();
    }
});
// ----------------------------------------

// ----------------------------------------

noUiSlider.create(price, {
    start: [2000, 200000],
    connect: true,
    tooltips: true,
    range: {
        'min': 2000,
        'max': 200000
    }
});



price.noUiSlider.on('update', function (values, handle) {

    let value1 = values[handle];

    if (handle) {
        priceNumber.value = Math.round(value1);
        submitPriceValue();
    } else {
        priceNumber1.value = Math.round(value1);
        submitPriceValue1();
    }
});


function filterPropTypes(arr) {
    list.innerHTML = '';
    let typeValue = '';

    for (let i = 0; i < type.length; i++) {
        if (type[i].classList.contains('active')) {
            typeValue = String(type[i].getAttribute('data-value'));
        }
    }

    let filteredPropTypes = arr.filter((el) => el.type == typeValue)

    // console.log(filteredPropTypes);
    console.log(typeValue);
    return filteredPropTypes;
}



function filterPropRooms(arr) {
    const roomsValue = [];
    const tempRoomsValue = [1, 2, 3, 4, 5];

    for (let j = 0; j < room.length; j++) {
        if (room[j].classList.contains('selected')) {
            const tempRoom = parseInt(room[j].getAttribute('data-number'));
            roomsValue.push(tempRoom);
        }
    }

    let tempFilteredPropRooms = arr.filter((el) => {
        if (roomsValue.length > 0) {
            for (let i = 0; i < roomsValue.length; i++) {
                if (el.rooms == roomsValue[i]) {
                    return true;
                }
            }
        } else {
            for (let y = 0; y < tempRoomsValue.length; y++) {
                if (el.rooms == tempRoomsValue[y]) {
                    return true;
                }
            }
        }
    });
    let filteredPropRooms = filterPropTypes(tempFilteredPropRooms);
    return filteredPropRooms;
}


function filterPropSize(arr) {
    const minSizeValue = parseInt(inputNumber1.value);
    const maxSizeValue = parseInt(inputNumber.value);

    let tempFilteredPropSize = arr.filter((el) => el.size >= minSizeValue && maxSizeValue >= el.size);

    let filteredPropSize = filterPropRooms(tempFilteredPropSize);

    return filteredPropSize;
}

function filterPropPrice(arr) {
    const minPriceValue = parseInt(priceNumber1.value);
    const maxPriceValue = parseInt(priceNumber.value);

    let tempFilteredPropPrice = arr.filter((el) => el.price >= minPriceValue && maxPriceValue >= el.price);

    let filteredPropPrice = filterPropSize(tempFilteredPropPrice);

    filteredPropPrice.forEach(el => {
        const items = document.createElement('li');
        items.textContent = el.title = 'type: ' + el.type + ', ____ rooms: ' + el.rooms + ',  ____ size: ' + el.size + ',  ____ price: ' + el.price + ', ____ region: ' + el.region + ', ____ street: ' + el.street;
        list.appendChild(items)
    })

    const listLength = list.children.length;
    link.textContent = `Show ${listLength} results`;

    return filteredPropPrice;
}


function filterPropRegionAndStreet(arr) {
    let options = document.getElementById('region').selectedOptions;
    let regionValues = Array.from(options).map(({ value }) => value);
    regionValues.shift();
    // console.log(regionValues.length);
    // console.log(regionValues);
    let tempFilteredPropRegion = [];
    // let filteredPropRegion = [];

    let optionsStreet = document.getElementById('street').selectedOptions;
    let streetValues = Array.from(optionsStreet).map(({ value }) => value);
    streetValues.shift();
    // console.log(streetValues.length);
    // console.log(streetValues);
    let tempFilteredPropStreet = [];
    // let filteredPropStreet = [];

    let rLength = regionValues.length;
    let sLength = streetValues.length;
    let maxLength = Math.max(rLength, sLength);

    let tempFilteredPropRegionAndStreet = [];

    if (regionValues.length > 0 && streetValues.length > 0) {
        let tempoTempo = arr.filter((el) => {
            for (let i = 0; i < regionValues.length; i++) {
                // console.log("for loop " + i + " cicle");
                if (el.region == regionValues[i]) {
                    return true;
                }
            }
        });
        let tempoTempoSorted = tempoTempo.filter((el) => {
            for (let i = 0; i < streetValues.length; i++) {
                // console.log("for loop " + i + " cicle");
                if (el.street == streetValues[i]) {
                    return true;
                }
            }
        });
        tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
    } else {
        if (regionValues.length > 0 || streetValues.length > 0) {
            if (regionValues.length > 0 && streetValues.length == 0) {
                tempFilteredPropRegion = arr.filter((el) => {
                    for (let i = 0; i < regionValues.length; i++) {
                        if (el.region == regionValues[i]) {
                            return true;
                        }
                    }
                });
                tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropRegion);
            }
            if (regionValues.length == 0 && streetValues.length > 0) {
                tempFilteredPropStreet = arr.filter((el) => {
                    for (let i = 0; i < streetValues.length; i++) {
                        if (el.street == streetValues[i]) {
                            return true;
                        }
                    }
                });
                tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropStreet);
            }
        } else {
            tempFilteredPropRegionAndStreet = filterPropPrice(propers);
        }
    }


    // console.log(tempFilteredPropRegionAndStreet);
    return tempFilteredPropRegionAndStreet;
}


function runner() {
    return filterPropRegionAndStreet(propers);
}

for (let i = 0; i < type.length; i++) {
    // console.log(type[i]);
    type[i].addEventListener('click', () => {
        // filterPropRegion(propers);
        runner()
        // console.log(type[i]);
    });
}

for (let i = 0; i < room.length; i++) {
    room[i].addEventListener('click', () => {
        room[i].classList.toggle('selected');
        // filterPropRegion(propers);
        runner()
    });
}

function submitValue() {
    // filterPropRegion(propers);
    runner()
}
inputNumber.addEventListener('change', submitValue);

function submitValue1() {
    // filterPropRegion(propers);
    runner()
}
inputNumber1.addEventListener('change', submitValue1);


function submitPriceValue() {
    // filterPropRegion(propers);
    runner()

}
priceNumber.addEventListener('change', submitPriceValue);

function submitPriceValue1() {
    // filterPropRegion(propers);
    runner()
}
priceNumber1.addEventListener('change', submitPriceValue1);



let parentUl = document.querySelectorAll('.select-wrapper');

// console.log(parentUl);

let childLi1 = parentUl[0].querySelectorAll('li');

for (let t = 0; t < childLi1.length; t++) {
    // console.log(childLi1[t]);
    childLi1[t].addEventListener('click', () => {
        // filterPropRegion(propers);
        runner()
    });
}


let childLi2 = parentUl[1].querySelectorAll('li');

for (let t = 0; t < childLi2.length; t++) {
    // console.log(childLi1[t]);
    childLi2[t].addEventListener('click', () => {
        // filterPropRegion(propers);
        runner()
    });
}










function Tabs(args) {
    // Scope-safe constructors
    if (!(this instanceof Tabs)) {
        return new Tabs();
    }

    /**
     * Default component settings
     *
     * @param container {string} Classname for container of the entire component
     * @param trigger {string} Element that toggles content
     * @param content {string} Classname for the content
     */
    var defaults = {
        container: '[data-tab-component]',
        trigger: '[role="tab"]',
        content: '[role="tabpanel"]'
    };

    // If there are no settings overrides
    var settings = (typeof args !== 'undefined') ? args : defaults;

    /**
     * @function toggle()
     *
     * Handles the displaying/hiding of content
     *
     * @returns null
     */
    var toggle = function () {
        var parent = this.closest(settings.container),
            target = this.getAttribute('aria-controls'),
            content = document.getElementById(target),
            toggles = parent.querySelectorAll(settings.trigger),
            all_content = parent.querySelectorAll(settings.content);

        // Update visibility
        for (var i = 0, len = toggles.length; i < len; i++) {
            toggles[i].setAttribute('aria-selected', 'false');
            all_content[i].setAttribute('aria-hidden', 'true');
        }

        this.setAttribute('aria-selected', 'true');
        content.setAttribute('aria-hidden', 'false');
    };

    /**
     * @function bindEventListeners()
     *
     * Attach event listeners
     *
     * @returns null
     */
    var bindEventListeners = function () {
        var trigger = document.querySelectorAll(settings.trigger);

        //
        // TODO
        // Use event delgation to add event handlers
        //
        for (var i = 0, len = trigger.length; i < len; i++) {
            trigger[i].addEventListener('click', function (event) {
                toggle.call(this);
            });

            trigger[i].addEventListener('keydown', function (event) {
                if (event.which == 13) {
                    toggle.call(this);
                }
            });
        };
    };

    return bindEventListeners();
}

// Create an instance of component
window.onload = function () {
    var tabs = new Tabs();
};