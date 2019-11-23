import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FirstPage extends Component{
    render(){
        return <div class="MainDIv">
        <h1>Hello {this.props.name}</h1>
        <p>Welcome to junglebell </p>
        </div>
    }
}

export default FirstPage;

