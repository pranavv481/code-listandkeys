import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Daina',
            age: 30,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Clark',
            age: 30,
            skill: 'Node'
        },
    ]
    const personlist = persons.map(person =>
        <Person key={person.id} person={person} />
    )
    return (
        <div>{personlist}
        </div>
    )
}

export default NameList
