let borderColor = '#333333';
let borderWidth = '1';
let style = {};
const id = (idName) => document.getElementById(idName);
const query_Selector = (query_SelectorName) =>
  document.querySelector(query_SelectorName);
id('element-selector').addEventListener('change', function (e) {
  e.preventDefault();
  const element = document.createElement(e.target.value);
  if (e.target.value === 'button') {
    element.innerHTML = 'Button';
    element.setAttribute('class', 'button');
    id('output').append(element);
  }
});

// width of the button
id('width').addEventListener('keyup', function (e) {
  e.preventDefault();
  query_Selector('.button').style.width = `${e.target.value}px`;
  style.width = `${e.target.value}px`;
});

// height of the button
id('height').addEventListener('keyup', function (e) {
  e.preventDefault();
  query_Selector('.button').style.height = `${e.target.value}px`;
  style.height = `${e.target.value}px`;
});

id('padding').addEventListener('keyup', function (e) {
  e.preventDefault();
  query_Selector('.button').style.padding = `${e.target.value}px`;
  style.padding = `${e.target.value}px`;
});

id('background').addEventListener('input', function (e) {
  e.preventDefault();
  query_Selector('.button').style.backgroundColor = `${e.target.value}`;
  style['background-color'] = e.target.value;
});

id('color').addEventListener('input', function (e) {
  e.preventDefault();
  query_Selector('.button').style.color = `${e.target.value}`;
  style.color = e.target.value;
});

id('outline').addEventListener('change', function (e) {
  e.preventDefault();
  if (e.target.checked) {
    query_Selector('.button').style.outline = '';
    delete style.outline;
  } else {
    query_Selector('.button').style.outline = 'none';
    style.outline = 'none';
  }
});

id('borderWidth').addEventListener('keyup', function (e) {
  borderWidth = e.target.value;
  e.preventDefault();
  query_Selector(
    '.button'
  ).style.border = `${borderWidth}px solid ${borderColor}`;
  style.border = `${borderWidth}px solid ${borderColor}`;
});

id('borderColor').addEventListener('input', function (e) {
  e.preventDefault();
  borderColor = e.target.value;
  query_Selector(
    '.button'
  ).style.border = `${borderWidth}px solid ${borderColor}`;
});

id('borderStyle').addEventListener('change', function (e) {
  e.preventDefault();
  if (e.target.checked) {
    id('border_style').style.display = 'block';
  } else {
    id('border_style').style.display = 'none';
    id('.button').style.border = '0px';
    id('borderWidth').value = '1';
  }
});

id('borderRadius').addEventListener('keyup', function (e) {
  e.preventDefault();
  query_Selector('.button').style.borderRadius = `${e.target.value}px`;

  style['border-radius'] = `${e.target.value}px`;
});

id('fontSize').addEventListener('keyup', function (e) {
  e.preventDefault();
  query_Selector('.button').style.fontSize = `${e.target.value}px`;

  style['font-size'] = `${e.target.value}px`;
});

id('fontWeight').addEventListener('keyup', function (e) {
  e.preventDefault();
  query_Selector('.button').style.fontWeight = `${e.target.value}`;

  style['font-weight'] = e.target.value;
});

id('textAlign').addEventListener('change', function (e) {
  e.preventDefault();
  query_Selector('.button').style.textAlign = e.target.value;

  style['text-align'] = e.target.value;
});

id('textTransform').addEventListener('change', function (e) {
  e.preventDefault();
  query_Selector('.button').style.textTransform = e.target.value;

  style['text-transform'] = e.target.value;
});

id('letterSpacing').addEventListener('keyup', function (e) {
  e.preventDefault();
  query_Selector('.button').style.letterSpacing = `${e.target.value}px`;

  style['letter-spacing'] = `${e.target.value}px`;
});

id('textDecoration').addEventListener('change', function (e) {
  e.preventDefault();
  query_Selector('.button').style.textDecorationLine = e.target.value;

  style['text-decoration'] = e.target.value;
});
query_Selector('#getStyle').addEventListener('click', function (e) {
  e.preventDefault();
  id('textarea').innerHTML = '';
  for (let [key, value] of Object.entries(style)) {
    id('textarea').innerHTML += `${key}: ${value};\n`;
  }
});

id('copy').addEventListener('click', function (e) {
  var copyText = id('textarea');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('code copy to clipboard');
  console.log('{' + copyText.value + '}');
});
