import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component'

class TableScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            tableHead: ["No", "Id", "Name", "Action"],
            tableData: [[]]
        }
    }

    componentDidMount() {        
        this.setTableData(this.props.players)
    }    

    // Update 1
    // If the derived state (this component's props) has changed,
    // this function will be triggered
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setTableData(nextProps.players)
    }

    // Update 2
    // If in these following logic returns true,
    // the component will re-render
    shouldComponentUpdate(nextProps, nextState){
        if (this.props.players !== nextProps.players) {
            return true
        } else if (this.state.tableData !== nextState.tableData) {
            return true
        }
        return false
    }

    // UNSAFE_componentWillUpdate() {
    // }

    // Not working yet
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.players.length !== prevProps.players.length){
    //         Alert.alert("Total of players is increased!")
    //     } else if (this.state.tableData !== prevState.tableData) {
    //         Alert.alert("Table of players is changed!")
    //     }
    //     // Alert.alert("Nothing Change")
    // }

    setTableData = (players) => {
        // Convert data from json to array
        let tableData = []
        players.map((Player, idx) => {
            // Data position, the ,Player.picture will not be shown and will be replaced by action button
            const dataTemp = [idx+1, Player.id, Player.name, Player.picture]
            tableData.push(dataTemp) 
        })
        this.setState({tableData})
    }

    // _alertIndex(data, index) {
    //     Alert.alert(`This is row ${index + 1}\nName: ${data[2]}`);
    // }

    showTableData = () => {
        const { tableData } = this.state

        if (tableData === [[]]) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
        
        // Create Button
        const element = (rowData, index) => (
            <View key={index} style={styles.action}>                
                <TouchableOpacity onPress={() => this.onPressEditHandler(rowData)}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Edit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPressDeleteHandler(rowData[1])}>
                    <View style={styles.btn}>
                    <Text style={styles.btnText}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
          )
        
        // Show data
        return tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
                {
                    rowData.map((cellData, cellIndex) => (
                        <Cell
                            key={cellIndex}
                            // the 4th (index 3) data is a picture, but replaced by action button
                            data={cellIndex === 3 ? element(rowData, index) : cellData}
                            textStyle={styles.text}
                        />
                    ))
                }
            </TableWrapper>
        ))
    }

    refresh = () => {
        this.setTableData(this.props.players)
    }

    onPressDeleteHandler = (id) => {        
        const { deletePlayer } = this.props
        deletePlayer(id)
    }
    
    onPressEditHandler = (data) => {
        // Alert.alert("incomming feature " + data)
        // console.log(data)
        this.props.navigation.navigate("EditScreen", {
            player: {
                id: data[1],
                name: data[2],
                picture: data[3]
            }
        })
    }
    
    render() {
        const { tableHead } = this.state

        return(
                <View style={styles.container}>
                    <View style={{alignItems:"center"}}>                    
                        <Text style={styles.textHead}>players Table</Text>
                    </View>
                    {/* <TouchableOpacity onPress={this.refresh} style={{marginTop:20, marginBottom:20, alignItems: "center"}}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Refresh</Text>
                        </View>
                    </TouchableOpacity> */}
                    <Table borderStyle={{borderColor: 'transparent'}} style={styles.table}>
                        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                        {this.showTableData()}
                    </Table>
                </View>    
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    textHead: { fontSize: 25, marginBottom: 20 },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 20 },
    row: { flexDirection: "row", backgroundColor: '#FFF1C1' },
    action: {flexDirection:"column", alignItems: "center"},
    btn: { width: 58, height: 18, margin:5, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
  });

export default TableScreen