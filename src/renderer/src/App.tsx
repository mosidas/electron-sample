import Login from "./pages/login/Login"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useColorScheme } from "@mui/material/styles"

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})
export default function App(): JSX.Element {
  const { setMode } = useColorScheme()
  setMode("system")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  )
}
