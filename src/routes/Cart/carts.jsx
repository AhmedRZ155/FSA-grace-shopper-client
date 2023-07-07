import './carts.css';
import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  const { cart } = useOutletContext();

  return (
    <div className='cart-container'>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='cart-items'>
          {cart.map((item) => (
            <li key={item.id} className='cart-item'>
              <div className='item-info'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
