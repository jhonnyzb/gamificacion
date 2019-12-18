import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import PDFReader from 'rn-pdf-reader-js';
import PDFView from 'react-native-view-pdf';

const resources = {
    file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
    url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
    base64: 'JVBERi0xLjMKJcfs...',
};


class detalleCursosVistos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf'
        const resourceType = 'url';
        return (
            <View style={{ flex: 1 }}>
                {/* Some Controls to change PDF resource */}
                <PDFView
                    fadeInDuration={250.0}
                    style={{ flex: 1 }}
                    resource={url}
                    resourceType={'url'}
                    //onLoad={() => console.log(`PDF rendered from ${resourceType}`) }
                    //onError={() => console.log('Cannot render PDF', error)}
                />
            </View>
        );
    }
}

export default detalleCursosVistos;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})