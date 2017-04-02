import React from 'react';
import {increase, decrease} from '../actions/count';
import {connect} from 'react-redux'

class Count extends React.Component {
    render() {
        console.log(this);
        return (
            <div>
                <div>
                    Current number is {this.props.number}
                </div>
                <div>
                    <button onClick={() => {this.props.increase(1)}}>增加</button>
                    <button onClick={() => {this.props.decrease(1)}}>减少</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        number: state.count.number
    }),
    {
        increase,
        decrease
    }
)(Count);
