const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('new-window')
const fullWinowBtn = document.getElementById('full-window')

//正常窗口
newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})

//全屏无边框窗口 
fullWinowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ width: 400, height: 320,frame:false ,fullscreen:true})

  // win.maximize();
  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.on("ready-to-show",()=>{
    win.show()
  })
})
