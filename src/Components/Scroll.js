import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflow:'scroll',border:'1px solid black',height:'800px',margin:7,borderColor:'#0ccac4',marginTop:9 }}>
        {props.children}
        </div>
    )
}
export default Scroll;