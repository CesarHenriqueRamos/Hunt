import React from 'react';
import {WebView, Text} from 'react-native';

const Product = ({ navigation }) => {
    return(
       
        <Text>Product:   {navigation.state.params.product.url}</Text>  
    //<WebView source={{ uri : navigation.state.params.product.url}} />
   
    );
}; 


Product.navigationOptions = ({ navigation }) => ({ title:navigation.state.params.product.title });


export default Product;