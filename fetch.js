document.getElementById('form0').onsubmit = async (e) => {
  e.preventDefault()

  const name0 = document.getElementById('txt1').value
  const name1 = document.getElementById('txt2').value
  const name2 = document.getElementById('txt3').value
  const name3 = document.getElementById('txt4').value
  const name4 = document.getElementById('txt5').value
  const name5 = document.getElementById('txt6').value

  let response = await fetch('http://localhost/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name0, name1, name2, name3, name4, name5 }),
  })

  const normalAns = await response.json()
  console.log('Ответ сервера', normalAns)
}
