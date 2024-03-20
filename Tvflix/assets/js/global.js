'use strict';




const addEventOnElements = function(elements,eventType,callback){
    for(const elem of elements)elem.addEventOnElements(eventType,callback);
}

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelector("[search-btn]");

addEventOnElements(searchTogglers ,"click" ,function(){
    searchBox.classList.toggle("active");
})

