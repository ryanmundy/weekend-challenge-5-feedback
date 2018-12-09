import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Save } from '@material-ui/icons';
import './Review.css';

class Review extends Component {

    submitFeedback = () => {
        //sets up object to send to server/db with values held in redux
        const feeling = this.props.reduxStore.stepOneReducer.feeling;
        const understanding = this.props.reduxStore.stepTwoReducer.understanding;
        const support = this.props.reduxStore.stepThreeReducer.support;
        const comments = this.props.reduxStore.stepFourReducer.comments;
        let objectToSend = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }
        console.log(objectToSend);
        //POST request
        axios.post('/feedback', objectToSend)
            .then(res => {
                console.log('back from server with', res.data);
                alert('Feedback successfully submitted!')
            }).catch(err => {
                console.log('error in post:', err);
            })
    }

    render() {
        //conditional render of save button
        //if all sections have been completed, button is active
        let submitButton;
        if (this.props.reduxStore.stepFourReducer.completed === true &&
            this.props.reduxStore.stepThreeReducer.completed === true &&
            this.props.reduxStore.stepTwoReducer.completed === true &&
            this.props.reduxStore.stepOneReducer.completed === true) {
            submitButton = <Button disabled={false} variant="outlined" color="primary" onClick={this.submitFeedback}>Save <Save /></Button>
        } else {
            submitButton = <Button disabled={true} variant="outlined" color="primary" onClick={this.submitFeedback}>Save <Save /></Button>
        }

        return (
            //current feedback that is displayed on the DOM
            <div id="feedback">
                {submitButton}
                <h2>Your Feedback</h2>
                <p>Feelings: {this.props.reduxStore.stepOneReducer.feeling}</p>
                <p>Understanding: {this.props.reduxStore.stepTwoReducer.understanding}</p>
                <p>Support: {this.props.reduxStore.stepThreeReducer.support}</p>
                <p>Comments: {this.props.reduxStore.stepFourReducer.comments}</p>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => {
    return ({
        reduxStore
    })
}

export default connect(mapStateToProps)(Review);