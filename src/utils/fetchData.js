import axios from "./customAxios"

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url)
        // console.log(response)
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
        return {error:error.message}
    }
}
