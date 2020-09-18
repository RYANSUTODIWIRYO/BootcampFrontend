import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

class PhotoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos:[],
            number: 10
        }
    }

    componentDidMount(){
        const { album } = this.props.route.params // Get params
        let photos = []

        // Fetch from api then set state
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(jsonRes => {
                jsonRes.map(obj => {
                    if (obj.albumId === album.id) {
                        photos.push(obj)
                    } 
                })
            })
            .then(() => {
                this.setState({photos})
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Showing photo
    showPhotos = () => {
        const { photos, number } = this.state        
            
        if (photos.length === 0) {          
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }

        const max = number > photos.length ? photos.length : number

        // Showing only 10 items/page
        let showedPhotos = []
        for (let i = (number - 10); i < max; i++) {
            showedPhotos.push(photos[i].thumbnailUrl)
            // console.log(photos[i].thumbnailUrl)
        }
        // console.log(showedPhotos)
        return showedPhotos.map((photo, idx) => {
            return ( 
                <View key={idx} style={{margin: 10}}>
                    {/* <Text>{photo.thumbnailUrl}</Text> */}
                    <Image source={{uri: photo}} style={{width: 100, height: 100, borderRadius:5}}/>
                </View>
            )
        })

    }

    render() {
        const { number, photos } = this.state
        const nextDixplay = number > photos.length-1 ? "none" : "flex"
        const prevDisplay = number > 10 ? "flex" : "none"

        return (
            <View style={styles.container}>
                {/* <View><Text style={styles.textHead}>Photos</Text></View> */}
                <View style={styles.photo}>
                    {this.showPhotos()}
                </View>
                <View style={{flexDirection: "row", justifyContent:"space-around", width: "100%"}}>                    
                {/* <View> */}
                    <View style={{display: prevDisplay}}>
                        <Button
                            title="<< Prev"
                            onPress={() => this.setState({number: number - 10})}                        
                        />
                    </View>
                    <View style={{display: nextDixplay}}>
                        <Button
                            title="Next >>"
                            onPress={() => this.setState({number: number + 10})}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

// For styling
const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: "column", alignItems: "center"},
    textHead: { fontSize: 25 },
    photo: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", marginTop: 20}
})

export default PhotoScreen