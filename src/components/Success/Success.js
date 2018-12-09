import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Success extends Component {

state = {}

newFeedback = () => {
    this.props.history.push('/');
}
    render() {
        return (
            <div>
               <h2>Success!</h2>
               <h3>Thank you for completing your feedback!</h3>
               <h3>Please click "submit" to confirm your feedback</h3>
                <br />
                <Review />
               <button onClick={this.newFeedback}>Leave New Feedback</button>
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