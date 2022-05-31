import { Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon = {<Settings/>} variant="contained">Contained</Button>
      <Button startIcon = {<Add/>} color = "success" variant="contained">Add new post</Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h1" component="p">
        hh1 style but in p tag
      </Typography>;
      <Button variant="contained" sx={{
        backgroundColor: "skyblue",
        color: "#888",
        margin: 5,
        "&:hover": {
          backgroundColor:"lightblue"
        }
      }}>
        My Unique Button
      </Button>
    </div>
  );
}

export default App;
