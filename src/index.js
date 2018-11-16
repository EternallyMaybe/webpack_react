import './style.css';
import {square, cube} from './math.js';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = [
        'hello world!',
        '5 cubed is equal to' + cube(5)
    ].join('\n\n');
+   element.classList.add('hello');

    return element;
}
document.body.appendChild(component());

if (module.hot) {
    module.hot.accept()
}