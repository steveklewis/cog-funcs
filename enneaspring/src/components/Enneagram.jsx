import React from 'react';
import {useSpring, animated } from 'react-spring'


const Enneagram = (props) => {
const colorProps = useSpring({stroke: "white", from: {stroke: "blue"}, delay: '2000'});

let oneText = props.angerActive ? '1 - Over-controls Anger' : '8';
const oneProps = useSpring({
    x: !props.angerActive ? "77.1345131623847" : "330",
    y: !props.angerActive ? "-91.9253331742774" : "-90",
    fontSize: props.angerActive ? "30pt": "18pt"
});


const twoProps = useSpring({
    x: !props.shameActive ? "118.176930361465" : "150",
    fontSize: props.shameActive ? "30pt": "18pt"
});

const threeProps = useSpring({
    x: !props.shameActive ? "103.923048454133" : "90.1345131623847",
    fontSize: props.shameActive ? "30pt": "18pt"
});

const fourProps = useSpring({
    x: !props.shameActive ? "41.0424171990803" : "90.1345131623847",
    fontSize: props.shameActive ? "30pt": "18pt"
});

let eightText = props.angerActive ? '8 - Over-expresses Anger' : '8';

const eightProps = useSpring({
    x: !props.angerActive ? "-77.1345131623847" : "345",
    y: !props.angerActive ? "-91.9253331742774" : "-40",
    fontSize: props.angerActive ? "30pt": "18pt"
});

let nineText = props.angerActive ? '9 - Avoids Anger' : '9';

const nineProps = useSpring({
    x: !props.angerActive ? "0" : "280",
    y: !props.angerActive ? "-120" : "10",
    fontSize: props.angerActive ? "30pt": "18pt",
    message: props.angerActive ? "9 - Avoids Anger" : "9"
});


return <animated.svg xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" width="700" height="300" stroke={colorProps.stroke}>

<title>Enneagram</title>
<p class="whitetext"> {props.explain}</p>


<g transform="translate(150,150)">

	<polyline fill="none"stroke-width="1" points="
0, -100
-86.6025404, 50
86.6025404, 50
0, -100
	" />

	<polyline fill="none" stroke-width="1" points="
-64.278761, -76.6044443
-34.2020143,93.9692621
-98.4807753, -17.3648178
64.278761, -76.6044443
34.2020143,93.9692621
98.4807753, -17.3648178
-64.278761, -76.6044443
" />



<g transform="translate(0,9)">
<animated.text x={oneProps.x} y={oneProps.y} font-size={oneProps.fontSize} text-anchor="middle" font-family="serif">{oneText}</animated.text>
<animated.text x={twoProps.x} y="-20.8377813200316" font-size={twoProps.fontSize} text-anchor="middle" font-family="serif">2</animated.text>
<animated.text x={threeProps.x} y="60" font-size={threeProps.fontSize} text-anchor="middle" font-family="serif">3</animated.text>
<animated.text x={fourProps.x} y="112.763114494309" font-size={fourProps.fontSize} text-anchor="middle" font-family="serif">4</animated.text>
<text x="-41.0424171990803" y="112.763114494309" font-size="18pt" text-anchor="middle" font-family="serif">5</text>
<text x="-103.923048454133" y="60" font-size="18pt" text-anchor="middle" font-family="serif">6</text>
<text x="-118.176930361465" y="-20.8377813200316" font-size="18pt" text-anchor="middle" font-family="serif">7</text>
<animated.text x={eightProps.x} y={eightProps.y} font-size={eightProps.fontSize} text-anchor="middle" font-family="serif">{eightText}</animated.text>
<animated.text x={nineProps.x} y={nineProps.y} font-size={nineProps.fontSize} text-anchor="middle" font-family="serif">{nineText}</animated.text>
</g>



<circle cx="0" cy="0" r="100" fill="none" stroke-width="1" />
</g>

</animated.svg>
};

export default Enneagram;
