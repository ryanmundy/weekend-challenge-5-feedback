import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import { Edit } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import './Success.css';

class Success extends Component {

    state = {}
    //resets data in redux and allows user to input new feedback
    newFeedback = () => {
        this.setState({
            feeling: '',
            understanding: '',
            support: '',
            comments: '',
            completed: false
        })
        this.props.dispatch({ type: "CLEAR_DATA", payload: this.state })
        //switch back to first page
        this.props.history.push('/');
    }
    render() {
        return (
            //gives instructions to user and adds new feedback button
            <div>
                <h2>Please click "save" to submit your feedback</h2>
                <br />
                <Review />
                <Button id="newFeedback" variant="outlined" color="primary" onClick={this.newFeedback}>Leave New Feedback <Edit /></Button>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => {
    return ({
        reduxStore
    })
}


export default connect(mapStateToProps)(Success);