const { app, BrowserWindow } = require('electron')
// APP => Modulo responsável por controlar o ciclo de vida da aplicação 
// BrowserWindow => Gerencia a criação de janelas do aplicativo
const path = require('path')

console.log(path.join(__dirname, 'preloader.js'))

function createWindow() {
   const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         preload: path.join(__dirname, 'preloader.js')
      }
   })
   win.loadURL('http://localhost:3000')
}

/* // Forma 01 de executar
app.on('ready', () => {
   createWindow()
})*/

app.whenReady().then(() => {  // Promise que retorna quando o app retornar o ready. Forma recomendada da propria documentação
   createWindow()

   app.on('activate', () => {
      if(BrowserWindow.getAllWindows().length === 0 ) createWindow()
   })
})

app.on('window-all-closed', () => {
   if(process.platform !== 'darwin') app.quit() // Não ser um MAC
})