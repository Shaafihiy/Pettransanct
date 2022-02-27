import React from 'react'
import { View, StyleSheet,FlatList} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ProductItem from '../components/ProductItem';
import pets from '../components/ProductItem/pets';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {/*Render product component*/}
        <FlatList
        data={pets}
        renderItem= {({item}) => <ProductItem item={item}/>}
        showsVerticalScrollIndicator= {false}
        />
       
        </View>
    )
}

const styles =StyleSheet.create({
page:{
    backgroundColor: '#1874CD'
},    

})

export default HomeScreen

