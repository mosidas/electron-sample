import { Button } from "@mui/material"

export const Main2 = () => {
  const message = "hello world"
  const ipcHandle = () => window.electron.ipcRenderer.send("ping", message)
  return (
    <>
      <div>Main2</div>
      <Button onClick={ipcHandle}>Button</Button>
    </>
  )
}
