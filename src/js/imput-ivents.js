import descTemp from '../templates/country-desc.hbs';
import listTemp from '../templates/countries-list.hbs';
import fetchCountry from './fetch-country';
import notificationMany from './notificationTooMany';
const _ = require('lodash');


const refs = {
    inputRef: document.querySelector('.search-input'),
    containerRef: document.querySelector('.js-container')
}

const debounceCallback = _.debounce(input, 500);

refs.inputRef.addEventListener('input', debounceCallback);


function input(event) {
    const name = event.target.value;
    refs.containerRef.innerHTML = '';

    fetchCountry(name).then(chooseOption);
}

function chooseOption(data) {
    if (data.length === 1) {
        createDiv(...data);
        }
        if (data.length > 1 && data.length <= 10) {
            createList(data);
        }
        if (data.length > 10) {
            notificationMany();
    }
}

function createDiv(data) {
    const descNode = descTemp(data);
    refs.containerRef.innerHTML = descNode;
}

function createList(data) {
    const listNode = listTemp(data);
    refs.containerRef.innerHTML = listNode;
}

