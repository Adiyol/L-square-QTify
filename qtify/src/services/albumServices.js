import axios from "axios";

export async function getTopAlbums() {
    try {
        console.log("service getting called")
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        return response.data;
    } catch(error) {
        console.log(error, "get album service error")
    }
}

export async function getNewAlbums() {
    try {
        console.log("service getting called")
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
        return response.data;
    } catch(error) {
        console.log(error, "get album service error")
    }
}

