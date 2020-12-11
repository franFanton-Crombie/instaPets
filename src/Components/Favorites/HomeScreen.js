import React from 'react'
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ApplicationProvider,
  Input
} from 'react-native';
import filter from 'lodash.filter';
import { TextInput } from 'react-native-gesture-handler';

const mockData = [
    { id: '1', text: 'Boke 💙' },
    { id: '2', text: 'is' },
    { id: '3', text: 'Awesome!' }
];
// add a state object to the HomeScreen component
class HomeScreen extends React.Component {
    state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        query: '',
        text: '',
        fullData: []
    }
    componentDidMount() {
        this.makeRemoteRequest()
    }   
   
    makeRemoteRequest = () => {
        const { page, seed } = this.state
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
        this.setState({ loading: true })
    
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: page === 1 ? res.results : [...this.state.data, ...res.results],
                error: res.error || null,
                loading: false,
                fullData: res.results
            })
        })
        .catch(error => {
            this.setState({ error, loading: false })
        })
    }
    handleSearch = text => {
        console.log('TEXT',text)
        const formattedQuery = text.toLowerCase()
        const data = filter(this.state.fullData, user => {
          return this.contains(user, formattedQuery)
        })
        this.setState({ data, query: text })
    }
    contains = ({ name, email }, query) => {
        const { first, last } = name
        if (first.includes(query) || last.includes(query) || email.includes(query)) {
          return true
        }
        return false
    }
    renderFooter = () => {
        if (!this.state.loading) return null
        return (
            <View
                style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: '#CED0CE'
                }}>
                <ActivityIndicator animating size='large' />
            </View>
        )
      }
    renderSeparator = () => {
        return (
            <View
            style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '5%'
            }}
            />
        )
    }
    renderHeader = () => (
        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={this.handleSearch}
            //onChangeText={(text) => this.handleSearch(text)}
            status='info'
            placeholder='Search'
            style={{
              borderRadius: 25,
              borderColor: '#333',
              backgroundColor: '#fff'
            }}
            textStyle={{ color: '#000' }}
            clearButtonMode='always'
          />
        </View>
    )
    render(){
        return(
            <View style={styles.view}>
                <FlatList
                ListHeaderComponent={this.renderHeader}
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert('Item pressed!')}>
                    <View
                        style={{
                        flexDirection: 'row',
                        padding: 16,
                        alignItems: 'center'
                        }}>
                        <Image style={{tintColor:'coral' , width: 50 , height: 50 }}
                                            source={require('../../assets/call-center.png')}/>
                        <Text
                        category='s1'
                        style={{
                            color: '#000'
                        }}>{`${item.name.first} ${item.name.last}`}</Text>
                    </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={this.renderSeparator}
                ListFooterComponent={this.renderFooter}
                />
            </View>
        )
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 40
    }
})
