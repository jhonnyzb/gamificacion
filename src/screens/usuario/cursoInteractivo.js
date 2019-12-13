import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, Button, Image, Alert } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Svg, { Circle, Rect, Path, G, Ellipse } from 'react-native-svg';



let contador = 0;
class cursoInteractivo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longArray: '',
            data: new Array(6)
                .fill(0)
                .map((a, i) => ({ key: i, value: 'item' + i })),

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
                    <TouchableOpacity >




                    </TouchableOpacity>

                </ImageBackground>
            )

        }
        if (contador === 2) {
            return (
                <ImageBackground source={require('../../assets/img/li2.png')} style={{ width: '100%', height: 128 }}>
                    <TouchableOpacity >

                    </TouchableOpacity>
                </ImageBackground>
            )
        }
        if (contador === 3) {
            return (
                <ImageBackground source={require('../../assets/img/li3.png')} style={{ width: '100%', height: 128 }}>
                    <TouchableOpacity>
                        <View style={{ paddingLeft: '68%', paddingRight: '10%', paddingTop: '10%' }} >
                            <TouchableOpacity >
                                <Svg width="40" height="30" id="aa4b2238-f4ce-4360-a4ec-5579686f617a" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.02 249.33">
                                    <Path d="M150.12,74.44c-60.2,0-109,50.3-109,112.36,0,.1,0,.2,0,.3v27.34c0,10.29,5.12,19.95,14,28.32V201.47c0-28.83,17.69-42.21,39.32-29.72s39.32,46.29,39.32,75.12v27.48q8,.64,16.34.65c60.2,0,109-28.68,109-60.56V187.1c0-.1,0-.2,0-.3C259.13,124.74,210.33,74.44,150.12,74.44Z"
                                        transform="translate(-41.11 -25.67)" fill="#d09750" />

                                    <Path d="M94.46,171.75C87,167.42,80,166.27,74,167.72c-5.52,5.84-8.85,15.41-8.85,27.9V236.9c14.53,13.64,39.22,23.82,68.63,27.69V246.87C133.78,218,116.08,184.24,94.46,171.75Z"
                                        transform="translate(-41.11 -25.67)" fill="#93551c" />
                                    <Ellipse cx="108.64" cy="100.3" rx="84.61" ry="44.81" fill="#bc7f3c" />
                                    <Ellipse cx="108.64" cy="85" rx="76.79" ry="40.67" fill="#e8b87e" />
                                    <Rect x="31.85" y="40.68" width="153.59" height="45.64" fill="#e8b87e" />
                                    <Ellipse cx="108.64" cy="40.67" rx="76.79" ry="40.67" fill="#f9cc9b" />
                                    <Path d="M65.15,195.62c0-12.49,3.33-22.06,8.85-27.9-11.28,2.73-18.86,14.91-18.86,33.75v41.29l10-6Z" transform="translate(-41.11 -25.67)" fill="#a5692d" />
                                    <Path d="M103.72,131a1.45,1.45,0,0,1-.69-.18l-13.35-7.52a1.37,1.37,0,0,1-.71-1.21v-6.72a1.38,1.38,0,0,1,.7-1.21,1.4,1.4,0,0,1,1.4,0l13.35,7.64a1.38,1.38,0,0,1,.7,1.21v6.6a1.39,1.39,0,0,1-1.4,1.39Zm-13.31-15.7-.12,6.79,0,.07,13.36,7.51.11-6.66Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                    <Path d="M201,131a1.42,1.42,0,0,0,.69-.18L215,123.32a1.39,1.39,0,0,0,.71-1.21v-6.72a1.4,1.4,0,0,0-2.1-1.21l-13.35,7.63a1.4,1.4,0,0,0-.7,1.21v6.61a1.38,1.38,0,0,0,.69,1.2A1.43,1.43,0,0,0,201,131Zm13.39-8.84L201,129.69l-.12-6.67,13.39-7.7.12,6.79.29.64Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                    <Path d="M154.59,131H135.77a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2h18.82a2,2,0,0,1,2,2V129A2,2,0,0,1,154.59,131Zm-18.82-8.51a.4.4,0,0,0-.4.4V129a.4.4,0,0,0,.4.4h18.82a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.4Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                    <Path d="M166,139.54H147.18a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2H166a2,2,0,0,1,2,2v6.11A2,2,0,0,1,166,139.54ZM147.18,131a.4.4,0,0,0-.4.41v6.11a.4.4,0,0,0,.4.4H166a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.41Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                </Svg>
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>

                </ImageBackground>
            )

        }
        if (contador === 4) {
            return (
                <ImageBackground source={require('../../assets/img/li4.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '50%', paddingRight: '30%' }} >
                        <TouchableOpacity >
                            <Svg width="40" height="30" id="aa4b2238-f4ce-4360-a4ec-5579686f617a" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.02 249.33">
                                <Path d="M150.12,74.44c-60.2,0-109,50.3-109,112.36,0,.1,0,.2,0,.3v27.34c0,10.29,5.12,19.95,14,28.32V201.47c0-28.83,17.69-42.21,39.32-29.72s39.32,46.29,39.32,75.12v27.48q8,.64,16.34.65c60.2,0,109-28.68,109-60.56V187.1c0-.1,0-.2,0-.3C259.13,124.74,210.33,74.44,150.12,74.44Z"
                                    transform="translate(-41.11 -25.67)" fill="#d09750" />

                                <Path d="M94.46,171.75C87,167.42,80,166.27,74,167.72c-5.52,5.84-8.85,15.41-8.85,27.9V236.9c14.53,13.64,39.22,23.82,68.63,27.69V246.87C133.78,218,116.08,184.24,94.46,171.75Z"
                                    transform="translate(-41.11 -25.67)" fill="#93551c" />
                                <Ellipse cx="108.64" cy="100.3" rx="84.61" ry="44.81" fill="#bc7f3c" />
                                <Ellipse cx="108.64" cy="85" rx="76.79" ry="40.67" fill="#e8b87e" />
                                <Rect x="31.85" y="40.68" width="153.59" height="45.64" fill="#e8b87e" />
                                <Ellipse cx="108.64" cy="40.67" rx="76.79" ry="40.67" fill="#f9cc9b" />
                                <Path d="M65.15,195.62c0-12.49,3.33-22.06,8.85-27.9-11.28,2.73-18.86,14.91-18.86,33.75v41.29l10-6Z" transform="translate(-41.11 -25.67)" fill="#a5692d" />
                                <Path d="M103.72,131a1.45,1.45,0,0,1-.69-.18l-13.35-7.52a1.37,1.37,0,0,1-.71-1.21v-6.72a1.38,1.38,0,0,1,.7-1.21,1.4,1.4,0,0,1,1.4,0l13.35,7.64a1.38,1.38,0,0,1,.7,1.21v6.6a1.39,1.39,0,0,1-1.4,1.39Zm-13.31-15.7-.12,6.79,0,.07,13.36,7.51.11-6.66Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                <Path d="M201,131a1.42,1.42,0,0,0,.69-.18L215,123.32a1.39,1.39,0,0,0,.71-1.21v-6.72a1.4,1.4,0,0,0-2.1-1.21l-13.35,7.63a1.4,1.4,0,0,0-.7,1.21v6.61a1.38,1.38,0,0,0,.69,1.2A1.43,1.43,0,0,0,201,131Zm13.39-8.84L201,129.69l-.12-6.67,13.39-7.7.12,6.79.29.64Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                <Path d="M154.59,131H135.77a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2h18.82a2,2,0,0,1,2,2V129A2,2,0,0,1,154.59,131Zm-18.82-8.51a.4.4,0,0,0-.4.4V129a.4.4,0,0,0,.4.4h18.82a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.4Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                <Path d="M166,139.54H147.18a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2H166a2,2,0,0,1,2,2v6.11A2,2,0,0,1,166,139.54ZM147.18,131a.4.4,0,0,0-.4.41v6.11a.4.4,0,0,0,.4.4H166a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.41Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                            </Svg>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            )

        }
        if (contador === 5) {
            return (
                <ImageBackground source={require('../../assets/img/li5.png')} style={{ width: '100%', height: 128 }}>
                    <TouchableOpacity>
                        <View style={{ paddingLeft: '68%', paddingRight: '10%', paddingTop: '10%' }} >
                            <TouchableOpacity >
                                <Svg width="40" height="30" id="aa4b2238-f4ce-4360-a4ec-5579686f617a" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.02 249.33">
                                    <Path d="M150.12,74.44c-60.2,0-109,50.3-109,112.36,0,.1,0,.2,0,.3v27.34c0,10.29,5.12,19.95,14,28.32V201.47c0-28.83,17.69-42.21,39.32-29.72s39.32,46.29,39.32,75.12v27.48q8,.64,16.34.65c60.2,0,109-28.68,109-60.56V187.1c0-.1,0-.2,0-.3C259.13,124.74,210.33,74.44,150.12,74.44Z"
                                        transform="translate(-41.11 -25.67)" fill="#d09750" />

                                    <Path d="M94.46,171.75C87,167.42,80,166.27,74,167.72c-5.52,5.84-8.85,15.41-8.85,27.9V236.9c14.53,13.64,39.22,23.82,68.63,27.69V246.87C133.78,218,116.08,184.24,94.46,171.75Z"
                                        transform="translate(-41.11 -25.67)" fill="#93551c" />
                                    <Ellipse cx="108.64" cy="100.3" rx="84.61" ry="44.81" fill="#bc7f3c" />
                                    <Ellipse cx="108.64" cy="85" rx="76.79" ry="40.67" fill="#e8b87e" />
                                    <Rect x="31.85" y="40.68" width="153.59" height="45.64" fill="#e8b87e" />
                                    <Ellipse cx="108.64" cy="40.67" rx="76.79" ry="40.67" fill="#f9cc9b" />
                                    <Path d="M65.15,195.62c0-12.49,3.33-22.06,8.85-27.9-11.28,2.73-18.86,14.91-18.86,33.75v41.29l10-6Z" transform="translate(-41.11 -25.67)" fill="#a5692d" />
                                    <Path d="M103.72,131a1.45,1.45,0,0,1-.69-.18l-13.35-7.52a1.37,1.37,0,0,1-.71-1.21v-6.72a1.38,1.38,0,0,1,.7-1.21,1.4,1.4,0,0,1,1.4,0l13.35,7.64a1.38,1.38,0,0,1,.7,1.21v6.6a1.39,1.39,0,0,1-1.4,1.39Zm-13.31-15.7-.12,6.79,0,.07,13.36,7.51.11-6.66Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                    <Path d="M201,131a1.42,1.42,0,0,0,.69-.18L215,123.32a1.39,1.39,0,0,0,.71-1.21v-6.72a1.4,1.4,0,0,0-2.1-1.21l-13.35,7.63a1.4,1.4,0,0,0-.7,1.21v6.61a1.38,1.38,0,0,0,.69,1.2A1.43,1.43,0,0,0,201,131Zm13.39-8.84L201,129.69l-.12-6.67,13.39-7.7.12,6.79.29.64Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                    <Path d="M154.59,131H135.77a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2h18.82a2,2,0,0,1,2,2V129A2,2,0,0,1,154.59,131Zm-18.82-8.51a.4.4,0,0,0-.4.4V129a.4.4,0,0,0,.4.4h18.82a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.4Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                    <Path d="M166,139.54H147.18a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2H166a2,2,0,0,1,2,2v6.11A2,2,0,0,1,166,139.54ZM147.18,131a.4.4,0,0,0-.4.41v6.11a.4.4,0,0,0,.4.4H166a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.41Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                </Svg>
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>

                </ImageBackground>
            )

        }
        if (contador === 6) {
            contador = 0
            return (
                <ImageBackground source={require('../../assets/img/li6.png')} style={{ width: '100%', height: 128 }}>
                    <View style={{ paddingLeft: '15%', paddingRight: '30%' }} >
                        <TouchableOpacity >
                            <Svg width="40" height="30" id="aa4b2238-f4ce-4360-a4ec-5579686f617a" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.02 249.33">
                                <Path d="M150.12,74.44c-60.2,0-109,50.3-109,112.36,0,.1,0,.2,0,.3v27.34c0,10.29,5.12,19.95,14,28.32V201.47c0-28.83,17.69-42.21,39.32-29.72s39.32,46.29,39.32,75.12v27.48q8,.64,16.34.65c60.2,0,109-28.68,109-60.56V187.1c0-.1,0-.2,0-.3C259.13,124.74,210.33,74.44,150.12,74.44Z"
                                    transform="translate(-41.11 -25.67)" fill="#d09750" />

                                <Path d="M94.46,171.75C87,167.42,80,166.27,74,167.72c-5.52,5.84-8.85,15.41-8.85,27.9V236.9c14.53,13.64,39.22,23.82,68.63,27.69V246.87C133.78,218,116.08,184.24,94.46,171.75Z"
                                    transform="translate(-41.11 -25.67)" fill="#93551c" />
                                <Ellipse cx="108.64" cy="100.3" rx="84.61" ry="44.81" fill="#bc7f3c" />
                                <Ellipse cx="108.64" cy="85" rx="76.79" ry="40.67" fill="#e8b87e" />
                                <Rect x="31.85" y="40.68" width="153.59" height="45.64" fill="#e8b87e" />
                                <Ellipse cx="108.64" cy="40.67" rx="76.79" ry="40.67" fill="#f9cc9b" />
                                <Path d="M65.15,195.62c0-12.49,3.33-22.06,8.85-27.9-11.28,2.73-18.86,14.91-18.86,33.75v41.29l10-6Z" transform="translate(-41.11 -25.67)" fill="#a5692d" />
                                <Path d="M103.72,131a1.45,1.45,0,0,1-.69-.18l-13.35-7.52a1.37,1.37,0,0,1-.71-1.21v-6.72a1.38,1.38,0,0,1,.7-1.21,1.4,1.4,0,0,1,1.4,0l13.35,7.64a1.38,1.38,0,0,1,.7,1.21v6.6a1.39,1.39,0,0,1-1.4,1.39Zm-13.31-15.7-.12,6.79,0,.07,13.36,7.51.11-6.66Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                <Path d="M201,131a1.42,1.42,0,0,0,.69-.18L215,123.32a1.39,1.39,0,0,0,.71-1.21v-6.72a1.4,1.4,0,0,0-2.1-1.21l-13.35,7.63a1.4,1.4,0,0,0-.7,1.21v6.61a1.38,1.38,0,0,0,.69,1.2A1.43,1.43,0,0,0,201,131Zm13.39-8.84L201,129.69l-.12-6.67,13.39-7.7.12,6.79.29.64Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                <Path d="M154.59,131H135.77a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2h18.82a2,2,0,0,1,2,2V129A2,2,0,0,1,154.59,131Zm-18.82-8.51a.4.4,0,0,0-.4.4V129a.4.4,0,0,0,.4.4h18.82a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.4Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                                <Path d="M166,139.54H147.18a2,2,0,0,1-2-2v-6.11a2,2,0,0,1,2-2H166a2,2,0,0,1,2,2v6.11A2,2,0,0,1,166,139.54ZM147.18,131a.4.4,0,0,0-.4.41v6.11a.4.4,0,0,0,.4.4H166a.4.4,0,0,0,.4-.4v-6.11a.4.4,0,0,0-.4-.41Z" transform="translate(-41.11 -25.67)" fill="#d09750" />
                            </Svg>
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