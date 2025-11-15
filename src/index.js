import React, {useState}  from "react";
import ReactDom from "react-dom/client";
import "./index.css";

//Component is just a JavaScript Function
//Component name must start with a capital letter
//Since Hook, function component is the standard.
//function must return.

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() { //App is the parent, MyComponent is the child
    //Return a JSK = (JavaScript XML)
    //declarative
    const[fav,setFav] = useState([]);

     const toggleFavourite = (pizzaName) => {
      setFav((prev) =>
      prev.includes(pizzaName)
        ? prev.filter((name) => name !== pizzaName)
        : [...prev, pizzaName]
    );
  };

    

    return(
    <div className="container" style={{fontFamily: "Courier New semibold"}}>
  <Header />
  <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start"}}>
    <Menu fav={fav} toggleFavourite={toggleFavourite} />
    <Favourite fav={fav} />
  </div>
  <Footer />
</div>);
}
function Header() {
    return (
    <h1 style= {{ color: "#f52f57", fontSize: "48px", textTransform: "uppercase", fontFamily: "Courier New"}}>Lin Pin Yan's Pizza Co.</h1>
    );
}



function Pizza(props){ 
    //follow naming convention
    //props is a JS object which is {image, name, ingredent, price}
    return (
    <div className="pizza" style ={{color: "#a20021", textAlign: "center"}}>
    <img src={props.image} alt={props.name} style={{border: ""}}></img>
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <p>${props.price}</p>
    <p>{props.soldOut ? "Sold Out" : "Available"}</p>
    
    <button onClick={() => props.ontoggle(props.name)} style = {{backgroundColor: "#ff849cff", fontFamily: "Courier New bold", color:"#a20021", borderColor: "#a20021", }}>
      {props.isFavourite ? "Favourite" : "Add to favourite"}
    </button>
    
    </div>
    );
}

function Menu({fav, toggleFavourite}){
    const hour = new Date().getHours();
    return(
        <div className="menu" style ={{color: "#a20021"}}>
        <h2>Our Menu</h2>
        <p>{hour >= 10 && hour < 22 ? "Aunthentic Italian Cuisine.":" "}</p>
        {pizzaData.map(pizza => (
            <Pizza 
            name={pizza.name}
            ingredients={pizza.ingredients}
            image={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut} 
            isFavourite = {fav.includes(pizza.name)}
            ontoggle = {toggleFavourite}/>
        ))}
        </div>
    );
}

function Order(){
  const hour = new Date().getHours();
  return(
    <div className="order" style={{color: "#a20021", fontFamily: "Courier New", fontSize: 25}}
    >
      <h4>
        {hour >= 10 && hour < 22 ? "We're currently open." :"Sorry we're closed"}
        <br></br>
        <br></br>
        <br></br>
        {hour >= 10 && hour < 22 ? 
        (<button className= "btn" 
          style={{fontFamily: "Courier New bold",
              backgroundColor: "#f0768eff",
              padding: "1.4rem 3.2rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1.4rem",
              margin: "0 auto",
              display: "block",}}>
          Order</button>) : " "}
      </h4>
    </div>
  )
}

function Footer(){
    const hour = new Date().getHours();
    return(
        <div>
        <footer className="footer">
            <Order/>
        </footer>

        
        </div>
    

    );
}


function Favourite({fav}){
  if (fav.length === 0) return null;
  return(
    <div style = {{fontFamily:"Courier New semibold" ,color: "#a20021",flex: 1, backgroundColor: "#ff849cff", padding: "1rem", borderRadius: "8px", maxWidth: "300px", position: "sticky", top: "3rem",}}>
      <h2>Your Favourites</h2>
      <ul>
        {fav.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);