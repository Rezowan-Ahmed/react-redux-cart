import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    
    return (
        <div style={{border:'1px solid blue', margin:'10px auto', padding:'10px', borderRadius:'5px', width:'50%'}}>
            <h5>{product.name}</h5>
            <button 
                onClick={() => addToCart(product.id, product.name)}
            >Add to Cart</button>
        </div>
    );
};


export default Product;