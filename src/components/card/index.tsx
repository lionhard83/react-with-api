import React, { CSSProperties } from "react";
import { User } from "../../models/User";
import './index.css'

const generateFonySizeByNameAndSurname = (name: string, surname: string) => {
    const {length} = `${name} ${surname}`;
    return 30 - length;
}

const Card = (props: {user: User}) => {
    const user = props.user;
    const {name, surname, imgUrl, age} = user;
    const styles: CSSProperties = {
        color: surname === 'Leonardi' ? 'red' : 'green',
        cursor: "pointer",
        fontWeight: 'bold',
        fontSize: generateFonySizeByNameAndSurname(name, surname)
    }
    return (
        <div className={"card"} >
        <img src={imgUrl} alt={name} />
        <h3 style={styles}>{name} {surname}</h3>
        <h4>age: {age}</h4>
        </div>
    )
}

export default Card;