import {useEffect} from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const useAuth =({redirectTo = false, redirectIfFound=false})=>{
    const {data:user, mutate:mutateUser}= useSWR(`${process.env.API_URI}/auth/login`)
    useEffect(() => {
        if(!redirectTo || !user )
        return () => {
            if((redirectTo && !redirectIfFound && !user.isLogedin) || (redirectIfFound && user.isLogedin) ){
                Router.push(redirectTo)
            }
        }
    }, [user, redirectTo, redirectIfFound])
    return{user, mutateUser}
}

export default useAuth