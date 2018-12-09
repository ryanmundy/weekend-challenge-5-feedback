import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Button from '@material-ui/core/Button';
import { Forward } from '@material-ui/icons';
import './StepTwo.css';

class StepTwo extends Component {
    //declares initial local state
    state = {
        understanding: 0,
        completed: false
    }

    handleUnderstandingChange = (event) => {
        console.log('in understanding');
        //sets state after user inputs data, toggles completed to true
        this.setState({
            understanding: event.target.value,
            completed: true
        });
    }

    handleClick = () => {
        //checks if user has input data
        if (this.state.completed === false) {
            alert('please complete understanding section')
        } else {
            //sends current state to redux and switches to next page
            this.props.dispatch({ type: "ADD_UNDERSTANDING", payload: this.state })
            this.props.history.push('/3');
        }

    }

    render() {
        return (
            //shows current category/input/progress/button
            <div>
                <h2>2 of 4 Pages</h2>
                <h2>How well are you understanding the content?</h2>
                <input type="number" placeholder="0" onChange={this.handleUnderstandingChange}></input>
                <Button id="button" variant="contained" color="primary" onClick={this.handleClick}>Next <Forward /></Button>
                <br />
                <Review />
            </div>

        );
    }
}

export default connect()(StepTwo);