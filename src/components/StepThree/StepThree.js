import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.handleClick}>Next</button>
            </div>

        );
    }
}

export default connect()(StepThree);