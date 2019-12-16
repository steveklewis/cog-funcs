import React from 'react';
import {useSpring, animated } from 'react-spring'


const Enneagram = (props) => {

debugger;
let oneText = props.angerActive ? '1 - Over-controls Anger' : '1';

if (props.oneActive) {
  oneText = '1 - Expresses anger as perfectionism.';
}
const oneProps = useSpring({
    x: (props.angerActive || props.oneActive) ? "330": "77.1345131623847",
    y: (props.angerActive || props.oneActive) ? "-90" : "-91.9253331742774",
    fontSize: props.angerActive ? "30pt": "18pt"
});

let twoText = props.shameActive ? '2 - Over-controls Shame': '2';
if (props.twoActive) {
    twoText = '2 - Expresses shame as people-pleasing.';
}
const twoProps = useSpring({
    x: (props.shameActive || props.twoActive) ? "330" : "118.176930361465",
    y: (props.shameActive || props.twoActive) ? "-90" : "-20.8377813200316",
    fontSize: props.shameActive ? "30pt": "18pt"
});

let threeText = props.shameActive ? '3 - Avoids Shame': '3';
let threeY = (props.shameActive || props.threeActive) ? "-40" : "60";
let threeX = (props.shameActive || props.threeActive) ? "275" : "103.923048454133";
if (props.threeActive) {
    threeText = '3 - Expresses shame as workaholism.';
    threeY = "-90";
    threeX = "330";
}
const threeProps = useSpring({
    x: threeX,
    y: threeY,
    fontSize: props.shameActive ? "30pt": "18pt"
});


let fourText = props.shameActive ? '4 - Over-expresses shame': '4';
let fourX = (props.shameActive || props.fourActive) ? "339" : "41.0424171990803";
let fourY = (props.shameActive || props.fourActive) ? "10": "112.763114494309";
if (props.fourActive) {
    fourText = '4 - Expresses shame as identity crisis.';
    fourY = "-90";
    fourX = "330";
}
const fourProps = useSpring({
    x: fourX,
    y: fourY,
    fontSize: props.shameActive ? "30pt": "18pt"
});


let fiveText = props.fearActive ? '5 - Over-expresses fear': '5';
let fiveX = (props.fearActive || props.fiveActive) ? "339" : "-41.0424171990803";
let fiveY = (props.fearActive || props.fiveActive) ? "-90" : "112.763114494309";

if (props.fiveActive) {
    fiveText = '5 - Expresses fear as useless knowledge.';
    fiveY = "-90";
    fiveX = "330";
}
const fiveProps = useSpring({
    x: fiveX,
    y: fiveY,
    fontSize: props.fearActive ? "30pt": "18pt"
});

let sixText = props.fearActive ? '6 - Over-controls fear': '6';
let sixX = props.fearActive ? "327" : "-103.923048454133";
let sixY = props.fearActive ? "-40" : "60";
if (props.sixActive) {
    sixText = '6 - Expresses fear as criticism.';
    sixY = "-90";
    sixX = "330";
}
const sixProps = useSpring({
    x: sixX,
    y: sixY,
    fontSize: props.fearActive ? "30pt": "18pt"
});



let sevenText = props.fearActive ? '7 - Avoids fear': '7';
let sevenX = !props.fearActive ? "-118.176930361465" : "153";
let sevenY = !props.fearActive ? "-20.8377813200316" : "10";
if (props.sevenActive) {
    sevenText = '7 - Expresses fear as distraction.';
    sevenY = "-90";
    sevenX = "170";
}
const sevenProps = useSpring({
    x: sevenX,
    y: sevenY,
    fontSize: props.fearActive ? "30pt": "18pt"
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
    fontSize: props.angerActive ? "30pt": "18pt"
});

function hoverOne() {
  props.setExplanation("Ones need to re-connect to their fear and move to Seven to get a healthier connection to who they are, without needless comparison to an ideal..");
  hoverNone();
  props.toggleOne(true);
}

function hoverTwo() {
  props.setExplanation("Twos need to redirect their shame and move to Four to get a healthier connection to who they are, apart from everyone else.");
  hoverNone();
  props.toggleTwo(true);
}

function hoverThree() {
  props.setExplanation("Threes need to re-connect to their fear and move to Six to get a healthier connection to who they are, apart from what they've accomplished.");
  hoverNone();
  props.toggleThree(true);
}

function hoverFour() {
  hoverNone();
  props.toggleFour(true);
}

function hoverFive() {
  hoverNone();
  props.toggleFive(true);
}

function hoverSix() {
  hoverNone();
  props.toggleSix(true);
}

function hoverSeven() {
  hoverNone();
  props.toggleSeven(true);
}

function hoverNone() {
  props.toggleOne(false);
  props.toggleTwo(false);
  props.toggleThree(false);
  props.toggleFour(false);
  props.toggleFive(false);
  props.toggleSix(false);
  props.toggleSeven(false);
  props.toggleFear(false);
  props.toggleShame(false);
  props.toggleAnger(false);
}

let contentMap = {
  color: 'white'
};


return (<animated.svg xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" width="700" height="300" stroke="white">

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
<animated.text x={oneProps.x} y={oneProps.y} font-size={oneProps.fontSize} text-anchor="middle" font-family="serif" onMouseEnter={hoverOne}>{oneText}</animated.text>
<animated.text x={twoProps.x} y={twoProps.y} font-size={twoProps.fontSize} text-anchor="middle" font-family="serif" onMouseEnter={hoverTwo}>{twoText}</animated.text>
<animated.text x={threeProps.x} y={threeProps.y} font-size={threeProps.fontSize} text-anchor="middle" font-family="serif" onMouseEnter={hoverThree}>{threeText}</animated.text>
<animated.text x={fourProps.x} y={fourProps.y} font-size={fourProps.fontSize} text-anchor="middle" font-family="serif" onMouseEnter={hoverFour}>{fourText}</animated.text>
<animated.text x={fiveProps.x} y={fiveProps.y} font-size={fiveProps.fontSize} text-anchor="middle" font-family="serif" onMouseEnter={hoverFive}>{fiveText}</animated.text>
<animated.text x={sixProps.x} y={sixProps.y} font-size={sixProps.fontSize} text-anchor="middle" font-family="serif" onMouseEnter={hoverSix}>{sixText}</animated.text>
<animated.text x={sevenProps.x} y={sevenProps.y} font-size={sevenProps.fontSize} text-anchor="left" font-family="serif" onMouseEnter={hoverSeven}>{sevenText}</animated.text>
<animated.text x={eightProps.x} y={eightProps.y} font-size={eightProps.fontSize} text-anchor="middle" font-family="serif">{eightText}</animated.text>
<animated.text x={nineProps.x} y={nineProps.y} font-size={nineProps.fontSize} text-anchor="middle" font-family="serif">{nineText}</animated.text>
</g>



<circle cx="0" cy="0" r="100" fill="none" stroke-width="1" />
</g>

<p style={contentMap}>helloOne</p>
</animated.svg>
)};

export default Enneagram;
