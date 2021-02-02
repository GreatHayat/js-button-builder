let borderColor = "#333333";
let borderWidth = "1";
let style = {};

document
  .getElementById("element-selector")
  .addEventListener("change", function (e) {
    e.preventDefault();
    const element = document.createElement(e.target.value);
    if (e.target.value === "button") {
      element.innerHTML = "Button";
      element.setAttribute("class", "button");
      document.getElementById("output").append(element);
    }
  });

// width of the button
document.getElementById("width").addEventListener("keyup", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.width = `${e.target.value}px`;
  style.width = `${e.target.value}px`;
});

// height of the button
document.getElementById("height").addEventListener("keyup", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.height = `${e.target.value}px`;
  style.height = `${e.target.value}px`;
});

document.getElementById("padding").addEventListener("keyup", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.padding = `${e.target.value}px`;
  style.padding = `${e.target.value}px`;
});

document.getElementById("background").addEventListener("input", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.backgroundColor = `${e.target.value}`;
  style["background-color"] = e.target.value;
});

document.getElementById("color").addEventListener("input", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.color = `${e.target.value}`;
  style.color = e.target.value;
});

document.getElementById("outline").addEventListener("change", function (e) {
  e.preventDefault();
  if (e.target.checked) {
    document.querySelector(".button").style.outline = "";
    delete style.outline;
  } else {
    document.querySelector(".button").style.outline = "none";
    style.outline = "none";
  }
});

document.getElementById("borderWidth").addEventListener("keyup", function (e) {
  borderWidth = e.target.value;
  e.preventDefault();
  document.querySelector(
    ".button"
  ).style.border = `${borderWidth}px solid ${borderColor}`;
  style.border = `${borderWidth}px solid ${borderColor}`;
});

document.getElementById("borderColor").addEventListener("input", function (e) {
  e.preventDefault();
  borderColor = e.target.value;
  document.querySelector(
    ".button"
  ).style.border = `${borderWidth}px solid ${borderColor}`;
});

document.getElementById("borderStyle").addEventListener("change", function (e) {
  e.preventDefault();
  if (e.target.checked) {
    document.getElementById("border_style").style.display = "block";
  } else {
    document.getElementById("border_style").style.display = "none";
    document.querySelector(".button").style.border = "0px";
    document.getElementById("borderWidth").value = "1";
  }
});

document.getElementById("borderRadius").addEventListener("keyup", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.borderRadius = `${e.target.value}px`;

  style["border-radius"] = `${e.target.value}px`;
});

document.getElementById("fontSize").addEventListener("keyup", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.fontSize = `${e.target.value}px`;

  style["font-size"] = `${e.target.value}px`;
});

document.getElementById("fontWeight").addEventListener("keyup", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.fontWeight = `${e.target.value}`;

  style["font-weight"] = e.target.value;
});

document.getElementById("textAlign").addEventListener("change", function (e) {
  e.preventDefault();
  document.querySelector(".button").style.textAlign = e.target.value;

  style["text-align"] = e.target.value;
});

document
  .getElementById("textTransform")
  .addEventListener("change", function (e) {
    e.preventDefault();
    document.querySelector(".button").style.textTransform = e.target.value;

    style["text-transform"] = e.target.value;
  });

document
  .getElementById("letterSpacing")
  .addEventListener("keyup", function (e) {
    e.preventDefault();
    document.querySelector(
      ".button"
    ).style.letterSpacing = `${e.target.value}px`;

    style["letter-spacing"] = `${e.target.value}px`;
  });

document
  .getElementById("textDecoration")
  .addEventListener("change", function (e) {
    e.preventDefault();
    document.querySelector(".button").style.textDecorationLine = e.target.value;

    style["text-decoration"] = e.target.value;
  });
document.querySelector("#getStyle").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("textarea").innerHTML = "";
  for (let [key, value] of Object.entries(style)) {
    document.getElementById("textarea").innerHTML += `${key}: ${value};\n`;
  }
});

document.getElementById("copy").addEventListener("click", function (e) {
  var copyText = document.getElementById("textarea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("code copy to clipboard");
  console.log("{" + copyText.value + "}");
});
