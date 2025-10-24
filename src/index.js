import React from "react";
import ReactDom from "react-dom/client";

//Component is just a JavaScript Function
//Component name must start with a capital letter
//Since Hook, function component is the standard.
//function must return.

function App() { //App is the parent, MyComponent is the child
    //Return a JSK = (JavaScript XML)
    //declarative

    return(
    <>
        <Header/>
        <Pizza/>
    </>);
}
function Header() {
    return <h1>Lin Pin Yan's Pizza Co.</h1>
}
function Pizza(){ 
    //follow naming convention
    return (
    <>
    <img src="pizzas/spinaci.jpg"></img>
    <h2>Spinach Pizza</h2>
    <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    <div></div>
    <p>10</p>
    </>
    );
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);