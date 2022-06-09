const containers = [...document.getElementsByClassName('possion')]
containers.map((container, i) => {
  const imgs = [...container.getElementsByTagName('img')]

  imgs.map((img) => {
    img.onclick = () => {
      imgs[1].style.opacity = 1
      setTimeout(() => {
        imgs[1].style.opacity = 0
      }, 1000)
    }
  })
})

const form0 = document.getElementById('form0')

function stopDefAction(e) {
  e.preventDefault()
  const name = document.getElementsByName('text')
  const data = document.getElementsByName('date')
  alert('Ваше имя: ' + name[0].value + '\nВаша дата рождения: ' + data[0].value)
}

form0.onsubmit = stopDefAction
