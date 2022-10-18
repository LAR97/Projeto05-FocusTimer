const forestAudio = new Audio("./audios/Floresta.wav")
const rainAudio = new Audio("./audios/Chuva.wav")
const coffeAudio = new Audio("./audios/Cafeteria.wav")
const fireAudio = new Audio("./audios/Lareira.wav")
    
forestAudio.loop = true
rainAudio.loop = true
coffeAudio.loop = true
fireAudio.loop = true

export {
    forestAudio,
    rainAudio,
    coffeAudio,
    fireAudio
}

