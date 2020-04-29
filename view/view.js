const Store = require('electron-store')
const viewStore = new Store({name:'view'});

const $ = (selector)=>{
    const result = document.querySelectorAll(selector);
    return result.length > 1?result:result[0]
}

//Initialize the page and listen to various events after the page is loaded
document.addEventListener('DOMContentLoaded',()=>{
    //get ImageUrl and initial the node
    const imageUrl = viewStore.get('imageUrl');
    $('#avatar').src = imageUrl;
})

