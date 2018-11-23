import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from '@components/Test';

import '@/assets/css/style.scss';

const render = () => {
    ReactDOM.render(
        <Test/>,
        document.getElementById('app')
    );
}

render();