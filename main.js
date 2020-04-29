// 引入electron并创建一个Browserwindow
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const AppWindow = require('./src/AppWindow')
const Store = require('electron-store');
const viewStore = new Store({ name: 'view' });
// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow
let feedbackWindow
let viewavatar
let restoreWindow
function createWindow() {
    //创建浏览器窗口,宽高自定义具体大小你开心就好
    mainWindow = new BrowserWindow({
        width: 720,
        height: 540,
        frame: false,
        resizable:false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    /* 
    * 加载应用----- electron-quick-start中默认的加载入口
    mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
    }))
    */
    // 加载应用----适用于 react 项目
    mainWindow.loadURL('http://localhost:3000/');

    // 打开开发者工具，默认不打开
    mainWindow.webContents.openDevTools()
    // 关闭window时触发下列事件.
    mainWindow.on('closed', function () {
        mainWindow = null
    })

    // hook up main events
    ipcMain.on('open-view-avatar-window', (events, imageUrl) => {
        if(viewavatar){
            //set imageUrl to Store
            viewStore.set('imageUrl', imageUrl);
            viewavatar.focus()
        }else{
            const settingsWindowConfig = {
                width: 340,
                height: 360,
                parent: mainWindow,
            }
            const settingsFileLocation = `file://${path.join(__dirname, './view/view.html')}`
            viewavatar = new AppWindow(settingsWindowConfig, settingsFileLocation)
            viewavatar.removeMenu()
            viewavatar.on('closed', () => {
                viewavatar = null
            });
            //set imageUrl to Store
            viewStore.set('imageUrl', imageUrl);
        }
    })

    //open-feedback-window
    ipcMain.on('open-feedback-window', () => {
        if(feedbackWindow){
            feedbackWindow.focus()
        }else{
            const settingsWindowConfig = {
                width: 380,
                height: 230,
                parent: mainWindow,
            }
            const settingsFileLocation = `file://${path.join(__dirname, './feedback/feedback.html')}`
            feedbackWindow = new AppWindow(settingsWindowConfig, settingsFileLocation)
            feedbackWindow.removeMenu()
            feedbackWindow.on('closed', () => {
                feedbackWindow = null
            })
        }
    })

    ipcMain.on('open-restore-window',()=>{
        if(restoreWindow){
            restoreWindow.focus()
        }else{
            const restoreWindowConfig = {
                width:570,
                height:380,
                parent:mainWindow
            }
            const restoreFileLocation = `file://${path.join(__dirname,'./restore/restore.html')}`
            restoreWindow = new AppWindow(restoreWindowConfig,restoreFileLocation)
            restoreWindow.removeMenu()
            restoreWindow.on('closed',()=>{
                restoreWindow = null
            })
        }
        // restoreWindow.webContents.openDevTools()
    })

    //close feedback window
    ipcMain.on('close-feedback-window',()=>{
        feedbackWindow.close()
    })

    //hide main window
    ipcMain.on('hide-main-window',()=>{
        mainWindow.minimize();
    })

    //close main window
    ipcMain.on('close-main-window',()=>{
        mainWindow.close()
    })
}
// // 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)
// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
    // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
    // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
    if (mainWindow === null) {
        createWindow()
    }
})
// 你可以在这个脚本中续写或者使用require引入独立的js文件.