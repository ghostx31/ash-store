const { app, BrowserWindow } = require('electron')

let mainWindow
let pages = []

function createWindow () {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    // fullscreen: true,
    // frame: false,
    autoHideMenuBar: true,
    icon: 'resources/icon.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Load the initial page
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Handle window closed event
  mainWindow.on('closed', () => {
    mainWindow = null
    // Close all pages when main window is closed
    for (let page of pages) {
      page.close()
    }
  })
}

// When Electron has finished initializing, create a new window
app.whenReady().then(createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
