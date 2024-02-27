import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import * as albumServices from "./services/albumServices";
function App() {

  const [topAlbumDetails, setTopAlbumDetails] = useState([]);
  const [newAlbumDetails, setNewAlbumDetails] = useState([]);
  const [allSongs, setAllSongs] = useState([])
  const [allGenres, setAllGenres] = useState([])

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

    async function getNewAlbums() {

      try {
       const response = await albumServices.getNewAlbums()
        setNewAlbumDetails(response)
      } catch(error) {
        console.log(error, "get album app error")
      }
    }

    getNewAlbums()

    async function getAllSongs() {

      try {
       const response = await albumServices.getAllSongs()
        setAllSongs(response)
      } catch(error) {
        console.log(error, "get album app error")
      }
    }

    getAllSongs()

    async function getAllGenres() {

      try {
       const response = await albumServices.getAllGenres()
        setAllGenres(response.data)
      } catch(error) {
        console.log(error, "get album app error")
      }
    }

    getAllGenres()
  },[])

  
  return (
    <StyledEngineProvider injectFirst>
        <Navbar></Navbar>
        <Hero></Hero>
        <div style={{padding: "0px 32px"}}>
        <Section cardDetails={topAlbumDetails} sectionTitle={"Top Albums"}></Section>
        <Section cardDetails={newAlbumDetails} sectionTitle={"New Albums"}></Section>
        <Section cardDetails={allSongs} sectionTitle={"Songs"} tabs={allGenres}></Section>
        </div>
    </StyledEngineProvider>
  );
}

export default App;
