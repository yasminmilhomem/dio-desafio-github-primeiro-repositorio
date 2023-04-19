function myFunction() {
    let person = prompt("Please enter the ratio", "0");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "A área da circunferência é: " + (3.14*person*person);
    }
  }


  