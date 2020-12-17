import React, { Component } from 'react';
import ButtonAdd from './ButtonAdd';
import ListPhone from './ListPhone';



export default function BoxPhone(props) {
    return (
        <div className="container ">
            <h1 className="card text-center alert alert-dark">Phone Book Apps</h1>
            <ButtonAdd />
            <br />
            <ListPhone />
        </div>
    )
}

