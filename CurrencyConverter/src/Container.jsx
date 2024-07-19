import { useState } from "react"
import useCurrencyInfo from "./Hooks"
import InputBox from "./InputBox"

function Container(){

    const [to, setTo] = useState("inr")
    const [from,setFrom] = useState("usd")
    const [amount,setAmount] = useState()
    const [convertedAmount,setConvertedAmount] = useState()

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const  convert = ()=>{
        if (amount){
            setConvertedAmount(amount * currencyInfo[to])
        }
    }

    const swap = ()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        convert()
    }
    
    return (
        <div 
            className="w-full h-screen bg-orange-400 flex items-center justify-center bg-cover bg-no-repeat"
            style={{backgroundImage:`url(https://images.pexels.com/photos/1144243/pexels-photo-1144243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
        >
            <form onSubmit={handleSubmit}>
            <div className="p-5 border-2 rounded">
                <div className="w-full max-w-md mx-auto mb-1">
                    <InputBox 
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setAmount(amount)}
                        selectCurrency = {from}
                        onAmountChange={(amount)=>setAmount(amount)}
                    />
                </div>

                    <button 
                        type="button" 
                        className="absolute rounded-lg p-1.5 bg-blue-500 -translate-x-1/2 -translate-y-1/2 left-1/2 border" 
                        onClick={swap}
                    >
                        Swap
                    </button>

                <div className="w-full max-w-md mx-auto mt-1">
                <InputBox 
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setTo(currency)}
                        selectCurrency = {to}
                    />
                </div>

                <button type="submit" className="w-full py-1.5 bg-blue-500 mt-2 rounded">Convert {from.toUpperCase()} to  {to.toUpperCase()}</button>
            </div>
            </form>
        </div>
    )
}

export default Container