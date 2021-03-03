function checkEmail(form) {

  //email from the input of user
  let email = form.email.value;

  //regex for email format
  let mailFormat = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

  //if email is valid, it will be added to an array of valid emails 
  var flag = true;
  var valid =[];

  if (email.match(mailFormat)) {
    console.log(email);
    valid.push(email);
    alert("Thank you!");
    flag = true;
    return true;
  } else {
    alert("You have entered an invalid email address!");
    flag = false;
    return (false);
  }
}

//if passed from prior if block, it will then post to API URL
if (flag = true) {
  fetch(url, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: valid
      })
    })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
}