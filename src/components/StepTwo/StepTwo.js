import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Button from '@material-ui/core/Button';
import { Forward } from '@material-ui/icons';

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
                <Button variant="contained" color="primary" onClick={this.handleClick}>Next <Forward/></Button>
                <br/>
                <Review/>
            </div>

        );
    }
}

export default connect()(StepTwo);