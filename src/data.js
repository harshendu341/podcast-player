import {v4 as uuidv4 } from "uuid";

function podcastAudio(){
    return [
        {
            name: "Peaceful Dissociation",
            cover: "https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg",
            artist: "Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
            color: ['#E1E2AE','#d9b357'],
            id: uuidv4(),
            active: true
        },

        {
            name: "Fly High Newborn",
            cover: "https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg",
            artist: "Aviino, BandooBoi",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55317",
            color: ['#E1E2AE','#fb0c1a'],
            id: uuidv4(),
            active: false
        },
        
        {
            name: "Cabriolet",
            cover: "https://chillhop.com/wp-content/uploads/2023/02/492202568b0d18312224043686735f7f1a47f67b-1024x1024.jpg",
            artist: "Ben Bada Boom, Plusma",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49369",
            color: ['#c4f2f8','#e0a256'],
            id: uuidv4(),
            active: false
        },
       
    ]
}

export default podcastAudio;