import { useState } from "react"
import Cart from "./Components/Cart"

function ShopingCart(){

    const [cart,setCart] = useState(0)
    const [count, setCount] = useState(0)


    
    
    return (
        <div className="w-full sm:h-screen h-full relative ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-4 justify-items-center">
                <Cart 
                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/k/a/-original-imah2p8n4fgtpjzb.jpeg?q=70"  
                    price="12999" 
                    desc="realme 12*5g (Twilight purple 128 gb)"  
                    onAddCart={(price)=>setCart((prevBalacne)=> prevBalacne + price)} 
                    onDeleteCart = {(price)=>setCart((prevBalacne)=>prevBalacne-price)}  
                    count={count}  
                    onAddCount = {(count)=>setCount((count)=>count+1)}
                    onDeleteCount = {(count)=>setCount((count)= (count-1))}
                />

                <Cart 
                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/k/a/-original-imah2p8n4fgtpjzb.jpeg?q=70"  
                    price="12999" 
                    desc="realme 12*5g (Twilight purple 128 gb)"  
                    onAddCart={(price)=>setCart((prevBalacne)=> prevBalacne + price)} 
                    onDeleteCart = {(price)=>setCart((prevBalacne)=>prevBalacne-price)}    
                    count={count}  
                    onAddCount = {(count)=>setCount((count)=>count+1)}
                    onDeleteCount = {(count)=>setCount((count)= (count-1))}
                />
                <Cart 
                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/k/a/-original-imah2p8n4fgtpjzb.jpeg?q=70"  
                    price="12999" 
                    desc="realme 12*5g (Twilight purple 128 gb)"  
                    onAddCart={(price)=>setCart((prevBalacne)=> prevBalacne + price)} 
                    onDeleteCart = {(price)=>setCart((prevBalacne)=>prevBalacne-price)}
                    count={count}  
                    onAddCount = {(count)=>setCount((count)=>count+1)}
                    onDeleteCount = {(count)=>setCount((count)= (count-1))}    
                />
                <Cart 
                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/k/a/-original-imah2p8n4fgtpjzb.jpeg?q=70"  
                    price="12999" 
                    desc="realme 12*5g (Twilight purple 128 gb)"  
                    onAddCart={(price)=>setCart((prevBalacne)=> prevBalacne + price)} 
                    onDeleteCart = {(price)=>setCart((prevBalacne)=>prevBalacne-price)}    
                    count={count}  
                    onAddCount = {(count)=>setCount((count)=>count+1)}
                    onDeleteCount = {(count)=>setCount((count)= (count-1))}
                />

                <Cart 
                    image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/k/a/-original-imah2p8n4fgtpjzb.jpeg?q=70"  
                    price="12999" 
                    desc="realme 12*5g (Twilight purple 128 gb)"  
                    onAddCart={(price)=>setCart((prevBalacne)=> prevBalacne + price)} 
                    onDeleteCart = {(price)=>setCart((prevBalacne)=>prevBalacne-price)}  
                    count={count}  
                    onAddCount = {(count)=>setCount((count)=>count+1)}
                    onDeleteCount = {(count)=>setCount((count)= (count-1))}
                />
            </div>

            <div 
            className="w-full h-12 bg-pink-400 absolute sm:bottom-0 flex items-center justify-around px-1.5 rounded ">
            <p> Total amount {cart}</p>  <p>Item Added {count}</p>
            </div>
        </div>
    )
}
export default ShopingCart