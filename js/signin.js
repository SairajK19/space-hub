function handleSubmit(event) {
  var email = document.getElementById("email").value;
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psd").value;

  if ((email.trim() === "") | (username.trim() === "") | (password.trim() === "")) {
    event.preventDefault();
  }

  if (email.trim() === "") {
    var emailVld = document.getElementById("email-vld");
    emailVld.innerHTML = "Email required* ";
    emailVld.style.color = "red";
  } else {
    var emailRegex =
      /^([a-z A-z 0-9\._-]+)@([a-zA-z0-9\._-]+).\.([a-z]+)(\.[a-z])?$/;

    if (!emailRegex.test(email)) {
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

  if (password.trim() === "") {
    var psdVld = document.getElementById("psd-vld");
    psdVld.innerHTML = "Password required* ";
    psdVld.style.color = "red";
  } else {
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

  alert(`Email: ${email}\nUsername: ${username}\nPassword: ${password}`);
}
