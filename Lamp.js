import styled from "styled-components";
import React from "react";
import { props } from "bluebird";

const Wrapper = styled.div`
position: absolute;
left: ${props => (props.position === 'left' ? '20px' : '380px')};
top: 20px;
background: ${props => (props.lampOff ? 'red' : 'gray')};
height: 100px;
width: 100px;
border-radius: 50%
`;

const Lamp = (props) => (
    <Wrapper lampOff = {props.lampOn} position = {props.position}>
        <div/>
    </Wrapper>

);

export default Lamp;

// import React from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   position: absolute;
//   left: ${props => (props.position === 'left' ? '20px' : '380px')};
//   top: 20px;
//   background: ${props => (props.lampOn ? 'orange' : 'lightgrey')};
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
// `;

// const Lamp = ({ lampOn, position }) => (
//   <Wrapper lampOn={lampOn} position={position}>
//     <div />
//   </Wrapper>
// );

// export default Lamp;