import { Box, styled } from "@mui/material";
import Navbar from "./components/Navbar";

const RootWrapper = styled(Box)(() => ({
  width: "100vw",
  padding: 0,
  backgroundImage: `url(${"../background.png"})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

function App() {
  return (
    <RootWrapper>
      <Navbar />
    </RootWrapper>
  )
}

export default App
