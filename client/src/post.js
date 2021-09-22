 axios({
  method: 'post', //you can set what request you want to be
  url: '/post',
  data: {name: "Aasheesh Singh"},
  headers: {
    datto: 'Bearer '
  }
})
