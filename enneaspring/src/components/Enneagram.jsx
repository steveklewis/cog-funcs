import React from 'react';
import {useSpring, animated} from 'react-spring'


const Enneagram = () => {

const props = useSpring({stroke: "white", from: {stroke: "blue"}, delay: '2000'});

return <animated.svg xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" width="300" height="300" stroke={props.stroke}>

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
<text x="77.1345131623847" y="-91.9253331742774" font-size="18pt" text-anchor="middle" font-family="serif">1</text>
<text x="118.176930361465" y="-20.8377813200316" font-size="18pt" text-anchor="middle" font-family="serif">2</text>
<text x="103.923048454133" y="60" font-size="18pt" text-anchor="middle" font-family="serif">3</text>
<text x="41.0424171990803" y="112.763114494309" font-size="18pt" text-anchor="middle" font-family="serif">4</text>
<text x="-41.0424171990803" y="112.763114494309" font-size="18pt" text-anchor="middle" font-family="serif">5</text>
<text x="-103.923048454133" y="60" font-size="18pt" text-anchor="middle" font-family="serif">6</text>
<text x="-118.176930361465" y="-20.8377813200316" font-size="18pt" text-anchor="middle" font-family="serif">7</text>
<text x="-77.1345131623847" y="-91.9253331742774" font-size="18pt" text-anchor="middle" font-family="serif">8</text>
<text x="0" y="-120" font-size="18pt" text-anchor="middle" font-family="serif">9</text>
</g>



<circle cx="0" cy="0" r="100" fill="none" stroke-width="1" />
</g>

</animated.svg>
};

export default Enneagram;
