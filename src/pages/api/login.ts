import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import {User} from "@/types/user";
import {sessionOptions} from "@/services/session/session-service";

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {

    const { username } = await req.body

    const user = { isLoggedIn: true, login: username, avatarUrl: "https://dummyimage.com/300x300/000/fff" } as User
    req.session.user = user
    await req.session.save()
    res.json(user)

}

export default withIronSessionApiRoute(loginRoute, sessionOptions)
