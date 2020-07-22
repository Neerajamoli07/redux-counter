import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncreamentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecreamentCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                       <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                   
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
     ctr: state.ctr.counter,
     storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
       onIncreamentCounter: () => dispatch(actionCreators.increment()),
       onDecreamentCounter: () => dispatch(actionCreators.decrement()),
       onAddCounter: () => dispatch(actionCreators.add(10)),
       onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
       onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
       onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
}

//pass argument null if not needed state in below connect method accordingly
export default connect(mapStateToProps,mapDispatchToProps)(Counter);