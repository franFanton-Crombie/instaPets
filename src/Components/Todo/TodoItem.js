import React , {useState} from 'react'
import { Image, Pressable, StyleSheet,Text,Modal, View,TouchableHighlight,TextInput} from 'react-native';

export default function TodoItem({ submitHandler,item , pressHandler}){
    const [modalVisible, setModalVisible] = useState(false);
    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View style={styles.row}>
            <Text style={styles.text}>{item.text}</Text>
            <Pressable onPress={ () => pressHandler(item.key)}>
                <Image  style={styles.iconImg} 
                        source={require('../../../src/assets/papelera.png')} 
                />    
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Edit Task:</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={ (val) => changeHandler(val)}>
                                {item.text}
                        </TextInput>
                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            submitHandler(text)
                        }}
                        >
                        <Text style={styles.textStyle}>Accept</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                setModalVisible(true);
                }}
            >
                 <Image  style={styles.iconImg2} 
                        source={require('../../../src/assets/editar.png')} 
                />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10,
    },
    row:{
        flexDirection:"row",
    },
    textDelete:{
        marginTop: 30,
        marginLeft: 10,
    },
    iconImg:{
        marginTop: 30,
        marginLeft: 10,
        width: 30,
        height: 30,
    },
    iconImg2:{
        marginTop: 25,
        width: 30,
        height: 30,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 5,
        elevation: 2,
        marginBottom: 10,
        marginLeft: 10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: "#F2F2F2"
    }
})