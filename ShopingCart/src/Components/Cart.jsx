import React from "react"
function Cart({
    image,
    price,
    desc,
    onAddCart,
    onDeleteCart,
    count,
    onAddCount,
    onDeleteCount,
})
{
    const [isAdded,setAdded] = React.useState(false)
    
    return (
            <div className="p-4 border-2 border-black rounded w-full max-w-64 grid gap-1.5">
                <img className="w-full rounded" src={image} alt="" />

                <p className="text-sm">{desc}</p>

                <p>{`${price} -/`}</p>

                <button 
                    onClick={
                        ()=> {
                            if(!isAdded){
                                onAddCart(Number(price))
                                setAdded((prev)=>!prev)
                                onAddCount(count)
                            }else{
                                onDeleteCart(Number(price))
                                setAdded((prev)=>!prev)
                                onDeleteCount(count)
                            }
                        }
                    }
                    className="bg-orange-500 py-1.5 px-2.5 rounded"
                    >
                    {!isAdded ? ("Buy") : ("Remove")}
                    
                </button>
            </div>

    )
}
export default Cart