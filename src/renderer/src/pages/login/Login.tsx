import { Avatar, Box, Button, Grid2, Paper, TextField, Typography } from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { teal } from "@mui/material/colors"

export const Login = () => {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          p: 4,
          height: "400px",
          width: "300px",
          m: "10% auto",
        }}
      >
        <Grid2 container direction="column" alignItems="center">
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            Login
          </Typography>
        </Grid2>
        <TextField label="ID" variant="standard" fullWidth required />
        <TextField type="password" label="Password" variant="standard" fullWidth required />
        <Box mt={3}>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            ログイン
          </Button>
        </Box>
      </Paper>
    </>
  )
}

export default Login
