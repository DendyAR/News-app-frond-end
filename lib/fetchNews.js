import axios from 'axios'


const getAllArticle = async(url) => axios.get(url).then(res => res.data)
const searchArticle = async(url)=> axios.get(url).then(res => res.data)
const addArticle = async(url, data, cb, cb2)=>{
  cb(true)
  axios( 
  {
    method:'POST',
    url : `${url}`,
    data : data,
    headers : {
      'user-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpcnZhbmp1bmFpZGkyQGdtYWlsLmNvbSIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTYyMDcxNjcxN30.GokaoSEquCpsVZHaf4jmPwMlnnBBJb7C3gb8xgPhxzA'
    },
  }).then(result=>{
      cb(false)
      alert('success')
  }).catch(error =>{
      cb(false)
      console.log(error.message)
      alert('Failed', error)
  })
}

export { getAllArticle, searchArticle, addArticle }