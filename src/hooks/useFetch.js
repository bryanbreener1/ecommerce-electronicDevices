import axios from "axios"
import { useState } from "react"

const useFetch = (baseurl) => {

    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    function getApi(path){
        const url = `${baseurl}${path}`
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)}
            )
            .finally(()=>{
                setIsLoading(false)
            })
    }

    function postApi(path, data){
        const url = `${baseurl}${path}`
        axios.post(url, data)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }


    return [infoApi, getApi, hasError, isLoading, postApi]
}
export default useFetch

