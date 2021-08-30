import useSWR from "swr"
import Fetcher from "../../../lib/fetcher"

export const fetcharticle = (where) => {
  const getArticle = () => Fetcher({
    method : 'GET',
    url: `${process.env.API_URL}/article`,
    params: {
      limit: where.limit,
      offset : where.offset
    },
  })

  const { data, mutate, error } = useSWR('getAllArticle', getArticle, {refreshInterval: 1000 })
  const loading = !data & !error

  return {
    article: data,
    mutateArticle: mutate,
    errarticle: error,
    loadarticle: loading
  }
}
export const searchArticle = (where, initialData) =>{
  const searchingArticle = async() => await Fetcher({
    method : 'GET',
    url : `${process.env.API_URL}/article/search`,
    params : {
      key : where.key
    }
  })

  const {data, mutate, error} = useSWR(where.key?'search article':null, searchingArticle, initialData)
  const loading = !data & !error

  return{
    article: data,
    mutateArticle: mutate,
    errarticle: error,
    loadarticle: loading
  }
}
export const getArticle = (where)=>{
  const getArticle = () =>Fetcher({
    method : 'GET',
    url : `${process.env.API_URL}/article/`,
    params:{
      id : where.id
    }
  })

  const {data, mutate, error} = useSWR(where.id?'get article':null, getArticle, {})
  const loading = !data & !error

  return {
    article: data,
    mutateArticle: mutate,
    errarticle: error,
    loadarticle: loading
  }
}