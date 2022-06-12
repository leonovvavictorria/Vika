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

// const form0 = document.getElementById('form0')

// function stopDefAction(e) {
//   e.preventDefault()
//   const name = document.getElementsByName('text')
//   const data = document.getElementsByName('data')
//   const name1 = document.getElementsByName('text1')
//   const name2 = document.getElementsByName('text2')
//   const name3 = document.getElementsByName('text3')
//   const name4 = document.getElementsByName('text4')
//   alert('Ваша фамилия: '+ name1[0].value +'\nВаше имя: ' + name[0].value +'\nВаше отчество: ' + name2[0].value + '\nВаша дата рождения: ' + data[0].value + '\nЛюбите котиков?' + name3[0].value + '\nСколько готовы пожертвовать денег голодным котяткам?'+ name4[0].value)
// }

// form0.onsubmit = stopDefAction
