import React,{ useState, useEffect , Component} from 'react'
import productList from './productList.json';
import { Link } from 'react-router-dom';
// import ProductDetails from './ProductDetails';
import './CSS/products.css';
// import { Container, Row, Col } from 'reactstrap';

// import images from './images';

// import { useState, useEffect } from 'react'
//src={`${product.image}.png`}

// style={{display:'inline-block',width:'25%',padding:'10px'}}
// xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 1 }}

function Products() {
    
    return (
        <div className='container' style={{display:'inline-block'}}>
            <div className='bread-crum' ><a href='/'>Home</a> > <span>Products</span></div>

            <div className='row' >
            {productList.map(product => 

                <div className='col-sm-3 col-xs-12 grid-blocks '>
                    { <img 
                    xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 1 }}
                    src={require('./images/'+`${product.image}.png`)} className='grid-img'/> }
                    <div className='content'> 
                        <span className='title'>  Prod :  {product.name} <br></br></span> 
                    </div>
                    <Link to={'/productdetails'} props={product}> 
                        <span>View</span>
                    </Link>
                </div>
                )}
                {/* <div  className='col-sm-12 col-xs-6'>Test123</div>
                <div  className='col-sm-12 col-xs-6'>Test123</div>
                <div  className='col-sm-12 col-xs-6'>Test123</div> */}
            </div>
        </div>
    );
}

export default Products;
