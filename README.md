# exploreJs

Here i explore Javascript from scratch.

# **MiniCalculator** [![Build Status](https://travis-ci.org/facebook/flipper.svg?branch=master)](https://travis-ci.org/facebook/flipper)

`miniCalculator` is a responsive web _application_ that allows us to perform _basic operations_.

> For more information,your can join us using this link: [nooutidev](http://oreolnoumodongdesign.000webhostapp.com/)

#### [`Part of code example`]

```js
function displayResult() {
  var firstNumber = document.getElementById("firstNumber");
  var secondNumber = document.getElementById("secondNumber");
  var finalResult = document.getElementById("finalResult");
  var operation = document.getElementById("operation");

  var valueOne = firstNumber.value;
  var valueTwo = secondNumber.value;
  var opera = operation.value;

  if (valueOne != "" && valueTwo != "") {
    if (parseInt(valueTwo) != 0 || opera != "division") {
      // Called calculated() function

      if (!isNaN(calculated(valueOne, valueTwo, opera))) {
        finalResult.innerHTML = calculated(valueOne, valueTwo, opera);
      } else {
        showPopop(
          "There must be an error with the values entered. Please check and try again. "
        );
      }
    } else {
      showPopop("We cannot divide a number by zero. ");
    }
  } else {
    showPopop("You have one or two empty fields. Please check and try again. ");
  }
}
```

# Illustration

###### [`Look this first image`]

![](/imgForReadme/img01.PNG)

###### [`Look this second image`]

![](/imgForReadme/img02.PNG)

> You can join me to LinkedIn using this link: [LinkedIn](https://www.linkedin.com/in/oreolnoumodong/)
