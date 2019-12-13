import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';
// import { validarToken } from '../../servicios/generales/login'
// import alertas from '../general/componentes/alertas';

class authLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {

    this.props.navigation.navigate('usuario');
    // const userToken = await AsyncStorage.getItem('token');
    // const User = await AsyncStorage.getItem('usuario');
    // const userParseado = JSON.parse(User)
    // if (userToken) {
    //   const validar_Token = await validarToken(userParseado.session_token);
    //   if (validar_Token.data) {
    //     if (userParseado.role_id === 1) {
    //       this.props.navigation.navigate('superAdmin');
    //     }
    //     else if (userParseado.role_id === 2) {
    //       this.props.navigation.navigate('admin');
    //     }
    //     else if (userParseado.role_id === 3) {
    //       this.props.navigation.navigate('usuario');
    //     }
    //     else {
    //       await AsyncStorage.clear()
    //       this.props.navigation.navigate('Login');
    //     }
    //   } else {
    //     await AsyncStorage.clear()
    //     this.props.navigation.navigate('Login');
    //     alertas('Sesión caducada, por favor ingresa nuevamente', '#4caf50')
    //   }

    // } else {
    //   this.props.navigation.navigate('Login');
    // }

  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default authLoading;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})