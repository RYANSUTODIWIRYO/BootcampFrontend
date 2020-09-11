import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

class AlbumScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums:[]
        }
    }

    componentDidMount() {
        // Get data from link then set state
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(jsonRes => this.setState({
                albums: jsonRes
            }))
            .catch(err => console.log(err))

    }

    onPressHandler = () => {
        this.props.navigation.navigate("PhotoScreen")
    }

    // Trigered when albums title is onPress
    onPressAlbumHandler = (album) => {
        this.props.navigation.navigate(
            "PhotoScreen", { // Navigation target
                album: album // Send params
            }
        )
    }

    showAlbum = () => {
        const { albums } = this.state
        return albums.map((album, idx) => {
            const color = (idx + 1) % 2 ? "#c8c8c8" : "#fff"
            return (
                <View style={{flexDirection: "row", backgroundColor: color, borderRadius: 5, padding: 5}} key={album.id}>
                    <View>
                        <Text style={styles.text}>{idx + 1}. </Text>
                    </View>
                    <View>                    
                        <TouchableOpacity onPress={() => this.onPressAlbumHandler(album)}>
                            <Text style={styles.text}>{album.title}</Text>                        
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textHead}>Albums</Text>
                </View>
                <ScrollView style={styles.list}>
                    {this.showAlbum()}
                </ScrollView>                
            </View>
        )
    }
}

// For styling
const styles = StyleSheet.create({
    textHead: { fontSize: 25, marginBottom: 10},
    text: { fontSize: 20},
    container: { flex: 1, flexDirection: "column", alignItems: "center", padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    inputIcon : { width: 25, height: 25, marginRight: 10 },
    button: { alignItems: "center", justifyContent: "center", width: 100, height: 40, backgroundColor:"#DDDDDD", borderRadius: 5 },
    list: {flexDirection: "column", width: "100%"}
})

export default AlbumScreen