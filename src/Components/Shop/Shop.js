import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
   const {products, addToCart} = props;
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(pd => <Product 
                    product = {pd} 
                    key={pd.id}
                    addToCart={addToCart}
                    ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart:  addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);
// same this is one line bellow
// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);