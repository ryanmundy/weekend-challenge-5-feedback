import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Button from '@material-ui/core/Button';
import { Forward } from '@material-ui/icons';
import './StepFour.css';

class StepFour extends Component {
    //declares initial local state
    state = {
        comments: '',
        completed: false
    }

    handleCommentsChange = (event) => {
        console.log('in support');
        //sets state after user inputs data, toggles completed to true
        this.setState({
            comments: event.target.value,
            completed: true
        });
    }

    handleClick = () => {
        //checks if user has input data
        if (this.state.completed === false) {
            alert('please complete comments section')
        } else {
            //sends current state to redux and switches to confirmation page
            this.props.dispatch({ type: "ADD_COMMENTS", payload: this.state })
            this.props.history.push('/5');
        }
    }

    render() {
        return (
            //shows current category/input/progress/button
            <div>
                <h2>4 of 4 Pages</h2>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="comments" onChange={this.handleCommentsChange}></input>
                <Button id="button" variant="contained" color="primary" onClick={this.handleClick}>Next <Forward /></Button>
                <br />
                <Review />
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => {
    return ({
        reduxStore
    })
}

export default connect(mapStateToProps)(StepFour);