const getCategories = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`, {
      credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
  
    const categories = await response.json()
    return categories
  }
  
  export default getCategories