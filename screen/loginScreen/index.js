import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TextInput, Image, Button, Alert} from "react-native"

import { connect } from 'react-redux'
import { setLogin } from "../../store/action"

import SQLite from 'react-native-sqlite-storage'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password : ""
        }
        SQLite.DEBUG = true;
    }

    // For executing query template
    ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(sql, params, (trans, results) => {
            resolve(results);
          },
            (error) => {
              reject(error);
            });
        });
    });

    // CreateTable = async () => {
    //     let Table = await this.ExecuteQuery("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, email text, password text)",[]);
    //     console.log(Table);
    // }

    // Insert
    // insertQuery = async (email, password) => {
    //     // const dbName = "user"
    //     let query = await this.ExecuteQuery("INSERT INTO users (id, email, password) VALUES (?, ?, ?)", [2, 'operator@tes.com', 'operator'])
    //     const rows = query.rows;
    //     console.error(query)
    // }

    // Login Query
    loginQuery = async (email, password) => {
        let query = await this.ExecuteQuery(
            "SELECT * FROM users WHERE email=? AND password=?",
            [email, password]
        )
        console.info("Login Query Result:", query)

        if (query.rows.length === 0) {
            return null
        }
    }

    onPressHandler = async () => {
        const { email, password } = this.state
        const { doLogin } = this.props
        // this.CreateTable()   
        // this.insertQuery()
        const result = await this.loginQuery(email, password)
        if (result === null) {
            Alert.alert("Invalid Email or Password!")
        } else (
            doLogin()
        )        
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

const mapDispatchToProps = (dispatch) => ({
    doLogin: () => dispatch(setLogin())
})

export default connect(null, mapDispatchToProps)(Login)