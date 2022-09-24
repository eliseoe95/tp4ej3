import { useState } from "react";

const HelloWorld = (props) => {
    let [claveMje, setclaveMje] = useState('Hello World My Friend')
    return (
        <div>
            <h1 props>Hello World {props.saludar}</h1>
            <h1>{claveMje}</h1>
            <button onClick={()=>setclaveMje('(from changed state)')}>Cambiar Mensaje</button>
            <button onClick={()=>setclaveMje('Hello World My Friend')}>Reestablecer Mensaje</button>
        </div>
    );
};

export default HelloWorld;