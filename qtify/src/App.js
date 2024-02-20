import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <Navbar></Navbar>
        
    </StyledEngineProvider>
  );
}

export default App;
