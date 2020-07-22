import React from 'react'

function Badge(props) {
    return (
        <div>
            <h1>Badge:</h1>
            <p>Name:{props.badge.firstName}{props.badge.lastName}</p>
            <p>Phone Number:{props.badge.phone}</p>
            <p>Place of Birth:{props.badge.birth}</p>
            <p>Favorite Food:{props.badge.food}</p>
            <p>E-mail:{props.badge.email}</p>
            <textarea>{props.badge.about}</textarea>
        </div>
    )
}

export default Badge 