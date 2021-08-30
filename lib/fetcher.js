import axios from 'axios'

const Fetcher = (args) => axios({...args}).then(res=>{return res.data}).catch(err=>{err.response})

export default Fetcher