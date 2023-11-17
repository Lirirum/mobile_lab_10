import React from 'react';
import { View, Text, Button ,TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import SvgUri from 'react-native-svg-uri';

const MainComponent = (props) => {
  const { cart, items, addToCart, removeFromCart } = props;


  const style =StyleSheet.create({
    container:{
        
        flexDirection:"row",
        marginTop:20,
        alignItems:"center"
    

    },
    main:{
        marginTop:20,
        padding:20
    }
    ,btn:{
        position:'absolute',
        left:150
    }



  })
  return (
    <View style={style.main} >
      <Text style={{fontSize:20, backgroundColor:"black",padding:5,marginTop:10,color:'white', textAlign:"center"}} >Katalog</Text>
      {items.map((item) => (
        <View key={item.id} style={style.container} >
          <Text>{item.name} - ${item.price}</Text>
          <TouchableOpacity style={style.btn} onPress={() => addToCart(item)} >
          <SvgUri
            width="35"
            height="35"
            fill='blue'
            source={require('./svg/basket.svg')}
        />

            </TouchableOpacity>
        </View>
      ))}

      <Text style={{fontSize:20, backgroundColor:"black",padding:5,marginTop:10,color:'white', textAlign:"center"}}>Cart</Text>
      {cart.filter((item, index, self) =>
    index === self.findIndex((t) => t.id === item.id)
  ).map((item) => (
        <View key={item.id} style={style.container} >
          <Text>{item.name}</Text>
          <TouchableOpacity style={style.btn} onPress={() => removeFromCart(item.id)} >
          <SvgUri
            width="35"
            height="35"
            fill='red'
            source={require('./svg/cross.svg')}
        />
        </TouchableOpacity>
        <Text style={{marginLeft:4, fontWeight:'bold'}}>
        {(()=>{
           _items= cart.filter(_item => _item.id === item.id)
           return(_items.length)

        })()}

        </Text>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  items: state.cart.items,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);