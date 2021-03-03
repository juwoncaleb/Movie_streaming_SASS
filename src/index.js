import React from 'react';
import {render} from 'react-dom';
import 'normalize.css' 
import App from './app';
import Globalstyles from "../src/global-styles";


render(
<>
<App /> , <Globalstyles/>

</>,document.getElementById('root')
);

