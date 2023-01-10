const url = 'https://api.frankfurter.app/latest'
fetch(url)
  .then((response) => {return response.json()})
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(`Błąd pobierania danych: ${error.message}`)
    alert('Wystąpił błąd podczas pobierania danych')
  })
