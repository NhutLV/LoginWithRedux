/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'
import {connect} from 'react-redux'

import Login from './src/app/components/login/Login'
import Home from './src/app/components/login/Home'

type Props = {};
class App extends Component<Props> {
    render() {
        if (this.props.isLogin) {
            return (<Home/>)
        } else {
            return (<Login/>)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.reducer.isLogin
    }
};

export default connect(mapStateToProps)(App)
