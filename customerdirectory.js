fetch('https://randomuser.me/api/?results=12') {
  .then(function (response){
    return response.json
  })

  .then(function(json) {
    let result = json.results;
    results.forEach(function(user) {
      console.log('Name: ' + user.name.first);
      console.log('Email: ' + user.email);
    })
  });
