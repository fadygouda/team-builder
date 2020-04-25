import React from 'react'

const ListNames = ({teamNames}) => {
    console.log(teamNames)

    return (
        <div>
            {teamNames.map(teamMember => (
                <div key={teamMember.id}>
                    
                    <h2>{teamMember.name}</h2>
                    <p> {teamMember.email}</p>
                    <p> {teamMember.role}</p>
                </div>
            ))}
        </div>
    );
};

export default ListNames