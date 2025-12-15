import { contextBridge } from "electron"

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInIsolatedWorld('context', {
    //TODO Add your preload function here
  })
}