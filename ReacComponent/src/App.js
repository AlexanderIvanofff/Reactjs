import { hot } from "react-hot-loader";
import React from "react";
import "./App.less";
import { observer } from "mobx-react";
import { observable } from "mobx";
import restaurant from "./restaurant.jpg";


function Header (props) {
    return (
        <header>
            <h1>{props.currentName} Kitchen</h1>
        </header>
    )
}

function Footer (props) {
    return (
        <footer>
            <p>Copyright {props.name}</p>
        </footer>
    )
}

function Main (props) {
    return (
        <section>
            <img src={restaurant} alt="Restaurant"/>
            <p>We serve the most {props.ajective} food around.</p>
            <ul>
                {props.dishes.map((dish)=> <li key={dish.id}>{dish.title}</li>)}
            </ul>
        </section>
    )
}

const dishes = [
    "Macaroni and Cheese",
    "Salomon",
    "Tofu with Vegetables"
]

const dishObjects = dishes.map((dish, i)=>({id:i, title: dish}))

@observer
class App extends React.Component {
    @observable tree = "sex";
    render() {
        return (
            <div className="App">
                <Header currentName={"Alex"} />
                <Main ajective="delicious" dishes={dishObjects}/>
                <Footer name={new Date().getFullYear()} />
            </div>
        );
    }
}

export default hot(module)(App);
