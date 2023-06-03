elementSelector('#generate_location').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition, showError);
  } else {
    alert(
      'It seems Geolocation is not supported on your browser, please enter the details manually..'
    );
  }
});
// Fills co-ordinates if browser supports it
const displayPosition = (position) => {
  elementSelector('#hotel_latitude').value = position.coords.latitude;
  elementSelector('#hotel_longitude').value = position.coords.longitude;
};

const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      alert('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      alert('An unknown error occurred.');
      break;
  }
};
// Submit button clicked
elementSelector('#submit').addEventListener('click', () => {
  let detailsObj = {};
  let userInputRef = elementSelector('.userInput', true);
  userInputRef.forEach((element) => {
    detailsObj[element.id] = element.value;
  });
  let foodTypeRef = elementSelector('.foodType', true);
  foodTypeRef.forEach((element) => {
    if (element.checked) {
      detailsObj['foodType'] = element.value;
    }
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
