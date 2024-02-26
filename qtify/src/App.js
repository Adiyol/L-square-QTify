import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import * as albumServices from "./services/albumServices";
function App() {

  const [topAlbumDetails, setTopAlbumDetails] = useState([]);
  const [newAlbumDetails, setNewAlbumDetails] = useState([]);

  useEffect(() => {
    async function getTopAlbums() {

      try {
       const response = await albumServices.getTopAlbums()
        setTopAlbumDetails(response)
      } catch(error) {
        console.log(error, "get album app error")
      }
    }

    getTopAlbums()
  },[])

  useEffect(() => {
    async function getNewAlbums() {

      try {
       const response = await albumServices.getNewAlbums()
        setNewAlbumDetails(response)
      } catch(error) {
        console.log(error, "get album app error")
      }
    }

    getNewAlbums()
  },[])
  return (
    <StyledEngineProvider injectFirst>
        <Navbar></Navbar>
        <Hero></Hero>
        <div style={{padding: "0px 32px"}}>
        <Section cardDetails={topAlbumDetails} sectionTitle={"Top Albums"}></Section>
        <Section cardDetails={newAlbumDetails} sectionTitle={"New Albums"}></Section>
        </div>
    </StyledEngineProvider>
  );
}

export default App;
