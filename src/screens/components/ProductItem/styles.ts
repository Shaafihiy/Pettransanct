import {StyleSheet} from 'react-native'
const styles =StyleSheet.create({  
    root:{
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    boderColor: '#d1d1d1',
    backgroundColor: '#fff',
    borderRadius: 3,
    marginVertical: 5,
    },
    image:{
        flex: 2,
        height:150,
        resizeMode: 'cover',
        
    },
    rightContainer:{
    padding: 10,
    flex: 3,
    backgroundColor: 'white'
    },
    title:{
    fontWeight: 'bold',
    fontSize: 20,
    },
    price:{
    fontSize: 18,
    fontWeight: 'bold',
    },
    oldPrice:{
        fontSize: 12,
        textDecorationLine: 'line-through',
    },
    ratingsContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    },
    star:{
        margin: 2,
    }
    
    })

    export default styles;
    