import Axios from 'axios';

const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw'

const axios = Axios.create({
    withCredentials: true
});

export default {
    query,
    gerTrack
}

async function query(filter=null, pagination) {
    let track = await axios.get(`https://api.soundcloud.com/tracks.json?linked_partitioning=1&client_id=${CLIENT_ID}&offset=${6*(pagination-1)}&q=${filter}&order=created_at&limit=6`) 
    return track.data
}


async function gerTrack(id) {
    let track = await axios.get(`https://api.soundcloud.com/tracks/${id}?&client_id=${CLIENT_ID}`) 
    return track.data
}

