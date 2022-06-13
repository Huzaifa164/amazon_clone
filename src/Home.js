import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
                className='home_image'
                src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
            />
            <div className='home_row'>
                <Product id="12321341" title='The lean startups: How Constant information Creates Ratically Successfull Business Paperback' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} />
                <Product id='49538094' title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' price={239.0} rating={4} image='https://m.media-amazon.com/images/I/51G7m-1kmsS._AC_SS130_.jpg' />
            </div>
            <div className='home_row'>
                <Product id='4903850' title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor' price={199.99} rating={3} image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' />
                <Product id='23445930' title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' price={98.99} rating={5} image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbSNWO5BAyJJuImmNe9Ud8NJ0qSFHR5RwrHRvuugnTwn0xG2aapQ2bzS02VkCXKGhCb2zDJyQYTG0&usqp=CAc' />
                <Product id='3254354345' title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' price={598.99} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' />
            </div>
            <div className='home_row'>
                <Product id='90829332' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' />
            </div>
        </div>
    </div>
  )
}

export default Home