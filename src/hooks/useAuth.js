import axios from "axios"

const useAuth = (urlbase) => {
    const createUser = (path, data) => {
        const url = `${urlbase}${path}`
        axios.post(url, data)
            .then(res=>console.log(res))
            .catch(err =>console.log(err))
    }

    const loginUser = (path, data, setIsLogged) =>{
        const url = `${urlbase}${path}`
        axios.post(url, data)
            .then(res=>{
                localStorage.setItem('user', JSON.stringify(res.data.user))
                localStorage.setItem('token', `${res.data.token}`)
                setIsLogged(true)
            })
            .catch(err =>console.log(err))
    }

    const logOut = (setIsLogged) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setIsLogged(false)
    }
    return {createUser, loginUser, logOut}
}


export default useAuth