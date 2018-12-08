import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {
    
    render() {

        return (
            <div>
                <h2>Your Feedback</h2>
                <ul>
                    <li>Feelings: {this.props.reduxStore.stepOneReducer.feeling}</li>
                    <li>Understanding: {this.props.reduxStore.stepTwoReducer.understanding}</li>
                    <li>Support: {this.props.reduxStore.stepThreeReducer.support}</li>
                    <li>Comments: {this.props.reduxStore.stepFourReducer.comments}</li>
                </ul>
                {/* {displayButton} */}
                {/* <button onClick={this.submitFeedback}>Submit Feedback</button> */}
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