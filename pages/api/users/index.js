import useSWR from 'swr'
import Fetcher from '../../../lib/fetcher'

export const useUser = (id) =>{
    const getUser = () =>Fetcher({
        method:'GET',
        url:`${process.env.API_URL}/users/`,
        params:{id : id}
    });
    const {data, mutate, error} = useSWR(id?'get user':null, getUser, {refreshInterval: 100 })
    const loading = !data & !error
    return {
        user: data,
        mutateUser: mutate,
        errUser: error,
        isLoggedIn: !data ? true : false,
        loadUser: loading
    }
}