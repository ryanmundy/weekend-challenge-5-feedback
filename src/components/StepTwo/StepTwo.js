import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class StepTwo extends Component {
    state = {
        understanding: 0,
        completed: false
    }

    handleUnderstandingChange = (event) => {
        console.log('in understanding');
        this.setState({
            understanding: event.target.value,
            completed: true
        });
    }

    handleClick = () => {
        if (this.state.completed === false) {
            alert('please complete understanding section')
        } else {
            this.props.dispatch({ type: "ADD_UNDERSTANDING", payload: this.state })
            this.props.history.push('/3');
        }
        
    }

    render() {
        return (
            <div>
                <h2>2 of 4 Pages</h2>
                <h2>How well are you understanding the content?</h2>
                <input type="number" placeholder="0" onChange={this.handleUnderstandingChange}></input>
                <button onClick={this.handleClick}>Next</button>
                <br/>
                <Review/>
            </div>

        );
    }
}

export default connect()(StepTwo);