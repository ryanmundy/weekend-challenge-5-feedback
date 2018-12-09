import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {
    submitFeedback = () => {
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
        axios.post('/feedback', objectToSend)
            .then(res => {
                console.log('back from server with', res.data);

            }).catch(err => {
                console.log('error in post:', err);
            })
    }
// }//end else
    
    render() {
        let submitButton;
        if (this.props.reduxStore.stepFourReducer.completed === true &&
             this.props.reduxStore.stepThreeReducer.completed === true &&
             this.props.reduxStore.stepTwoReducer.completed === true &&
             this.props.reduxStore.stepOneReducer.completed === true){
            submitButton = <button onClick={this.submitFeedback}>Submit Feedback</button>
        }

        return (
            <div>
                <h2>Your Feedback</h2>
                <ul>
                    <li>Feelings: {this.props.reduxStore.stepOneReducer.feeling}</li>
                    <li>Understanding: {this.props.reduxStore.stepTwoReducer.understanding}</li>
                    <li>Support: {this.props.reduxStore.stepThreeReducer.support}</li>
                    <li>Comments: {this.props.reduxStore.stepFourReducer.comments}</li>
                </ul>
                {submitButton}
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