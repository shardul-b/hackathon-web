// Login Submit button clicked
elementSelector('#login-submit').addEventListener('click', () => {
  // This function automatically generates your object based on id and value just make sure you are using the right ids (based on your api)
  let detailsObj = {};
  let userInputRef = elementSelector('.login-input', true);
  userInputRef.forEach((element) => {
    detailsObj[element.id] = element.value;
  });
  console.log(detailsObj);
  //Add your URL
  fetch('url', {
    Method: 'POST',
    Body: detailsObj,
  })
    .then((response) => response.json())
    .then((data) => {
      //data
      sessionStorage.setItem('userId',data.userId)
      //save user id in session storage
    })
    .catch((error) => {
      //handle error
    });
});
