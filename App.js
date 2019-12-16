import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'


import auth from './src/screens/general/auth'
import detalleCursosVistos from './src/screens/usuario/detalleCursosVistos'
import cursoInteractivo from './src/screens/usuario/cursoInteractivo'



// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./assets/img/logo.png')}
//         style={styles.logoBarra}
//       />
//     );
//   }
// }




const stackTabUsuarioCursos = createStackNavigator({
  busquedaCursosUsuario: {
    screen: cursoInteractivo,
    navigationOptions: {
      //headerTitle: <LogoTitle />,
      headerTransparent: true,
      headerStyle: {
        //backgroundColor: '#9CC6D6',
        elevation: 0,
      },
    }
  }

});


const stackTabUsuarioPerfil = createStackNavigator({
  detalleCursosVistos: {
    screen: detalleCursosVistos,
    navigationOptions: {
      //headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#9CC6D6',
        elevation: 0,
      },
    }
  }

});




const NavegacionUsuario = createBottomTabNavigator({

  busquedaCursosUsuario: {
    screen: stackTabUsuarioCursos,
    navigationOptions: {
      tabBarLabel: 'Cursos',
      tabBarOptions: {
        style: {
          backgroundColor: '#9CC6D6',
        },
        activeTintColor: '#1F3E73',
        inactiveTintColor: 'white',
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="book" size={20} type='font-awesome' color={tintColor} />
      ),

    },
  },

  stackTabUsuarioPerfil: {
    screen: stackTabUsuarioPerfil,
    navigationOptions: {
      tabBarLabel: 'Perfil',
      tabBarOptions: {
        style: {
          backgroundColor: '#9CC6D6',
        },
        activeTintColor: '#1F3E73',
        inactiveTintColor: 'white',
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user-md" size={20} type='font-awesome' color={tintColor} />
      ),
    }
  }
});




const stackprincipalUsuario = createStackNavigator({
  Tabs: {
    screen: NavegacionUsuario,
    navigationOptions: {
      header: null
    }
  },
  // filtroCursos: {
  //     screen: filtroCursos,
  //     navigationOptions: {
  //         headerTitle: <LogoTitle />,
  //         headerStyle: {
  //             backgroundColor: '#343434',
  //             elevation: 0,
  //         },
  //         headerTintColor: '#ff5a06'
  //     }
  // },
  // detalleCurso: {
  //     screen: detalleCurso,
  //     navigationOptions: {
  //         headerTitle: <LogoTitle />,
  //         headerStyle: {
  //             backgroundColor: '#343434',
  //             elevation: 0,
  //         },
  //         headerTintColor: '#ff5a06'

  //     },
  // },
  // videoUsuarios: {
  //     screen: videoUsuarios,
  //     navigationOptions: {
  //         headerTitle: <LogoTitle />,
  //         headerStyle: {
  //             backgroundColor: '#343434',
  //             elevation: 0,
  //         },
  //         headerTintColor: '#ff5a06'

  //     },
  // },
  // quizModulo: {
  //     screen: quizModulo,
  //     navigationOptions: {
  //         headerTitle: <LogoTitle />,
  //         headerStyle: {
  //             backgroundColor: '#343434',
  //             elevation: 0,
  //         },
  //         headerTintColor: '#ff5a06'

  //     },
  // },
  // examenFinal: {
  //     screen: examenFinal,
  //     navigationOptions: {
  //         headerTitle: <LogoTitle />,
  //         headerStyle: {
  //             backgroundColor: '#343434',
  //             elevation: 0,
  //         },
  //         headerTintColor: '#ff5a06'
  //     },
  // },
},
);




const App = createSwitchNavigator({
  auth: {
    screen: auth,
  },
  // Login: {
  //     screen: Login,
  // },
  // superAdmin: {
  //     screen: NavegacionSuperAdmin,
  // },
  // admin: {
  //     screen: NavegacionAdmin,
  // },
  usuario: {
    screen: stackprincipalUsuario,
  }
  // Logout:{
  //     screen: Logout
  // }
});


export default createAppContainer(App)



const styles = StyleSheet.create({
  logoBarra: {
    width: '42%',
    height: '60%',
    marginLeft: '25%',
    resizeMode: 'contain'
  },

});
