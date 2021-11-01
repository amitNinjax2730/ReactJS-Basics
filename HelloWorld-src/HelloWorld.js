import React from "react";

function HelloWorld(){
    const message="Hello World"
    return(
        <div>
            <Lable text={message} />
        </div>
    )
}


const Lable = (props) =>{
 return <h1>{props.text}</h1>
};

export default HelloWorld;