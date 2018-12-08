import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class StepTwo extends Component {
    state = {
        understanding: 0
    }

    handleUnderstandingChange = (event) => {
        console.log('in feelingChange');
        this.setState({
            understanding: event.target.value
        });
    }

    handleClick = () => {
        this.props.dispatch({ type: "ADD_UNDERSTANDING", payload: this.state })
        // this.props.history.push('/2');
    }

    render() {
        return (
            <div>
                <h2>2 of 4 Pages</h2>
                <h2>How well are you understanding the content?</h2>
                <input type="number" placeholder="0" onChange={this.handleUnderstandingChange}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>

        );
    }
}

export default connect()(StepTwo);