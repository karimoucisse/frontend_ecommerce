const getCartById = async (id) => {
    const response = await fetch(`http://localhost:5000/carts/${id}`, {
        credentials: 'include'
    })

    if (response.status >= 400) {
        throw response.stautusText
    }

    const data = await response.json()
    return data
}
export default getCartById