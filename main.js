let elems = document.querySelectorAll('select');
let instances = M.FormSelect.init(elems, {});

const type = document.getElementsByClassName("type");

const list = document.getElementById("list");
const link = document.getElementsByClassName("link");

let size = document.getElementById('size');
let sizeOffice = document.getElementById('sizeOffice');
let sizeHouse = document.getElementById('sizeHouse');
let sizeNewOffice = document.getElementById('sizeNewOffice');

let inputNumber = document.getElementById('input-number');
let inputNumber1 = document.getElementById('input-number1');

let price = document.getElementById('price');
let priceOffice = document.getElementById('priceOffice');
let priceHouse = document.getElementById('priceHouse');
let priceNewOffice = document.getElementById('priceNewOffice');

let priceNumber = document.getElementById('price-number');
let priceNumber1 = document.getElementById('price-number1');

let officeSizeNumber = document.getElementById('office-size-number');
let officeSizeNumber1 = document.getElementById('office-size-number1');

let houseSizeNumber = document.getElementById('house-size-number');
let houseSizeNumber1 = document.getElementById('house-size-number1');

let newOfficeSizeNumber = document.getElementById('newOffice-size-number');
let newOfficeSizeNumber1 = document.getElementById('newOffice-size-number1');


let officePriceNumber = document.getElementById('office-price-number');
let officePriceNumber1 = document.getElementById('office-price-number1');

let housePriceNumber = document.getElementById('house-price-number');
let housePriceNumber1 = document.getElementById('house-price-number1');

let newOfficePriceNumber = document.getElementById('newOffice-price-number');
let newOfficePriceNumber1 = document.getElementById('newOffice-price-number1');


let parentRooms = document.querySelectorAll('.select__rooms');

let childRooms = parentRooms[0].querySelectorAll('button');
let childRooms1 = parentRooms[1].querySelectorAll('button');


// generating random property key values start!


function storeData() {
    function random_item(types) {

        return types[Math.floor(Math.random() * types.length)];

    }

    function random_images(images) {

        tempImages = [];
        for (let i = 0; i < getRandomIntInclusive(2, 8); i++) {
            tempImages.push(images[Math.floor(Math.random() * images.length)]);
        }

        return tempImages;
    }
    let types = ['house', 'apartment', 'new', 'office'];
    let houseTypes = ['house', 'townhouse', 'land'];
    let officeTypes = ['office', 'warehouse', 'commercial'];
    let complexes = ['london', 'royal', 'vegas', 'avangard', 'elite'];
    let images = [
        'https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=',
        'https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1542241647-9cbbada2b309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1542047415514-7d8dde4459f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1542553458-79a13aebfda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1548103662-ddcb912e3fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMjI0MjgyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1604804221869-d4e1a8f27ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMjI0MjgyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1605087610901-fe3ed05fc126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMjI0MjgyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1605114081604-43bd388fe429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxXQ0xnMWV3dl9FSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    ];

    let regions = ['alamedin', 'belovodskoe', 'dachnoe', 'ivanovka', 'kant', 'kok-jar', 'lebedinovka', 'leninski', 'oktabyrski', 'pervomaiski'];
    let streets = ['12 microdistrict', '11 microdistrict', '10 microdistrict', '9 microdistrict', '8 microdistrict', '7 microdistrict', '6 microdistrict', '5 microdistrict', '4 microdistrict', 'abdymomunova'];


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let propersTempo = [];
    for (let i = 0; i < 5000; i++) {
        propersTempo.push({
            title: '',
            size: getRandomIntInclusive(10, 200),
            price: getRandomIntInclusive(20000, 200000),
            rooms: getRandomIntInclusive(1, 5),
            type: random_item(types),
            region: random_item(regions),
            street: random_item(streets),
            complex: '',
            housetype: '',
            officetype: '',
            image: random_images(images),
        });
    }

    propersTempo.forEach(element => {
        if (element.type == 'new') {
            element.complex = random_item(complexes);
        }
        if (element.type == 'house') {
            element.housetype = random_item(houseTypes);
        }
        if (element.type == 'office') {
            element.officetype = random_item(officeTypes);
        }
    });


    let propersJson = JSON.stringify(propersTempo);
    localStorage.setItem('properties', propersJson);


    // generating random property key values end!
}



let propsJ = localStorage.getItem('properties');
let propers = JSON.parse(propsJ);

if (propers) {
    console.log("cool!")
} else {
    storeData();
}

console.log(propers)
// localStorage.clear()
// ----------------------------------------


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
        runner()
    } else {
        inputNumber1.value = Math.round(value);
        runner();
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
        runner();
    } else {
        priceNumber1.value = Math.round(value1);
        runner();
    }
});


