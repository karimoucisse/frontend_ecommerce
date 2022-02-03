const getProducts = async (sort, filter, categories) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products?sort=${sort}&filter=${filter}&categories=${categories}`, {
      credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
  
    const products = await response.json()
    return products
  }
  
  export default getProducts