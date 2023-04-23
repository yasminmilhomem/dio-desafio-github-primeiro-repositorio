function myFunction() {
    let ratio = prompt('Please enter the ratio', '0');
    if (ratio != null) {
      document.getElementById("demo").innerHTML =
      'A área da circunferência é: ' + (3.14*ratio*ratio);
    }
  }


  