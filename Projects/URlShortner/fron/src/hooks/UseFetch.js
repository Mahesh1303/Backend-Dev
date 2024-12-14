import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseFetch(urllink, dependencyFn) {
    const [data, setData] = useState([])
    const [err, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchurl = async () => {
            setLoading(true)
            try {
                const response = await axios.get(urllink)
                if (response) {
                    setData(response.data)
                    setError("")
                } else {
                    setError("Error in fetching")
                }
            } catch (e) {
                console.log(e)
                setError("An error occurred while fetching data")
            } finally {
                setLoading(false)
            }
        }

        fetchurl() 
    }, [dependencyFn])  // Only depend on the URL

    return {
        data,
        err,
        loading
    }
}

export default UseFetch