import React from 'react'
import ListRenderingHero from './ListRenderingHero'

function ListRendering() {
    const names = ['Sachin','Shubham','Alice']
    let heroes = [
        {
            id:'1',
            name: 'Invoker',
            skill: 'Sun Strike',
        },
        {
            id:'2',
            name: 'Slardar',
            skill: 'Slitherin Crush',
        },
        {
            id:'3',
            name: 'Lich',
            skill: 'Forst Blast',
        },
        {
            id:'4',
            name: 'Lina',
            skill: 'Dragon Slave',
        },
        {
            id:'5',
            name: 'Juggernaut',
            skill: 'Omni Slash',
        },
    ]
    // const list = heroes.map(hero => <ListRenderingHero key={hero.id} hero = {hero}/>)
    const list = names.map((name,i) => <h1 key={i}>{name}</h1>)
  return (
    <div>
        {list}
    </div>
  )

}

export default ListRendering