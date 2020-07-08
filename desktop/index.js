const { app, BrowserWindow } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    title: "Calculator",
    width: 325,
    height: 480,
    minimizable: false,
    resizable: false,
    fullscreenable: false,
    autoHideMenuBar: true,
    webPreferences: {
      devTools: false,
    },
  });

  win.loadFile("./public/index.html");
}

app.allowRendererProcessReuse = true;

app.whenReady().then(createWindow);
