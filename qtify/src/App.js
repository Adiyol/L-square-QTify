import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import * as albumServices from "./services/albumServices";
function App() {

  const [albumDetails, setAlbumDetails] = useState([]);

  useEffect(() => {
    async function getTopAlbums() {

      try {
       const response = await albumServices.getTopAlbums()
        setAlbumDetails(response)
      } catch(error) {
        console.log(error, "get album app error")
      }
    }

    getTopAlbums()
  },[])
  return (
    <StyledEngineProvider injectFirst>
        <Navbar></Navbar>
        <Hero></Hero>
        <div style={{padding: "0px 32px"}}>
        <Section cardDetails={albumDetails} sectionTitle={"Top Albums"}></Section>
        </div>
    </StyledEngineProvider>
  );
}

export default App;
