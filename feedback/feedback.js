const {ipcRenderer,remote} = window.require('electron')

const $ = (selector)=>{
    const result = document.querySelectorAll(selector);
    return result.length > 1?result:result[0]
}

//Initialize the page and listen to various events after the page is loaded
document.addEventListener('DOMContentLoaded',()=>{
    $('#cancel').addEventListener('click',()=>{
        //ipcRender main process clode feedback window
        ipcRenderer.send('close-feedback-window')
    })
})

