import React from 'react';
export type Person = {
    name: string;
    surname: string;
}

const Title = ({person: {name, surname}}: {person: Person}) => {
    return <h1>Ciao {name}</h1>;
}

export default Title;