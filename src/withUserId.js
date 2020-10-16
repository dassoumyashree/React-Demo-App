import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { getDisplayName } from "recompose"

const withUserId = Component => {
    const NewComponent = ({ userId, ...props}) => {
        const [user, setUser] = useState(null)
        console.log('from', props, userId)
        useEffect(() => {
            axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`).then((res) => {
                setUser(res.data)
            })
        }, [])

        if (!user) return "Loading..."

        return <Component {...props} user={user} />
    }

    NewComponent.displayName = `WithUserId(${getDisplayName(Component)})`; 

    return NewComponent
}

export default withUserId

