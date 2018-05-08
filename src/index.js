import React from 'react';
import {render} from 'react-dom';
import App from './client/core/App';

import brands from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(brands);

render(<App />, document.getElementById('main'));