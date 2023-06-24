import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import './checkout-item.styles.scss'


const CheckoutItem = ({checkoutItem}) => {
    const {id ,name, price, imageUrl, quantity} = checkoutItem
    const {changeQuantity, removeItem} = useContext(CartContext)
    
    const addQuantity = () => {     
        changeQuantity(id , "Add")
    }

    const subQuantity = () => {     
        changeQuantity(id, "Subtract")
    }

    const removeItemHandler = () => {
        removeItem(id)
    }

return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>       
        <span className='name'>{name}</span> 
        <span className='quantity'>
        <div className='arrow' onClick={subQuantity} > 
                &#10094;
            </div>
        <span className='value'>
            {quantity}
            </span>
            <div className='arrow' onClick={addQuantity}> 
                &#10095;
            </div>
        </span>
        <span className='price'>{quantity * price}</span>
        <button className='remove-button' onClick={removeItemHandler}>&#10005;</button>
        
    </div>
)
}

export default CheckoutItem