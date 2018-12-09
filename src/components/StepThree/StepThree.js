import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Button from '@material-ui/core/Button';
import { Forward } from '@material-ui/icons';
import './StepThree.css';

class StepThree extends Component {
    state = {
        support: 0,
        completed: false
    }

    handleSupportChange = (event) => {
        console.log('in support');
        this.setState({
            support: event.target.value,
            completed: true
        });
    }

    handleClick = () => {
        if (this.state.completed === false) {
            alert('please complete support section')
        } else {
            this.props.dispatch({ type: "ADD_SUPPORT", payload: this.state })
            this.props.history.push('/4');
        }
        
    }

    render() {
        return (
            <div>
                <h2>3 of 4 Pages</h2>
                <h2>How well are you being supported?</h2>
                <input type="number" placeholder="0" onChange={this.handleSupportChange}></input>
                <Button id="button" variant="contained" color="primary" onClick={this.handleClick}>Next <Forward/></Button>
                <br/>
                <Review/>
            </div>

        );
    }
}

export default connect()(StepThree);