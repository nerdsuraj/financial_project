import React from 'react'

const ProfileCards = ({image_link, name, role, description}) => {
  return (
    <div className="cardWrapper">
        <div className="imgWrapper">
            <img src={image_link} width="100%" />
        </div>
        <div className="descriptionWrapper">
            <h2>{name}</h2>
            <h6 style={{fontStyle:"italic",
                        textDecorationLine:"undeline",
                        textDecorationColor:"lightslategray",
                        textDecorationOffset:"4px"}}>{role}</h6>
            <p style={{fontStyle:"italic"}}>{description}</p>
        </div>
    </div>
  )
}

export default ProfileCards;