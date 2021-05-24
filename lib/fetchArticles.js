import axios from 'axios'

const getArticles = async(url) => axios.get(url).then(res => res.data)
const searchArticles = async(url)=> axios.get(url).then(res => res.data)
const addArticles = async(url, data, cb, cb2)=>{
  cb(true)
  axios.post(url, data).then(result=>{
      cb(false)
      alert(result.data.message)
  }).catch(error =>{
      cb(false)
      alert('Failed')
  })
}

export { getArticles, searchArticles, addArticles }