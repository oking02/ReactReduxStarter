/**
 * Created by ollyking on 18/04/2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTest } from './actions';

class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state= {
            testValue: ''
        }
    }
    
    handleChange = (evt) => {
        
        this.setState({testValue : evt.target.value})
        
    };
    
    handleClick = (evt) => {
        
        evt.preventDefault();
        
        this.props.changeTest(this.state.testValue);
    };

    render() {

        return (
            <div>
                <h4>{this.props.test}</h4>
                <input onChange={this.handleChange} type="text" />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )

    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeTest }, dispatch);
}

function mapStateToProps({
    test : test,
}) {
    return {
        test : test
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);