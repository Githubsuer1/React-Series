import { useId, useState } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency ,
    currencyDisabled,
    amountDisabled,
}) {

    // unique id to identify and element
    const amountId = useId()

    return (

        //container
        <div className="w-full flex gap-2 border-2 rounded p-4 bg-white/40 ">

            {/* div to contain label and input field */}

            <div className="w-1/2 flex flex-col flex-wrap gap-2 ">

                <label 
                    className="text-sm" 
                    htmlFor={amountId}>
                    {label}
                </label>

                <input 
                    className="rounded w-full p-1" 
                    id={amountId} 
                    type="number" 
                    value={amount} 
                    placeholder="Amount"
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisabled}
                />
            </div>

            <div className="w-1/2 flex flex-col gap-2">
            
                <p className="text-sm ">Currency Type</p>
                <select 
                    className="w-full rounded p-1"
                    value={selectCurrency} 
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} 
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency)=> (
                        <option key={currency} value={currency} > {currency}  </option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default InputBox