import { Button } from "@mui/material"
import { MuiFileInput } from "mui-file-input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import UploadFile from "@mui/icons-material/UploadFile"
export const Main = () => {
  const navigate = useNavigate()
  const onclick = () => {
    navigate("/main2")
  }
  const [file, setFile] = useState(null)

  const handleChange = (newFile) => {
    setFile(newFile)
    if (newFile === null) {
      return
    }
    console.log(newFile.name)
  }
  return (
    <>
      <div>Main</div>
      <MuiFileInput
        label="Upload File"
        value={file}
        onChange={handleChange}
        variant="outlined"
        InputProps={{
          inputProps: {
            accept: "*",
          },
          startAdornment: <UploadFile color="primary" />,
        }}
        sx={{
          margin: "10px",
          width: "80%",
        }}
      />
      <br />
      <Button color="primary" variant="contained" onClick={onclick}>
        Button
      </Button>
    </>
  )
}
