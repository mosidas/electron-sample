import { useAuthContext } from "../hooks/useAuthContext"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

export const Header = () => {
  const { loggedIn, logout } = useAuthContext()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sample
          </Typography>
          {loggedIn && (
            <Button
              color="inherit"
              onClick={() => {
                console.log("logout")
                logout()
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
