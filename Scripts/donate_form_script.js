// Submit button clicked
elementSelector('#submit').addEventListener('click', () => {
  // This function automatically generates your object based on id and value just make sure you are using the right ids (based on your api)
  let detailsObj = {};
  let userInputRef = elementSelector('.userInput', true);
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
    })
    .catch((error) => {
      //handle error
    });
});
