import React from 'react';
import {render} from 'react-dom';
import App from './client/core/App';

import brands from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faUserPlus from '@fortawesome/fontawesome-free-solid/faUserPlus';

fontawesome.library.add(brands, faBars, faUserPlus);

render(<App />, document.getElementById('main'));