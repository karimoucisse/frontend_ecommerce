const getCategory = async (_id, sort, filter) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/categories/${_id}?sort=${sort}&filter=${filter}`, {
      credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
  
    const category = await response.json()
    return category
  }
  
  export default getCategory