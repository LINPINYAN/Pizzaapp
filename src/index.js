import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

//Component is just a JavaScript Function
//Component name must start with a capital letter
//Since Hook, function component is the standard.
//function must return.

function App() { //App is the parent, MyComponent is the child
    //Return a JSK = (JavaScript XML)
    //declarative

    return(
    <div className="container">
        <Header />
        <Menu/>
        <Footer />
    </div>);
}
function Header() {
    return (
    <h1 style= {{ color: "orange", fontSize: "48px", textTransform: "uppercase"}}>Lin Pin Yan's Pizza Co.</h1>
    );
}
function Pizza(props){ 
    //follow naming convention
    //props is a JS object which is {image, name, ingredent, price}
    return (
    <div>
    <img src={props.image} alt={props.aka}></img>
    <h2>{props.name}</h2>
    <p>{props.ingredent}</p>
    <p>{props.price}</p>
    </div>
    );
}

function Menu(){
    return(
        <div className="menu">
        <h2>Our Menu</h2>
        <Pizza image="pizzas/spinaci.jpg" aka="Spinaci" name="Spinach Pizza" ingredent="Tomato, mozarella, spinach, and ricotta cheese" price={10}/>
        <Pizza image="pizzas/spinaci.jpg" aka="Spinaci" name="Spinach Pizza" ingredent="Tomato, mozarella, spinach, and ricotta cheese" price={10}/>
        </div>
    );
}

function Footer(){
    const hour = new Date().getHours();
    return(
        
        <footer className="footer">
            {hour >= 10 && hour < 22 ? "We're currently open.":"Sorry we're closed"}
        </footer>
    );
}




const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);