import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/login/Login"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useColorScheme } from "@mui/material/styles"
import { Main } from "./pages/main/Main"
import { Main2 } from "./pages/main2/Main2"
import { Auth } from "./components/Auth"
import { Header } from "./components/Header"

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})
export default function App(): JSX.Element {
  const { setMode } = useColorScheme()
  setMode("system")
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Auth>
                <Main />
              </Auth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/main"
            element={
              <Auth>
                <Main />
              </Auth>
            }
          />
          <Route
            path="/main2"
            element={
              <Auth>
                <Main2 />
              </Auth>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  )
}
