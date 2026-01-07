import React from 'react'

const ProductList = ( {cart,setCart}) => {

   const addItem = (price) => {
    setCart([...cart,price]);
   }
  return (
    <div>
      <button onClick={() => addItem(100)}>Add to 100</button>
      <button onClick={() => addItem(100)}>Add to 100</button>
    </div>
  )
}

export default ProductList