import { Button, Stack } from "@mui/material"
import { MuiFileInput } from "mui-file-input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
export const Main = () => {
  const navigate = useNavigate()
  const onclick = () => {
    navigate("/main2")
  }
  const [file, setFile] = useState(null)

  const handleChange = (newFile) => {
    console.log(newFile)
    setFile(newFile)
  }
  return (
    <>
      <div>Main</div>
      <MuiFileInput
        placeholder="ファイルを選択"
        value={file}
        onChange={handleChange}
        variant="outlined"
        sx={{
          m: "10px",
        }}
      />
      <br />
      <Button color="primary" variant="contained" onClick={onclick}>
        Button
      </Button>
    </>
  )
}
