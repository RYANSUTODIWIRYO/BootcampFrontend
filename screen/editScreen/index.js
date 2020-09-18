import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

class EditScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : "",
            name: "",
            picture: ""
        }
    }

    componentDidMount(){
        const { player } = this.props.route.params
        this.setState({
            id: player.id,
            name: player.name,
            picture: player.picture
        })
    }

    onPressHandler = async () => {
        // Alert.alert("Clicked")
        const { updatePlayer, navigation } = this.props
        const { id, name, picture } = this.state
        await updatePlayer({id, name, picture})
        Alert.alert("Edit Player Complete")
        navigation.navigate("TableScreen")
    }

    render() {
        // consoles.log(this.props.route.params.data)
        const { player } = this.props.route.params

        return(
            <View style={styles.container}>
                <Text style={styles.textHead}>Edit Player</Text>
                <Input
                    placeholder='ID'
                    value={player.id.toString()}
                    editable={false}
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
                    defaultValue={player.name}
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
                    defaultValue={player.picture}
                    leftIcon={
                        <Image
                                style={styles.inputIcon}
                                source={images.pictureImage}
                        />
                    }
                    selectTextOnFocus={true}
                    onChangeText={(picture) => this.setState({picture})}
                    contextMenuHidden={false} // show menu
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressHandler}
                >
                    <Text>Edit Player</Text>
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

export default EditScreen