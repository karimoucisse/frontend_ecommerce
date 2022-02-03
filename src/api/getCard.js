   const getCard = async _id => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/card/${_id}`, {
      credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
  
    const card = await response.json()
    return card
  }
  
  export default getCard
