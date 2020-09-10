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
        // Convert data from json to array
        let tableData = []
        this.props.users.map((user, idx) => {
            const dataTemp = [idx+1, user.id, user.name, ""]
            tableData.push(dataTemp) 
        })
        this.setState({tableData})
    }

    _alertIndex(data, index) {
        Alert.alert(`This is row ${index + 1}\nName: ${data[2]}`);
      }

    showTableData = () => {
        const { tableData } = this.state
        
        // Create Button
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(data, index)}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>button</Text>
              </View>
            </TouchableOpacity>
          )
        
        // Show data
        return tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={styles.row}>
                        {
                            rowData.map((cellData, cellIndex) => (
                                <Cell
                                    key={cellIndex}
                                    data={cellIndex === 3 ? element(rowData, index) : cellData}
                                    textStyle={styles.text}
                                />
                            ))
                        }
                    </TableWrapper>
                )
            )
    }
    
    render() {
        const { tableHead } = this.state     

        return(
            <View style={styles.container}>
                <Text>Ini Table Screen</Text>
                <Table borderStyle={{borderColor: 'transparent'}}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    {this.showTableData()}
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: "row",backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
  });

export default TableScreen