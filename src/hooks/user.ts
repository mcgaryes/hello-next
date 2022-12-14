import {useEffect} from 'react'
import Router from 'next/router'
import {User} from "@/types/user";
import useSWR from 'swr'
import {getIronSession} from "iron-session";

interface UseUserProps {
    redirectTo: string
    redirectIfFound: boolean
}

export default function useUser(props: Partial<UseUserProps> = {}) {

    const {
        data: user,
        mutate: mutateUser
    } = useSWR<User>('/api/user')

    const {
        redirectTo,
        redirectIfFound
    } = props;

    useEffect(() => {

        // if no redirect needed, just return (example: already on /dashboard)
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
        if (!redirectTo || !user) {
            return
        }

        if (
            // If redirectTo is set, redirect if the user was not found.
            (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
            // If redirectIfFound is also set, redirect if the user was found
            (redirectIfFound && user?.isLoggedIn)
        ) {
            Router.push(redirectTo)
        }

    }, [user, redirectIfFound, redirectTo])

    return {
        user,
        mutateUser
    }

}
