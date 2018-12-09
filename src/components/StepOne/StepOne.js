import React, { Component } from 'react';
import { connect } from 'react-redux';

class StepOne extends Component {
    state = {
        feeling: 0,
        completed: false
        }
    
        handleFeelingChange = (event) => {
            console.log('in feelingChange');
            this.setState({
                    feeling: event.target.value,
                    completed: true  
            });
        }

    handleClick = () => {
        if (this.state.completed === false) {
            alert('please complete feelings section')
        } else {
            this.props.dispatch({ type: "ADD_FEELING", payload: this.state })
            this.props.history.push('/2');
        }
        
    }

    render() {
        return (
            <div>
                <h2>1 of 4 Pages</h2>
                <h2>How are you feeling today?</h2>
                <input type="number" placeholder="0" onChange={this.handleFeelingChange}></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
            
        );
    }
}

export default connect()(StepOne);