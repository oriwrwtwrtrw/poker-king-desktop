const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({
    width: 1100, height: 700,
    webPreferences: { preload: path.join(__dirname,'app','preload.js'), contextIsolation:true }
  });
  win.removeMenu();
  win.loadFile(path.join(__dirname,'app','index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', ()=>{ if(process.platform !== 'darwin') app.quit(); });