// ---------------------------------------

noUiSlider.create(sizeOffice, {
    start: [0, 200],
    connect: true,
    tooltips: true,
    range: {
        'min': 0,
        'max': 200
    }
});



sizeOffice.noUiSlider.on('update', function (values, handle) {

    let value2 = values[handle];

    if (handle) {
        officeSizeNumber1.value = Math.round(value2);
        runner()
    } else {
        officeSizeNumber.value = Math.round(value2);
        runner();
    }
});

// ----------------------------------------

noUiSlider.create(priceOffice, {
    start: [2000, 200000],
    connect: true,
    tooltips: true,
    range: {
        'min': 2000,
        'max': 200000
    }
});



priceOffice.noUiSlider.on('update', function (values, handle) {

    let value3 = values[handle];

    if (handle) {
        officePriceNumber1.value = Math.round(value3);
        runner();
    } else {
        officePriceNumber.value = Math.round(value3);
        runner();
    }
});

// ----------------------------------------
// ----------------------------------------

noUiSlider.create(sizeHouse, {
    start: [0, 200],
    connect: true,
    tooltips: true,
    range: {
        'min': 0,
        'max': 200
    }
});



sizeHouse.noUiSlider.on('update', function (values, handle) {

    let value2 = values[handle];

    if (handle) {
        houseSizeNumber1.value = Math.round(value2);
        runner()
    } else {
        houseSizeNumber.value = Math.round(value2);
        runner();
    }
});

// ----------------------------------------
// ----------------------------------------

noUiSlider.create(priceHouse, {
    start: [2000, 200000],
    connect: true,
    tooltips: true,
    range: {
        'min': 2000,
        'max': 200000
    }
});



priceHouse.noUiSlider.on('update', function (values, handle) {

    let value3 = values[handle];

    if (handle) {
        housePriceNumber1.value = Math.round(value3);
        runner();
    } else {
        housePriceNumber.value = Math.round(value3);
        runner();
    }
});


// ---------------------------------------
// ---------------------------------------

noUiSlider.create(sizeNewOffice, {
    start: [0, 200],
    connect: true,
    tooltips: true,
    range: {
        'min': 0,
        'max': 200
    }
});



sizeNewOffice.noUiSlider.on('update', function (values, handle) {

    let value2 = values[handle];

    if (handle) {
        newOfficeSizeNumber1.value = Math.round(value2);
        runner()
    } else {
        newOfficeSizeNumber.value = Math.round(value2);
        runner();
    }
});

// ----------------------------------------
// ----------------------------------------

noUiSlider.create(priceNewOffice, {
    start: [2000, 200000],
    connect: true,
    tooltips: true,
    range: {
        'min': 2000,
        'max': 200000
    }
});



priceNewOffice.noUiSlider.on('update', function (values, handle) {

    let value3 = values[handle];

    if (handle) {
        newOfficePriceNumber1.value = Math.round(value3);
        runner();
    } else {
        newOfficePriceNumber.value = Math.round(value3);
        runner();
    }
});

// ----------------------------------------
// ----------------------------------------


function filterPropTypes(arr) {
    list.innerHTML = '';
    let typeValue = '';

    for (let i = 0; i < type.length; i++) {
        if (type[i].getAttribute('aria-selected') === 'true') {
            typeValue = String(type[i].getAttribute('data-value'));
        }
    }

    let filteredPropTypes = arr.filter((el) => el.type == typeValue)


    return filteredPropTypes;
}



