import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class StepFour extends Component {
    state = {
        comments: ''
    }

    handleCommentsChange = (event) => {
        console.log('in support');
        this.setState({
            comments: event.target.value
        });
    }

    handleClick = () => {
        this.props.dispatch({ type: "ADD_COMMENTS", payload: this.state })
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>4 of 4 Pages</h2>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="comments" onChange={this.handleCommentsChange}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>

        );
    }
}

export default connect()(StepFour);