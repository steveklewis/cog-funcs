import React from 'react';

import { Spring } from 'react-spring/renderprops';

const counter = () => (
    <Spring
       delay='1000'
       from={{number: 0}}
       to={{number: 10 }}>
       {props => <div>{props.number.toFixed()}</div>}
    </Spring>
)

export default counter;
