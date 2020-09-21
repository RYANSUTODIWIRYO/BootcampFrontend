import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert, LogBox } from 'react-native'
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

// Ignoring warning
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

class InputScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : "",
            name: "",
            picture: ""
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // console.log("Dari kamera: ", this.props.route.params)
    //     if (prevProps.route.params?.picture !== this.props.route.params?.picture){
    //         this.setPicture(this.props.route.params.picture)
    //     }
    // }

    componentWillUnmount() {
        this.setState({
            id: ""
        })
    }

    setPicture = (picture) => {
        this.setState({
            picture
        })
    }

    onPressAddPlayerHandler = async () => {
        // Alert.alert("Clicked")
        const { addPlayer } = this.props
        const { id, name, picture } = this.state
        const result = await addPlayer({id, name, picture})        
        
        // If there is no error, clear input
        if (!result.message) {
            this.setState({
                id : "",
                name: "",
                picture: ""
            })
        }
    }
    
    onPressCameraHandler = () => {
        const { navigation } = this.props
        navigation.navigate("CameraScreen", {
            setPicture: this.setPicture,
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textHead}>Player Form</Text>
                <Input
                    placeholder='ID'
                    defaultValue={this.state.id}
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
                    defaultValue={this.state.name}
                    leftIcon={
                        <Image
                                style={styles.inputIcon}
                                source={images.nameImage}
                        />
                        
                    }
                    selectTextOnFocus={true}
                    onChangeText={(name) => this.setState({name})}
                />
                <View style={{width:"91%",flexDirection: "row", justifyContent: "center"}}>
                    <Input
                        placeholder='Picture Link'
                        defaultValue={this.state.picture}
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
                        // style={styles.button}
                        onPress={this.onPressCameraHandler}
                    >
                        {/* <Text>Camera</Text> */}
                        <Image
                            style={{height: 25, width: 25, marginTop: 10, marginRight: 10}}
                            source={images.cameraImage}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressAddPlayerHandler}
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
    pictureImage: require("../../assets/image/picture.png"),
    cameraImage: require("../../assets/image/camera.png")
}

// For styling
const styles = StyleSheet.create({
    textHead: { fontSize: 25 },
    container: { flex: 1, flexDirection: "column", alignItems:"center", padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    inputIcon : { width: 25, height: 25, marginRight: 10 },
    button: { alignItems: "center", justifyContent: "center", width: 100, height: 40, backgroundColor:"#DDDDDD", borderRadius: 5 }
})

export default InputScreen