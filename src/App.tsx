import { useState } from 'react'
import './App.css'
import State from  "./data/states"

function App() {
  const [count, setCount] = useState(0)
 const[card, setCard]=useState(State)


 function getItemImagePath(item) {
  let id = String(item.id).padStart(3, '0')
  return `dist/assets/icons/${id}-${item.name}.svg`
 
}

  return (
    <div className="App">
  
  <body>
   <header id="store">
      <h1>Grocero</h1>
      {State.map(cards =>(<ul className="item-list store--item-list">
       <li><div className=".store--item-icon"><img src={getItemImagePath(cards)} /></div>
           <button>Add to cart ({cards.stock})</button></li>
   </ul>))}
    </header> 

    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
        {State.map(cards =>(
        <li><img className="cart--item-icon" src={getItemImagePath(cards)} alt="carrot"/>
        <p>carrot</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">{cards.inCart}</span>
        <button className="quantity-btn add-btn center">+</button>
        </li>
        ))}</ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
  

</body>Name

    </div>
  )
}

export default App
