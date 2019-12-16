import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, Button, Image, Alert } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Svg, { Circle, Rect, Path, G, Ellipse } from 'react-native-svg';
import Seccion from './seccion'



let contador = 0;
class cursoInteractivo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longArray: '',
            data: new Array(6)
                .fill(8)
                .map((a, i) => ({ key: i, value: 'item' + i, bandera: (i % 2) ? 'i' : 'p' })),

            isVisible: false
        };
    }



    componentDidMount() {
        const { data } = this.state
        this.setState({ longArray: data.length - 1 })
    }


    sectores(item, index) {
        contador += 1
        if (contador === 1) {
            return (
                <ImageBackground source={require('../../assets/img/li1.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '55%', paddingRight: '35%', paddingTop: '20%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image source={require('../../assets/img/estrella.gif')} style={{ height: 16, width: 20 }} />
                            <Seccion />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            )

        }
        if (contador === 2) {
            return (
                <ImageBackground source={require('../../assets/img/li2.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '10%', paddingRight: '80%', paddingTop: '5%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image source={require('../../assets/img/estrella.gif')} style={{ height: 16, width: 20 }} />
                            <Seccion />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )
        }
        if (contador === 3) {
            return (
                <ImageBackground source={require('../../assets/img/li3.png')} style={{ width: '100%', height: 128 }}>

                    <View style={{ paddingLeft: '68%', paddingRight: '10%', paddingTop: '10%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image source={require('../../assets/img/estrella.gif')} style={{ height: 16, width: 20 }} />
                            <Seccion />
                        </TouchableOpacity>
                    </View>


                </ImageBackground>
            )

        }
        if (contador === 4) {
            return (
                <ImageBackground source={require('../../assets/img/li4.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '50%', paddingRight: '30%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} >
                        <Image source={require('../../assets/img/estrella.gif')} style={{ height: 16, width: 20 }} />
                            <Seccion />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            )

        }
        if (contador === 5) {
            return (
                <ImageBackground source={require('../../assets/img/li5.png')} style={{ width: '100%', height: 128 }}>

                    <View style={{ paddingLeft: '70%', paddingRight: '10%', paddingTop: '10%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} >
                        <Image source={require('../../assets/img/estrella.gif')} style={{ height: 16, width: 20 }} />
                            <Seccion />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            )

        }
        if (contador === 6) {
            contador = 0
            return (
                <ImageBackground source={require('../../assets/img/li6.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '14%', paddingRight: '75%' }} >
                        <TouchableOpacity style={{ alignItems: "center" }} >
                            <Image source={require('../../assets/img/estrella.gif')} style={{ height: 16, width: 20 }} />
                            <Seccion color='#D1CFCE' />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )

        }

    }

    getItemLayout = (data, index) => (
        { length: 128, offset: 128 * index, index }
    )

    posicion = () => {
        this.flatListRef.scrollToIndex({ animated: true, index: 3, viewPosition: 0.5 });
    }


    showPopover() {
        this.setState({ isVisible: true });
    }

    closePopover() {
        this.setState({ isVisible: false });
    }

    render() {
        const { data, longArray } = this.state
        return (

            <FlatList
                data={data}
                ref={(ref) => { this.flatListRef = ref; }}
                renderItem={({ item, index }) => this.sectores(item, index)}
                keyExtractor={(item, index) => index.toString()}
                getItemLayout={this.getItemLayout}
                initialScrollIndex={longArray}
                onScrollToIndexFailed={() => { }}
            />

        )
    }
}

export default cursoInteractivo;

const styles = StyleSheet.create({

})