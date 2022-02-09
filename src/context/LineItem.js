import { createContext, useState, useEffect } from "react"

// creation de mon context 
const LineItemContext = createContext({})

// function qui  recupère les informartion de mon fetch lineitem et le stock dans un state 
// que je met dans value pour export dans toute mon aplication
const LineItemContextProvider = props => {
    // je stock la valeur de mon fetch
    const [lineItems, setLineItems] = useState()
    // je stock l'url de mon fetch dans une variable
    const API= "http://localhost:5000/lineItems"
    
    useEffect(() => {
        getLineItem() 
    },[])
    // function qui fetch sur mes line item
    const getLineItem = async () => {
        const response = await fetch(`${API}`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        setLineItems(data)
    }
    //  dans cette variable value je met mon state line item et celui qui permet de stocker dedans 
    const value = {
        lineItems,
        setLineItems,
    }
    // faut faire un return  context avec les value 
    return (
        <LineItemContext.Provider value = {value}>
            {props.children}
        </LineItemContext.Provider>
    )
}
// et la j'export mon context 
export {
    LineItemContextProvider,
    LineItemContext
}