import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TextInput, Image, Button} from "react-native"

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password : ""
        }
    }

    onPressHandler = () => {
        return this.props.navigation.navigate("Home")
        // const { email, password } = this.state
        // const { navigation } = this.props
        // // alert(`Email : ${email}\nPassword : ${password}`)
        
        // if(email === "admin@tes.com" && password === "admin") {
        //     return navigation.navigate("Home")
        // }
        
        // return alert("Invalid Username or Password")        
    }
    
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={images.bgImage} style={styles.image}>
                    <View style={styles.loginForm}>
                        <View style={styles.rowInput}>
                            <Text style={styles.textTitle}>
                                My Login
                            </Text>
                        </View>
                        <View style={styles.rowInput}>
                            <Image
                                style={styles.inputIcon}
                                source={images.emailImage}
                            />
                            <TextInput
                                style={styles.input}
                                name={"email"}
                                placeholder="Email"
                                onChangeText={(email) => this.setState({email})}
                            />
                        </View >
                        <View style={styles.rowInput}>
                            <Image
                                style={styles.inputIcon}
                                source={images.passwordImage}
                                />
                            <TextInput 
                                style={styles.input}
                                name="password"
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <View style={styles.rowInput}>
                            <Button
                                onPress={this.onPressHandler}
                                title="Login"
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}


// For images 
const images = {
    bgImage: require("../../assets/image/nature.jpg"),
    emailImage: require("../../assets/image/mail.png"),
    passwordImage: require("../../assets/image/password.png")
}

// For styling
const styles = StyleSheet.create({
    container : {
        flex: 1,
        // flexDirection: "column",
        justifyContent: "center",
        // backgroundColor: "red"        
    },
    image : {
        flex: 1,
        flexDirection: "column",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    loginForm : {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 5,
        width: 350,
        height: 600,

        // flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textTitle : {
        fontSize: 30,
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 0.8)",
        marginBottom: 30
    },
    rowInput : {
        flexDirection: "row",
        marginBottom: 25
    },
    input : {
        width: 250,
        height: 50,
        backgroundColor: "rgba(222, 222, 222, 1)",
        borderRadius: 5
    },
    inputIcon : {
        width: 25,
        height: 25,
        marginTop: 10,
        marginRight: 10
    }
})

export default Login