import _ from "Lodash";
import "./styles.css";
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script 
  element.innerHTML = _.join(['Hello', 'webpack','<a>123</a>'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());