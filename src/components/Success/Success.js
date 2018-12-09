import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import {  Edit } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

class Success extends Component {

state = {}

newFeedback = () => {
    this.setState({
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
        completed: false
    })
    this.props.dispatch({ type: "CLEAR_DATA", payload: this.state })
    this.props.history.push('/');
}
    render() {
        return (
            <div>
               <h2>Success!</h2>
               <h3>Thank you for completing your feedback!</h3>
               <h3>Please click "save" to confirm your feedback</h3>
                <br />
                <Review />
                <Button variant="outlined" color="primary" onClick={this.newFeedback}>Leave New Feedback <Edit/></Button>
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