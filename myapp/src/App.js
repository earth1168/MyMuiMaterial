import { Button,styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {

  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  }));

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size = "small"
      >Contained</Button>
      <Button startIcon = {<Add/>} color = "success" variant="contained">Add new post</Button>
      <Button variant="outlined">Outlined</Button>

      <Typography variant="h1" component="p">
        hh1 style but in p tag
      </Typography>;
      <BlueButton>First Button</BlueButton>
      <BlueButton>Another Button</BlueButton>


    </div>
  );
}

export default App;
