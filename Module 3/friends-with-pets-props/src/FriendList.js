//In <FriendList />, .map() through an array of friends. Each friend will have an array of pets.

import React from "react"
import friendData from "./friendData"
import Friend from "./Friend"


function FriendList() {
    const friendComponent = friendData.map(item => <Friend  key={item.name} friend={item} />)

    return(
        friendComponent
    )
}


export default FriendList