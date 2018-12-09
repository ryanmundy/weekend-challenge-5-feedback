import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Button from '@material-ui/core/Button';
import { Forward } from '@material-ui/icons';
import './StepOne.css';

class StepOne extends Component {
    //declares initial local state
    state = {
        feeling: 0,
        completed: false
    }

    handleFeelingChange = (event) => {
        console.log('in feelingChange');
        //sets state after user inputs data, toggles completed to true
        this.setState({
            feeling: event.target.value,
            completed: true
        });
    }

    handleClick = () => {
        //checks if user has input data
        if (this.state.completed === false) {
            alert('please complete feelings section')
        } else {
            //sends current state to redux and switches to next page
            this.props.dispatch({ type: "ADD_FEELING", payload: this.state })
            this.props.history.push('/2');
        }

    }

    render() {
        return (
            //shows current category/input/progress/button
            <div>
                <h2>1 of 4 Pages</h2>
                <h2>How are you feeling today?</h2>
                <input type="number" placeholder="0" onChange={this.handleFeelingChange}></input>
                <Button id="button" variant="contained" color="primary" onClick={this.handleClick}>Next <Forward /></Button>
                <br />
                <Review />
            </div>

        );
    }
}

export default connect()(StepOne);