function filterPropRooms(arr) {
    const roomsValue = [];
    const tempRoomsValue = [1, 2, 3, 4, 5];
    for (let i = 0; i < type.length; i++) {
        if (type[i].getAttribute('aria-selected') === 'true' && type[i].getAttribute('data-value') == 'apartment') {
            for (let j = 0; j < childRooms.length; j++) {
                if (childRooms[j].classList.contains('selected')) {
                    const tempRoom = parseInt(childRooms[j].getAttribute('data-number'));
                    roomsValue.push(tempRoom);
                }
            }
        } else {
            for (let j = 0; j < childRooms1.length; j++) {
                if (childRooms1[j].classList.contains('selected')) {
                    const tempRoom = parseInt(childRooms1[j].getAttribute('data-number'));
                    roomsValue.push(tempRoom);
                }
            }
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

    const minSizeValueOffice = parseInt(officeSizeNumber.value);
    const maxSizeValueOffice = parseInt(officeSizeNumber1.value);

    const minSizeValueHouse = parseInt(houseSizeNumber.value);
    const maxSizeValueHouse = parseInt(houseSizeNumber1.value);

    const minSizeValueNewOffice = parseInt(newOfficeSizeNumber.value);
    const maxSizeValueNewOffice = parseInt(newOfficeSizeNumber1.value);

    let tempFilteredPropSize = [];
    let typeValue = '';

    for (let i = 0; i < type.length; i++) {
        if (type[i].getAttribute('aria-selected') === 'true') {
            typeValue = String(type[i].getAttribute('data-value'));
        }
    }

    if (typeValue == 'new') {
        tempFilteredPropSize = arr.filter((el) => el.size >= minSizeValueOffice && maxSizeValueOffice >= el.size);
    }

    if (typeValue == 'apartment') {
        tempFilteredPropSize = arr.filter((el) => el.size >= minSizeValue && maxSizeValue >= el.size);
    }

    if (typeValue == 'house') {
        tempFilteredPropSize = arr.filter((el) => el.size >= minSizeValueHouse && maxSizeValueHouse >= el.size);
    }

    if (typeValue == 'office') {
        tempFilteredPropSize = arr.filter((el) => el.size >= minSizeValueNewOffice && maxSizeValueNewOffice >= el.size);
    }

    let filteredPropSize = filterPropRooms(tempFilteredPropSize);

    return filteredPropSize;
}


function filterPropPrice(arr) {
    const minPriceValue = parseInt(priceNumber1.value);
    const maxPriceValue = parseInt(priceNumber.value);

    const minPriceValueHouse = parseInt(housePriceNumber.value);
    const maxPriceValueHouse = parseInt(housePriceNumber1.value);

    const minPriceValueNewOffice = parseInt(newOfficePriceNumber.value);
    const maxPriceValueNewOffice = parseInt(newOfficePriceNumber1.value);

    const minPriceValueOffice = parseInt(officePriceNumber.value);
    const maxPriceValueOffice = parseInt(officePriceNumber1.value);

    let tempFilteredPropPrice = [];
    let typeValue = '';

    for (let i = 0; i < type.length; i++) {
        if (type[i].getAttribute('aria-selected') === 'true') {
            typeValue = String(type[i].getAttribute('data-value'));
        }
    }

    if (typeValue == 'new') {
        tempFilteredPropPrice = arr.filter((el) => el.price >= minPriceValueOffice && maxPriceValueOffice >= el.price);
    }
    if (typeValue == 'apartment') {
        tempFilteredPropPrice = arr.filter((el) => el.price >= minPriceValue && maxPriceValue >= el.price);
    }
    if (typeValue == 'house') {
        tempFilteredPropPrice = arr.filter((el) => el.price >= minPriceValueHouse && maxPriceValueHouse >= el.price);
    }
    if (typeValue == 'office') {
        tempFilteredPropPrice = arr.filter((el) => el.price >= minPriceValueNewOffice && maxPriceValueNewOffice >= el.price);
    }

    let filteredPropPrice = filterPropSize(tempFilteredPropPrice);

    return filteredPropPrice;
}



function filterPropRegionAndStreet(arr) {

    let optionsRegion = [];
    let optionsStreet = [];
    let optionsComplex = [];
    let optionsHouseType = [];
    let optionsOfficeType = [];
    let condNew = false;
    let condHouse = false;
    let condOffice = false;

    for (let i = 0; i < type.length; i++) {
        if (type[i].getAttribute('aria-selected') === 'true' && type[i].getAttribute('data-value') == 'apartment') {
            optionsRegion = document.querySelectorAll('.region')[0].selectedOptions;
            optionsStreet = document.querySelectorAll('.street')[0].selectedOptions;
        }
        if (type[i].getAttribute('aria-selected') === 'true' && type[i].getAttribute('data-value') == 'new') {
            optionsRegion = document.querySelectorAll('.region')[1].selectedOptions;
            optionsStreet = document.querySelectorAll('.street')[1].selectedOptions;

            condNew = true;
            optionsComplex = document.getElementById('complex').selectedOptions;
        }
        if (type[i].getAttribute('aria-selected') === 'true' && type[i].getAttribute('data-value') == 'house') {
            optionsRegion = document.querySelectorAll('.region')[2].selectedOptions;
            optionsStreet = document.querySelectorAll('.street')[2].selectedOptions;
            optionsHouseType = document.getElementById('house-type').selectedOptions;
            condHouse = true;
        }
        if (type[i].getAttribute('aria-selected') === 'true' && type[i].getAttribute('data-value') == 'office') {
            optionsRegion = document.querySelectorAll('.region')[3].selectedOptions;
            optionsStreet = document.querySelectorAll('.street')[3].selectedOptions;
            optionsOfficeType = document.getElementById('office-type').selectedOptions;
            condOffice = true;
        }
    }
    let regionValues = Array.from(optionsRegion).map(({ value }) => value);
    regionValues.shift();

    let streetValues = Array.from(optionsStreet).map(({ value }) => value);
    streetValues.shift();

    let complexValues = Array.from(optionsComplex).map(({ value }) => value);
    complexValues.shift();

    let houseTypeValues = Array.from(optionsHouseType).map(({ value }) => value);
    houseTypeValues.shift();

    let officeTypeValues = Array.from(optionsOfficeType).map(({ value }) => value);
    officeTypeValues.shift();

    let tempFilteredPropRegion = [];
    let tempFilteredPropStreet = [];
    let tempFilteredPropComplex = [];
    let tempFilteredPropHouseType = [];
    let tempFilteredPropOfficeType = [];
    let tempFilteredPropRegionAndStreet = [];


    if (condNew) {
        if (regionValues.length > 0 && streetValues.length > 0 && complexValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoTempoSorted = tempoTempoSorted.filter((el) => {
                for (let i = 0; i < complexValues.length; i++) {
                    if (el.complex == complexValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoTempoSorted);
        }
        else if (regionValues.length > 0 && streetValues.length > 0 && complexValues.length == 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        else if (regionValues.length > 0 && streetValues.length == 0 && complexValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < complexValues.length; i++) {
                    if (el.complex == complexValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        else if (regionValues.length == 0 && streetValues.length > 0 && complexValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < complexValues.length; i++) {
                    if (el.complex == complexValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        // ---------------
        else {
            // ----------------------
            if (regionValues.length > 0 || streetValues.length > 0 || complexValues.length > 0) {
                if (regionValues.length > 0 && streetValues.length == 0 && complexValues.length == 0) {
                    tempFilteredPropRegion = arr.filter((el) => {
                        for (let i = 0; i < regionValues.length; i++) {
                            if (el.region == regionValues[i]) {
                                return true;
                            }
                        }
                    });
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropRegion);
                }
                if (regionValues.length == 0 && streetValues.length > 0 && complexValues.length == 0) {
                    tempFilteredPropStreet = arr.filter((el) => {
                        for (let i = 0; i < streetValues.length; i++) {
                            if (el.street == streetValues[i]) {
                                return true;
                            }
                        }
                    });
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropStreet);
                }
                if (regionValues.length == 0 && streetValues.length == 0 && complexValues.length > 0) {
                    tempFilteredPropComplex = arr.filter((el) => {
                        for (let i = 0; i < complexValues.length; i++) {
                            if (el.complex == complexValues[i]) {
                                return true;
                            }
                        }
                    });
                    console.log(tempFilteredPropComplex);
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropComplex);
                }
            }
            // ---------------
            else {
                tempFilteredPropRegionAndStreet = filterPropPrice(propers);
            }
        }
    }


    // -----------------------------------------------------------------------------------------------


    else if (condHouse) {
        if (regionValues.length > 0 && streetValues.length > 0 && houseTypeValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoTempoSorted = tempoTempoSorted.filter((el) => {
                for (let i = 0; i < houseTypeValues.length; i++) {
                    if (el.housetype == houseTypeValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoTempoSorted);
        }
        else if (regionValues.length > 0 && streetValues.length > 0 && houseTypeValues.length == 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        else if (regionValues.length > 0 && streetValues.length == 0 && houseTypeValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < houseTypeValues.length; i++) {
                    if (el.housetype == houseTypeValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        else if (regionValues.length == 0 && streetValues.length > 0 && houseTypeValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < houseTypeValues.length; i++) {
                    if (el.housetype == houseTypeValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        // ---------------
        else {
            // ----------------------
            if (regionValues.length > 0 || streetValues.length > 0 || houseTypeValues.length > 0) {
                if (regionValues.length > 0 && streetValues.length == 0 && houseTypeValues.length == 0) {
                    tempFilteredPropRegion = arr.filter((el) => {
                        for (let i = 0; i < regionValues.length; i++) {
                            if (el.region == regionValues[i]) {
                                return true;
                            }
                        }
                    });
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropRegion);
                }
                if (regionValues.length == 0 && streetValues.length > 0 && houseTypeValues.length == 0) {
                    tempFilteredPropStreet = arr.filter((el) => {
                        for (let i = 0; i < streetValues.length; i++) {
                            if (el.street == streetValues[i]) {
                                return true;
                            }
                        }
                    });
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropStreet);
                }
                if (regionValues.length == 0 && streetValues.length == 0 && houseTypeValues.length > 0) {
                    tempFilteredPropHouseType = arr.filter((el) => {
                        for (let i = 0; i < houseTypeValues.length; i++) {
                            if (el.housetype == houseTypeValues[i]) {
                                return true;
                            }
                        }
                    });
                    console.log(tempFilteredPropHouseType);
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropHouseType);
                }
            }
            // ---------------
            else {
                tempFilteredPropRegionAndStreet = filterPropPrice(propers);
            }
        }
    }

    // -----------------------------------------------------------------

    else if (condOffice) {
        if (regionValues.length > 0 && streetValues.length > 0 && officeTypeValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoTempoSorted = tempoTempoSorted.filter((el) => {
                for (let i = 0; i < officeTypeValues.length; i++) {
                    if (el.officetype == officeTypeValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoTempoSorted);
        }
        else if (regionValues.length > 0 && streetValues.length > 0 && officeTypeValues.length == 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        else if (regionValues.length > 0 && streetValues.length == 0 && officeTypeValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < officeTypeValues.length; i++) {
                    if (el.officetype == officeTypeValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        else if (regionValues.length == 0 && streetValues.length > 0 && officeTypeValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
                    if (el.street == streetValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < officeTypeValues.length; i++) {
                    if (el.officetype == officeTypeValues[i]) {
                        return true;
                    }
                }
            });
            tempFilteredPropRegionAndStreet = filterPropPrice(tempoTempoSorted);
        }
        // ---------------
        else {
            // ----------------------
            if (regionValues.length > 0 || streetValues.length > 0 || officeTypeValues.length > 0) {
                if (regionValues.length > 0 && streetValues.length == 0 && officeTypeValues.length == 0) {
                    tempFilteredPropRegion = arr.filter((el) => {
                        for (let i = 0; i < regionValues.length; i++) {
                            if (el.region == regionValues[i]) {
                                return true;
                            }
                        }
                    });
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropRegion);
                }
                if (regionValues.length == 0 && streetValues.length > 0 && officeTypeValues.length == 0) {
                    tempFilteredPropStreet = arr.filter((el) => {
                        for (let i = 0; i < streetValues.length; i++) {
                            if (el.street == streetValues[i]) {
                                return true;
                            }
                        }
                    });
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropStreet);
                }
                if (regionValues.length == 0 && streetValues.length == 0 && officeTypeValues.length > 0) {
                    tempFilteredPropOfficeType = arr.filter((el) => {
                        for (let i = 0; i < officeTypeValues.length; i++) {
                            if (el.officetype == officeTypeValues[i]) {
                                return true;
                            }
                        }
                    });
                    tempFilteredPropRegionAndStreet = filterPropPrice(tempFilteredPropOfficeType);
                }
            }
            // ---------------
            else {
                tempFilteredPropRegionAndStreet = filterPropPrice(propers);
            }
        }
    }

    // -----------------------------------------------------------------

    else {
        if (regionValues.length > 0 && streetValues.length > 0) {
            let tempoTempo = arr.filter((el) => {
                for (let i = 0; i < regionValues.length; i++) {
                    if (el.region == regionValues[i]) {
                        return true;
                    }
                }
            });
            let tempoTempoSorted = tempoTempo.filter((el) => {
                for (let i = 0; i < streetValues.length; i++) {
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
    }



    tempFilteredPropRegionAndStreet.forEach(el => {
        const items = document.createElement('li');
        const propItem = document.createElement('a');
        const propInfo = document.createElement('p');
        const propImgBox = document.createElement('div');

        for (let i = 0; i < el.image.length; i++) {
            let imgItem = document.createElement('img');
            imgItem.src = el.image[i];
            propImgBox.appendChild(imgItem);
        }
        propInfo.textContent = el.title = 'type: ' + el.type + ', |____ rooms: ' +
            el.rooms + ',  |____ size: ' + el.size + ',  |____ price: ' +
            el.price + ', |____ region: ' + el.region + ', |____ street: ' +
            el.street + (el.complex ? `, |____ complex: ${el.complex}` : '') +
            (el.housetype ? `, |____ housetype: ${el.housetype}` : '') +
            (el.officetype ? `, |____ officetype: ${el.officetype}` : '');


        propItem.appendChild(propImgBox);
        propItem.appendChild(propInfo);
        items.appendChild(propItem);
        list.appendChild(items);

    });

    for (let i = 0; i < link.length; i++) {
        const listLength = list.children.length;
        link[i].textContent = `Show ${listLength} results`;
    }

    return tempFilteredPropRegionAndStreet;
}









function runner() {
    return filterPropRegionAndStreet(propers);
}




for (let i = 0; i < childRooms.length; i++) {
    childRooms[i].addEventListener('click', () => {
        childRooms[i].classList.toggle('selected');
        runner()
    });
}


for (let i = 0; i < childRooms1.length; i++) {
    childRooms1[i].addEventListener('click', () => {
        childRooms1[i].classList.toggle('selected');
        runner()
    });
}


inputNumber.addEventListener('change', runner);

inputNumber1.addEventListener('change', runner);

priceNumber.addEventListener('change', runner);

priceNumber1.addEventListener('change', runner);


officePriceNumber.addEventListener('change', runner);

officePriceNumber1.addEventListener('change', runner);

officeSizeNumber.addEventListener('change', runner);

officeSizeNumber1.addEventListener('change', runner);


housePriceNumber.addEventListener('change', runner);

housePriceNumber1.addEventListener('change', runner);

houseSizeNumber.addEventListener('change', runner);

houseSizeNumber1.addEventListener('change', runner);

newOfficePriceNumber.addEventListener('change', runner);

newOfficePriceNumber1.addEventListener('change', runner);

newOfficeSizeNumber.addEventListener('change', runner);

newOfficeSizeNumber1.addEventListener('change', runner);



let parentUl = document.querySelectorAll('.select-wrapper');

let childLi1 = parentUl[0].querySelectorAll('li');

for (let t = 0; t < childLi1.length; t++) {
    childLi1[t].addEventListener('click', () => {
        runner()
    });
}


let childLi2 = parentUl[1].querySelectorAll('li');

for (let t = 0; t < childLi2.length; t++) {
    childLi2[t].addEventListener('click', () => {
        runner()
    });
}

let childLi3 = parentUl[2].querySelectorAll('li');

for (let t = 0; t < childLi3.length; t++) {
    childLi3[t].addEventListener('click', () => {
        runner()
    });
}

let childLi4 = parentUl[3].querySelectorAll('li');

for (let t = 0; t < childLi4.length; t++) {
    childLi4[t].addEventListener('click', () => {
        runner()
    });
}

let childLi5 = parentUl[4].querySelectorAll('li');

for (let t = 0; t < childLi5.length; t++) {
    childLi5[t].addEventListener('click', () => {
        runner()
    });
}
let childLi6 = parentUl[5].querySelectorAll('li');

for (let t = 0; t < childLi6.length; t++) {
    childLi6[t].addEventListener('click', () => {
        runner()
    });
}
let childLi7 = parentUl[6].querySelectorAll('li');

for (let t = 0; t < childLi7.length; t++) {
    childLi7[t].addEventListener('click', () => {
        runner()
    });
}
let childLi8 = parentUl[7].querySelectorAll('li');

for (let t = 0; t < childLi8.length; t++) {
    childLi8[t].addEventListener('click', () => {
        runner()
    });
}
let childLi9 = parentUl[8].querySelectorAll('li');

for (let t = 0; t < childLi9.length; t++) {
    childLi9[t].addEventListener('click', () => {
        runner()
    });
}
let childLi10 = parentUl[9].querySelectorAll('li');

for (let t = 0; t < childLi10.length; t++) {
    childLi10[t].addEventListener('click', () => {
        runner()
    });
}
let childLi11 = parentUl[10].querySelectorAll('li');

for (let t = 0; t < childLi11.length; t++) {
    childLi11[t].addEventListener('click', () => {
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
    let defaults = {
        container: '[data-tab-component]',
        trigger: '[role="tab"]',
        content: '[role="tabpanel"]'
    };

    // If there are no settings overrides
    let settings = (typeof args !== 'undefined') ? args : defaults;

    /**
     * @function toggle()
     *
     * Handles the displaying/hiding of content
     *
     * @returns null
     */
    let toggle = function () {
        let parent = this.closest(settings.container),
            target = this.getAttribute('aria-controls'),
            content = document.getElementById(target),
            toggles = parent.querySelectorAll(settings.trigger),
            all_content = parent.querySelectorAll(settings.content);

        // Update visibility
        for (let i = 0, len = toggles.length; i < len; i++) {
            toggles[i].setAttribute('aria-selected', 'false');
            all_content[i].setAttribute('aria-hidden', 'true');
            all_content[i].classList.remove('anime');
        }

        this.setAttribute('aria-selected', 'true');
        content.setAttribute('aria-hidden', 'false');
        content.classList.add('anime');

    };

    /**
     * @function bindEventListeners()
     *
     * Attach event listeners
     *
     * @returns null
     */
    let bindEventListeners = function () {
        let trigger = document.querySelectorAll(settings.trigger);

        //
        // TODO
        // Use event delgation to add event handlers
        //
        for (let i = 0, len = trigger.length; i < len; i++) {
            trigger[i].addEventListener('click', function (event) {
                toggle.call(this);
                runner();
            });

            trigger[i].addEventListener('keydown', function (event) {
                if (event.which == 13) {
                    toggle.call(this);
                    runner();
                }
            });
        };
    };

    return bindEventListeners();
}

// Create an instance of component
window.onload = function () {
    let tabs = new Tabs();
};
feather.replace();