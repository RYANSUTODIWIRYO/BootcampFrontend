import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

class InputScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : "",
            name: "",
            picture: ""
        }
    }

    onPressHandler = () => {
        // Alert.alert("Clicked")
        const { addPlayer } = this.props
        const { id, name, picture } = this.state
        addPlayer({id, name, picture})
        // Alert.alert("Add Player Complete")
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textHead}>Player Form</Text>
                <Input
                    placeholder='ID'
                    leftIcon={
                        <Image
                                style={styles.inputIcon}
                                source={images.idImage}
                        />
                    }
                    selectTextOnFocus={true}
                    onChangeText={(id) => this.setState({id})}
                />
                <Input
                    placeholder='Name'
                    leftIcon={
                        <Image
                                style={styles.inputIcon}
                                source={images.nameImage}
                        />
                        
                    }
                    selectTextOnFocus={true}
                    onChangeText={(name) => this.setState({name})}
                />
                <Input
                    placeholder='Picture Link'
                    leftIcon={
                        <Image
                                style={styles.inputIcon}
                                source={images.pictureImage}
                        />
                    }
                    selectTextOnFocus={true}
                    onChangeText={(picture) => this.setState({picture})}
                    // contextMenuHidden={false} // show menu
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressHandler}
                >
                    <Text>Add Player</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// For images 
const images = {
    idImage: require("../../assets/image/id.png"),
    nameImage: require("../../assets/image/name.png"),
    pictureImage: require("../../assets/image/picture.png")
}

// For styling
const styles = StyleSheet.create({
    textHead: { fontSize: 25 },
    container: { flex: 1, flexDirection: "column", alignItems:"center", padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    inputIcon : { width: 25, height: 25, marginRight: 10 },
    button: { alignItems: "center", justifyContent: "center", width: 100, height: 40, backgroundColor:"#DDDDDD", borderRadius: 5 }
})

export default InputScreen