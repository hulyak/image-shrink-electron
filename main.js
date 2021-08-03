const { app, BrowserWindow } = require('electron');

// Set environment variables
process.env.NODE_ENV = 'development';
const isDevelopment = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform === 'darwin' ? true : false;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: 500,
    height: 600,
    icon: './assets/icons/Icon_256x256.png',
    resizable: isDevelopment ? true : false,
  });
  // mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.loadFile('./app/index.html');
}

app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
