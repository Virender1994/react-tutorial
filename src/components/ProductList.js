import React from 'react'
import Product from './Product'
function ProductList(props) {
    console.log('props', props)
    return (
        props.productList.length > 0 ?
        props.productList.map((product, i) => {
            return <Product key={i} product={product} index={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}></Product>
        }) : <h1>No Products Exists in the Carts</h1>
    )
}


export default ProductList

