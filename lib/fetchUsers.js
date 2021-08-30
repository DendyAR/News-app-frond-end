import axios from 'axios'

const userLogin = async(url, data, cb, cb2) => {
    cb(true)
    axios.post(url, data).then(async(result)=>{
        cb(false)
        const response = await axios("api/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(result.data.data)
        });
        if (response.status ===  200) {
            return cb2.replace('/');
        }else{
            return response.message
        }
    }).catch(error => {
        cb(false)
        alert(error.message)
    })
}

const verifyUser = async()=>{
    const response = await axios('api/verify',{
        headers : { "Content-Type": "application/json" }
    })
    if(response.status === 200){
        return response.data.user
    }
}
const userLogout = async(cb)=>{
    const response = await fetch('api/logout',{
        method : 'GET',
        headers : { "Content-Type": "application/json" }
    })
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() => resolve(response),100)
    })
    let result = await promise
    if(result){
        cb.replace('/login')
    }
}
const userRegister = async(url, data, cb, cb2)=>{
    cb(true)
    axios.post(url, data).then(result=>{
        cb(false)
        alert(result.data.message)
    }).catch(error =>{
        cb(false)
        alert('Failed')
    })
}
export {userRegister, userLogin, verifyUser, userLogout}