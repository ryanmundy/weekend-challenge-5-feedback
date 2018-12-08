import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class StepFour extends Component {
    state = {
        comments: ''
    }

    handleCommentsChange = (event) => {
        console.log('in support');
        this.setState({
            comments: event.target.value
        });
    }

    handleClick = () => {
        this.props.dispatch({ type: "ADD_COMMENTS", payload: this.state })
        // this.props.history.push('/');
    }

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

    render() {
        return (
            <div>
                <h2>4 of 4 Pages</h2>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="comments" onChange={this.handleCommentsChange}></input>
                <button onClick={this.handleClick}>Next</button>
                <button onClick={this.submitFeedback}>Submit Feedback</button>
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