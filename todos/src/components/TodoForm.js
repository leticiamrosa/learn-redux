import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

import Input from './Input';

class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: '',
        }
    }

    // define o valor do estado do input
    onChangeText(text) {
        this.setState({
            text
        });
    }

    // Pegar o valor do input
    onPress(){
        // chama a funcao dispatch e o state;
        this.props.dispatchAddTodo(this.state.text);
        // Limpar formulario
        this.setState({text: ''});
        // console.log(this.props.dispatchAddTodo(text))
    }

    
    render() {
        const { text } = this.state;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={(text) => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Adicionar'
                        onPress={() => this.onPress()}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 2,
        marginTop: 32,
    }
});

const mapDispatchToProps = {
    dispatchAddTodo: addTodo
}

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }

// currying
// export default connect(null, mapDispatchToProps)(TodoForm);
export default connect(null, mapDispatchToProps)(TodoForm);