import React, {Component} from 'react';
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux'
import {login} from "../../redux/action/LoginAction";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    _onChangeTextUsername = (text) => {
        this.setState({
            username: text
        })
    };

    _onChangeTextPassword = (text) => {
        this.setState({
            password: text
        })
    };

    _onLogin = () => {
        console.log(`Username: ` + this.state.username + ` - Password: ` + this.state.password);
        this.props.onLogIn(this.state.username, this.state.password);
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={'Username'}
                    onChangeText={this._onChangeTextUsername}
                    value={this.state.username}
                />
                <TextInput
                    placeholder={'Password'}
                    onChangeText={this._onChangeTextPassword}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <Button
                    title={'Login'}
                    onPress={this._onLogin}
                />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.reducer.isLogin
}
};

const mapDispatchToProps = (dispatch, [ownProps]) => {
    return {
        onLogIn: (username, password) => {
            dispatch(login(username, password))
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)


