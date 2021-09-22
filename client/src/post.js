 axios({
  method: 'post', //you can set what request you want to be
  url: 'https://pwddrive.herokuapp.com/',
  data: {name: "Aasheesh Singh"},
  headers: {
    datto: 'Bearer '
  }
})
