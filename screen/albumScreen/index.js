import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    RefreshControl,
    Alert, 
    Animated } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AsyncStorage from "@react-native-community/async-storage"

class AlbumScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums:[],
            limit: 10            
        }
    }

    async componentDidMount() {
        // this.loadData()
        
        // Retrieve data from async storage then set state
        const err = await this._retrieveData()

        // If there's no data, fetch and then store to async storage
        // and then set state
        if (err === null) {
            console.log("Fetch from link")      
            fetch("http://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(jsonRes => this._storeData(jsonRes))
            .catch(err => console.log("Error fetch data:", err))
        }
    }

    _retrieveData = async () => {
        try {
            const albums = await AsyncStorage.getItem('@MySuperStore:albums')
            // console.log("albums:", albums)

            // If albums not null, then set state
            if (albums !== null) {                
                return this.setState({
                    albums: JSON.parse(albums)
                }) 
            }            
            return null

          } catch (error) {
            console.error("Error retrieve data:", error)
            return error
          }
    }

    _storeData = async (data) => {
        try {    
            console.info("Store data")                 
            await AsyncStorage.setItem("@MySuperStore:albums", JSON.stringify(data))
            this.setState({
                albums: data
            })
        } catch (error) {
            console.error("Error store data:", error)
        }
    }

    // Trigered when albums title is onPress
    onPressAlbumHandler = (album) => {
        this.props.navigation.navigate(
            "PhotoScreen", { // Navigation target
                album: album // Send params
            }
        )
    }

    Item = ({item}) => {
        return(            
            <View style={{flexDirection: "row", backgroundColor: "white", borderRadius: 5, padding: 5}} key={item.id}>
                <View style={{backgroundColor: "rgba(222, 222, 222, 1)", width:"100%", borderRadius: 5, padding: 10, marginBottom: 20}}>                    
                    {/* <TouchableOpacity onPress={() => this.onPressAlbumHandler(item)}> */}
                        <Swipeable                            
                            renderLeftActions={this.swipeLeftActions}
                            onSwipeableLeftOpen={() => this.onPressAlbumHandler(item)}
                        >
                            <Text style={styles.text}>{item.title}</Text>  
                        </Swipeable>                      
                    {/* </TouchableOpacity> */}
                </View>
            </View>
        )
    }
    
    swipeLeftActions = () => {
        return(
            <View>
                <Text style={{margin:5}}>
                    Open photos
                </Text>
            </View>
        )
    };

    render() {
        const { albums, limit } = this.state
        let refreshing = false
        let albumsToShow = []

        // limit album to show
        const max = limit > albums.length ? albums.length : limit
        for (let i = 0; i < max; i++) {
            albumsToShow.push(albums[i])            
        }
        
        const renderItem = ({ item }) => (
            <this.Item item={item}/>
        )

        const onRefresh = () => {
            // setRefreshing(true);
            refreshing = true

            setTimeout(() => {
                // Below will be trigerred after 2 secs
                this.setState({
                    limit: 10
                })

                refreshing = false 
                // Alert.alert("Appears after 2 secs")
            }, 2000);
        }

        const loadMore = () => {
            this.setState({
                limit: limit + 10
            })
        }

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textHead}>Albums</Text>
                </View>
                <FlatList
                    data={albumsToShow}
                    renderItem={renderItem}
                    keyExtractor={albumToShow => albumToShow.id.toString()} // Must a string type

                    // Pulldown refresh
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing} // Boolean
                            onRefresh={onRefresh} // Function that will be called if refreshing is true
                        />
                    }

                    // It will trigger onEndReached when it reaches last 30% data
                    onEndReachedThreshold={0.3} 
                    onEndReached={({ distanceFromEnd }) => {
                        console.log('on end reached ', distanceFromEnd)
                        loadMore()
                    }}
                />
            </View>
        )
    }
}

// For styling
const styles = StyleSheet.create({
    textHead: { fontSize: 25, marginBottom: 10},
    text: { fontSize: 20 },
    container: { flex: 1, flexDirection: "column", alignItems: "center", padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    inputIcon : { width: 25, height: 25, marginRight: 10 },
    button: { alignItems: "center", justifyContent: "center", width: 100, height: 40, backgroundColor:"#DDDDDD", borderRadius: 5 },
    list: {flexDirection: "column", width: "100%"}
})

export default AlbumScreen