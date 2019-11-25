import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './FirstPage.css';
import 'bootstrap/dist/css/bootstrap.css';



//Functional comonent
// const FirstPage = () =>{

//     return (
//     <div className="MainDiv">
//         <img src="https://joeschmoe.io/api/v1/Aadesh" alt="Avatar" />
//         <h1>Smart-Ration Card</h1>
//         <input type="text" className="data" placeholder="Enter Ration Card Number" />
//         <button type="submit"></button>
//         </div>
//     )}



//classfull component
class FirstPage extends Component{

    show(){
        let x=document.getElementById("data").value;
        console.log(x);

    }
    render(){
        return <div className="MainDiv">
        <img src="https://joeschmoe.io/api/v1/Aadesh" alt="Avatar" />
        <h1 className="text-center">Smart-Ration Card</h1>
        <input type="text" className="data" id="data" placeholder="Enter Ration Card Number" />
        <button type="submit" className="button" onClick={()=> this.show()}>submit</button>
        </div>
    }
}

export default FirstPage;

