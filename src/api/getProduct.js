const getProduct = async _id => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${_id}`, {
      credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
  
    const product = await response.json()
    return product
  }
  
  export default getProduct