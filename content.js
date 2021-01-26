
const interval = setInterval(() => {
    const header = document.querySelector('._2O84H')
    if (header) {
        clearInterval(interval)

        const button = document.createElement('button')
        button.innerHTML = '2x'
        
        button.classList.add('twotimesspeed')

        button.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio')
            audios.forEach((audio) => {
                audio.playbackRate = 2
            })
        })
        header.appendChild(button)
    }
}
, 1000)
