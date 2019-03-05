import React from 'react';

function Counters(props){

    return(
<>
<button onClick={props.ball}>Ball</button>
<button onClick={props.strike}>Strike</button>
<button onClick={props.foul}>Foul</button>
<button onClick={props.hit}>Hit</button>
</>
    )
}


export default Counters