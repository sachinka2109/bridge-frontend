import React from 'react'

function ListRenderingHero({hero}) {
  return (
    <div>
        <h5>I am {hero.name} and skills are {hero.skill}</h5>
    </div>
  )
}

export default ListRenderingHero