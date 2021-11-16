console.log("Loaded js");

function handleSubmit(event) {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("uname").value;
  var phoneNumber = document.getElementById("phNumber").value;
  var dob = document.getElementById("dob").value;
  var password = document.getElementById("psd").value;
  var cPassword = document.getElementById("cpsd").value;
  var genderInputList = document.getElementsByName("gender");
  var gender;

  if (
    (fname.trim() === "") |
    (lname.trim() === "") |
    (email.trim() === "") |
    (username.trim() === "") |
    (phoneNumber.trim() === "") |
    (dob.trim() === "") |
    (password.trim() === "") |
    (cPassword.trim() === "") |
    (password.trim() !== cPassword)
  ) {
    event.preventDefault();
  }

  if (fname.trim() === "") {
    var fnameVld = document.getElementById("fName-vld");
    fnameVld.innerHTML = "First name required* ";
    fnameVld.style.color = "red";
  }

  if (lname.trim() === "") {
    var lnameVld = document.getElementById("lName-vld");
    lnameVld.innerHTML = "Last name required* ";
    lnameVld.style.color = "red";
  }

  if (email.trim()=== "") {
    var emailVld = document.getElementById("email-vld");
    emailVld.innerHTML = "Email required* ";
    emailVld.style.color = "red";
  } else {
    var emailRegex =
      /^([a-z A-z 0-9\._-]+)@([a-zA-z0-9\._-]+).\.([a-z]+)(\.[a-z])?$/;

    if (emailRegex.test(email) === false) {
      var emailVld = document.getElementById("email-vld");
      emailVld.innerHTML = "Invalid email type";
      emailVld.style.color = "red";

      event.preventDefault();
    }
  }

  if (username.trim() === "") {
    var unameVld = document.getElementById("uname-vld");
    unameVld.innerHTML = "Username required* ";
    unameVld.style.color = "red";
  } else {
    usernameRegex = /^[A-Za-z0-9]{5,}$/;

    if (!usernameRegex.test(username)) {
      var unameVld = document.getElementById("uname-vld");
      unameVld.innerHTML = "Atleast 5 characters";
      unameVld.style.color = "red";

      event.preventDefault();
    }
  }

  if (phoneNumber.trim() === "") {
    var phVld = document.getElementById("ph-vld");
    phVld.innerHTML = "Phone number required* ";
    phVld.style.color = "red";
  } else {
    var phoneRegEx = /^[789]{1}[0-9]{9}$/;

    if (!phoneRegEx.test(phoneNumber)) {
      var phVld = document.getElementById("ph-vld");
      phVld.innerHTML = "Invalid number";
      phVld.style.color = "red";

      event.preventDefault();
    }
  }

  if (dob.trim() === "") {
    var dobVld = document.getElementById("dob-vld");
    dobVld.innerHTML = "Date of birth required* ";
    dobVld.style.color = "red";
  }

  if (password.trim() === "") {
    var psdVld = document.getElementById("psd-vld");
    psdVld.innerHTML = "Password required* ";
    psdVld.style.color = "red";
  }

  if (cPassword.trim() === "") {
    var cPsdVld = document.getElementById("cpsd-vld");
    cPsdVld.innerHTML = "Password required* ";
    cPsdVld.style.color = "red";
  } else {
    // var passwordRegex = /^([A-Z]+)([a-z]+)([0-9]+)([*&^%$#@!()-_+=/\.[]\{ \}]+).{8,}$/

    // var passwordRegex =
    //   /^([A-Z]+)([0-9]+)?([a-z]+)([0-9]+)([!@#$%^&*(){}\]\[\.]+).{0,}$/;

    var passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordRegex.test(password)) {
      var cPsdVld = document.getElementById("psd-mvld");
      cPsdVld.innerHTML =
        "Atleast 8 characters, 1 uppercase, 1 lowercase, 1 special character (!@#$%^&*)";
      cPsdVld.style.color = "red";

      event.preventDefault();
    }
  }

  if (password !== cPassword) {
    var cPsdVld = document.getElementById("cpsd-vld");
    cPsdVld.innerHTML = "Dosent match* ";
    cPsdVld.style.color = "red";
  }

  for (item of genderInputList) {
    if (item.checked === true) {
      gender = item.value;
    }
  }

  alert(
    `First name: ${fname}\nLast name: ${lname}\nEmail: ${email}\nUsername: ${username}\nPhone number: ${phoneNumber}\nDate of Birth: ${dob}\nPassword: ${password}\nConfirm Password: ${cPassword}  Gender: ${gender}`
  );
}
