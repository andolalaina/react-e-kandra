import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Job(props) {
    let {id, title, experience, type, mode, uploader, uploadDate, deadline} = props;
    // const DetailButton = (<Button variant="secondary" size="sm">Détails {true && ">"}</Button>);
    
    return(
        <div className="p-3 my-2 d-flex flex-row justify-content-between" style={{backgroundColor: "white"}}>
            <div className="d-flex flex-row justify-content-between">
                <div className="avatar"></div>
                <div className="description">
                    <div className="text-bold">
                        {title}
                        <Badge bg="secondary" className="ms-5">{experience} {experience ? "d'expériences" : "Aucune expérience"}</Badge>
                        <Badge bg="secondary" className="ms-1">{type}</Badge>
                        <Badge bg="secondary" className="ms-1">{mode}</Badge>
                        <Badge bg="danger" className="ms-1">Date limite : {deadline}</Badge>
                    </div>
                    <div className="form-text">
                        {uploader} | Publié le {uploadDate}
                    </div>
                </div>
            </div>
            <div>
                <NavLink to={"/jobs/" + id}>
                    <Button variant="secondary" size="sm">Détails {true && ">"}</Button>
                </NavLink>
            </div>
        </div>
    )
}