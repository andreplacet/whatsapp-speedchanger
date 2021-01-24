

const interval = setInterval(() => {
    const header = document.querySelector('._2O84H')
    if (header) {
        console.log(header)
        clearInterval(interval)

        const button = document.createElement('button')
        button.innerHTML = '2x'
        
        button.classList.add('twotimesspeed')

        button.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio')
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 2
            })
        })
        header.appendChild(button)
    }
}
, 1000)
