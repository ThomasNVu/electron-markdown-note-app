import { error } from 'console'
import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO Add your preload function here
  })
} catch {
  console.log(error)
}
