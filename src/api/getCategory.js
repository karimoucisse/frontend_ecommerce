const getCategory = async _id => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/categories/${_id}`, {
      credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
  
    const category = await response.json()
    return category
  }
  
  export default getCategory