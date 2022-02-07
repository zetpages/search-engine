let elems = document.querySelectorAll('select');
let instances = M.FormSelect.init(elems, {});

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

function random_images(images) {

    tempImages = [];
    for (let i = 0; i < 3; i++) {
        tempImages.push(images[Math.floor(Math.random() * images.length)]);
    }

    return tempImages;
}
let types = ['house', 'apartment', 'new', 'office'];
let images = [
    'https://images.unsplash.com/photo-1548103662-ddcb912e3fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMjI0MjgyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1604804221869-d4e1a8f27ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMjI0MjgyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605087610901-fe3ed05fc126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMjI0MjgyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605114081604-43bd388fe429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxXQ0xnMWV3dl9FSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
];

let regions = ['alamedin', 'belovodskoe', 'dachnoe', 'ivanovka', 'kant', 'kok-jar', 'lebedinovka', 'leninski', 'oktabyrski', 'pervomaiski'];
let streets = ['12 microdistrict', '11 microdistrict', '10 microdistrict', '9 microdistrict', '8 microdistrict', '7 microdistrict', '6 microdistrict', '5 microdistrict', '4 microdistrict', 'abdymomunova'];

console.log(random_images(images));


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let propers = [];
for (let i = 0; i < 100; i++) {
    propers.push({
        title: '',
        size: getRandomIntInclusive(10, 200),
        price: getRandomIntInclusive(20000, 200000),
        rooms: getRandomIntInclusive(1, 5),
        type: random_item(types),
        region: random_item(regions),
        street: random_item(streets),
        image: random_images(images),
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

    return filteredPropPrice;
}


function filterPropRegionAndStreet(arr) {
    let options = document.getElementById('region').selectedOptions;
    let regionValues = Array.from(options).map(({ value }) => value);
    regionValues.shift();

    let tempFilteredPropRegion = [];

    let optionsStreet = document.getElementById('street').selectedOptions;
    let streetValues = Array.from(optionsStreet).map(({ value }) => value);
    streetValues.shift();
    let tempFilteredPropStreet = [];

    let rLength = regionValues.length;
    let sLength = streetValues.length;
    let maxLength = Math.max(rLength, sLength);

    let tempFilteredPropRegionAndStreet = [];

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
        propInfo.textContent = el.title = 'type: ' + el.type + ', ____ rooms: ' + el.rooms + ',  ____ size: ' + el.size + ',  ____ price: ' + el.price + ', ____ region: ' + el.region + ', ____ street: ' + el.street;


        propItem.appendChild(propImgBox);
        propItem.appendChild(propInfo);
        items.appendChild(propItem);
        list.appendChild(items);

        // console.log(el.image);
    });

    const listLength = list.children.length;
    link.textContent = `Show ${listLength} results`;

    console.log(tempFilteredPropRegionAndStreet);
    return tempFilteredPropRegionAndStreet;
}


function runner() {
    return filterPropRegionAndStreet(propers);
}


for (let i = 0; i < room.length; i++) {
    room[i].addEventListener('click', () => {
        room[i].classList.toggle('selected');
        runner()
    });
}


inputNumber.addEventListener('change', runner);

inputNumber1.addEventListener('change', runner);

priceNumber.addEventListener('change', runner);

priceNumber1.addEventListener('change', runner);



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