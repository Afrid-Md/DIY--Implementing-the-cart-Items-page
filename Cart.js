import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import cartCntx from '../../Store/cartContext'
import { useContext } from 'react'
export default function Cart(props){
    const caryCntx=useContext(cartCntx)
    const cartItems=(<ul className={classes['cart-items ']}>
        {caryCntx.items.map((item)=>(
            <li>{item.name}</li>
        ))
        }   
    </ul>)
    return(
        <Modal>
            <h3>{cartItems}</h3>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>200</span>
            </div>
            <div className={classes.actions}> 
                <button className={classes['button-alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}