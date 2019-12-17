import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, Button, Image, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Seccion from './seccion'
import Final from './final'
import { consultaDetalleClasEstudiante } from '../../servicios/usuario'
import Modal from "react-native-modal";

import Data from '../../data/data.json'



let contador = 0;
let imagen = 0
let config = { headers: { Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM0NWU3NmM3YzhkM2VmMjczMDBmYjljOTcwMzQ0ZDZjMDM4NGE5YzZkMzQ5NDNlZDkyZTdiZTlkY2IzNmUxNjYzZGNhM2IxZTI2YTE4NzQxIn0.eyJhdWQiOiIzIiwianRpIjoiYzQ1ZTc2YzdjOGQzZWYyNzMwMGZiOWM5NzAzNDRkNmMwMzg0YTljNmQzNDk0M2VkOTJlN2JlOWRjYjM2ZTE2NjNkY2EzYjFlMjZhMTg3NDEiLCJpYXQiOjE1NzY1MDY3NzksIm5iZiI6MTU3NjUwNjc3OSwiZXhwIjoxNjA4MTI5MTc4LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.INu940_xIR6sYjJiXJGYLDkWnz_xve6w8ZhKVO_5ibpX827iu-sDfMViq9zjCVdLNBCyGM14HjPtD4-ZuHtVzyjiw8eODO5PQfph5FDYFb1qUjelvES9bKpmbmgOfNtnqyHxuUKpNCPQfa1-RWu3yOaNi81ykDJiO3gqCuVZDIdmDqlOxipwzwQOBXzAAR7VzebfCoAXbFwGfVylwgxKnj4HTHtsZlGmA5miQQJtHDAo55iA4Th7sjLw_lU83VlWDRKk9qFRNoJ-8r2hnEnnVWgWp0tFNluecU98z4sbjYEhvYgdSzY0NPlqlhjADhs55Dc2ysXsoxXvajRW8alqGTEhBjGVc42vvX5IwG5GjhWkUrnNwe3xvVgQmh7HslJrZDJXEOph8DRmSVzZVZ3y4VP26vlXkVxn6PYnBHFcJcT0eFzPLwbZLGJG2HByBP_xRlWf3y2fviCOzQCqzme7sDm5qOsgXPfKJMCbqnxJd8Jy3IxhQYhgm2sTxU49nP1oscDRSvrtDvxvwbfBFgw_hGJRFIGveEUj_ur6SoES0Y9RI_0wu8-jYRaLdpREtRnVwMP5tHkAj-fshGZiz2z8kDmv6-brhBUssRZhCwNroCeox1Deg2UMKmsXq3epYzSv1uFRyuF7yx-opAdehm4y7E1KTxkTdlAI44IU673mnMw' } }
class cursoInteractivo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitudCurso: '',
            modulos: [],
            isModalVisibleVideoPdf: false,
            isLoading: true,
            urlMostrar: '',
        };


    }



    async componentDidMount() {
        contador = 0
        let curso = await consultaDetalleClasEstudiante(2, config).catch(err => { console.log(err) })
        let cursoMostrar = this.arregloCurso(curso.data[0].modules)
        this.setState({ modulos: cursoMostrar, longitudCurso: cursoMostrar.length - 1 }, () => this.setState({ isLoading: false }))
    }


    arregloCurso = (data) => {
        let arregloNuevo = [];
        for (let i = 0; i < data.length; i++) {

            for (let j = 0; j < data[i].sections.length; j++) {
                let seccion = {
                    identificador: 1,
                    nombre: data[i].sections[j].name,
                    moduloId: data[i].sections[j].module_id,
                    orden: data[i].sections[j].order,
                    archivo: data[i].sections[j].files[0].value,
                    duracion: data[i].sections[j].files[0].duration_time,
                    seccionVista: data[i].sections[j]
                }
                arregloNuevo.push(seccion)
            }
            let quiz = {
                identificador: 2,
                descripcion: data[i].exam[0].description
            }
            arregloNuevo.push(quiz)

        }
        console.log(arregloNuevo)
        return arregloNuevo
        //console.log(arregloNuevo.reverse()); 
    }


    getItemLayout = (data, index) => (
        { length: 128, offset: 128 * index, index }
    )


    sectores(item, index) {

        contador += 1
        if (contador === 1) {

            return (
                <ImageBackground source={require('../../assets/img/li1.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '55%', paddingRight: '35%', paddingTop: '20%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.toggleModal(item.archivo)} >
                            <Image source={require('../../assets/img/moneda.gif')} style={{ height: 13, width: 13, marginBottom: '1%' }} />
                            {item.identificador === 1
                                ? <Seccion />
                                : <Final />
                            }

                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )
        } else if (contador === 2) {

            return (
                <ImageBackground source={require('../../assets/img/li2.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '10%', paddingRight: '80%', paddingTop: '5%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.toggleModal(item.archivo)} >
                            <Image source={require('../../assets/img/moneda.gif')} style={{ height: 13, width: 13, marginBottom: '1%' }} />
                            {item.identificador === 1
                                ? <Seccion />
                                : <Final />
                            }
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )
        }
        else if (contador === 3) {

            return (
                <ImageBackground source={require('../../assets/img/li3.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '65%', paddingRight: '25%', paddingTop: '10%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.toggleModal(item.archivo)} >
                            <Image source={require('../../assets/img/moneda.gif')} style={{ height: 13, width: 13, marginBottom: '1%' }} />
                            {item.identificador === 1
                                ? <Seccion />
                                : <Final />
                            }
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )
        } else if (contador === 4) {
            return (
                <ImageBackground source={require('../../assets/img/li4.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '50%', paddingRight: '30%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.toggleModal(item.archivo)} >
                            <Image source={require('../../assets/img/moneda.gif')} style={{ height: 13, width: 13, marginBottom: '1%' }} />
                            {item.identificador === 1
                                ? <Seccion />
                                : <Final />
                            }
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            )

        }
        else if (contador === 5) {
            return (
                <ImageBackground source={require('../../assets/img/li5.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '70%', paddingRight: '20%', paddingTop: '10%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.toggleModal(item.archivo)} >
                            <Image source={require('../../assets/img/moneda.gif')} style={{ height: 13, width: 13, marginBottom: '1%' }} />
                            {item.identificador === 1
                                ? <Seccion />
                                : <Final />
                            }
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )

        }
        else if (contador === 6) {
            contador = 0
            return (
                <ImageBackground source={require('../../assets/img/li6.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '5%', paddingRight: '75%', paddingTop: '18%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.toggleModal(item.archivo)} >
                            <Image source={require('../../assets/img/moneda.gif')} style={{ height: 13, width: 13, marginBottom: '1%' }} />
                            {item.identificador === 1
                                ? <Seccion />
                                : <Final />
                            }
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )

        }

    }

    toggleModal = (url) => {
        this.setState({ isModalVisibleVideoPdf: true, urlMostrar: url });
    };



    // posicion = () => {
    //     this.flatListRef.scrollToIndex({ animated: true, index: 3, viewPosition: 0.5 });
    // }



    render() {
        const { modulos, longitudCurso, urlMostrar } = this.state

        if (this.state.isLoading) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View>
                <FlatList
                    data={modulos}
                    ref={(ref) => { this.flatListModulos = ref; }}
                    renderItem={({ item, index }) => this.sectores(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    getItemLayout={this.getItemLayout}
                    initialScrollIndex={longitudCurso}
                    onScrollToIndexFailed={() => { }}
                />

                <Modal isVisible={this.state.isModalVisibleVideoPdf} onBackdropPress={() => this.setState({ isModalVisibleVideoPdf: false })} animationIn='fadeIn' animationOut='fadeOut' backdropTransitionOutTiming={0} >
                    <View style={{ backgroundColor: 'white', borderRadius: 5, padding: '8%', height: 350 }}>
                        <Video
                            source={{ uri: 'https://vod.ikeko.tv/vod/3f5c1fd497a5/playlist.m3u8' }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode='contain'
                            shouldPlay
                            isLooping
                            useNativeControls={true}
                            style={{ width: '100%', height: 300 }}
                        />
                    </View>
                </Modal>

            </View>


        )
    }
}

export default cursoInteractivo;

const styles = StyleSheet.create({

})