import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class StepFour extends Component {
    state = {
        comments: '',
        completed: false
    }

    handleCommentsChange = (event) => {
        console.log('in support');
        this.setState({
            comments: event.target.value,
            completed: true
        });
    }

    handleClick = () => {
        if(this.state.completed===false){
            alert('please complete comments section')
        }else{
        this.props.dispatch({ type: "ADD_COMMENTS", payload: this.state })
        this.props.history.push('/5');
        }
    }

    render() {
        return (
            <div>
                <h2>4 of 4 Pages</h2>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="comments" onChange={this.handleCommentsChange}></input>
                <button onClick={this.handleClick}>Next</button>
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