import React from 'react';
import { useParams } from 'react-router-dom';
import 'pages/CardModifie/CardModifie.scss';

function CardModifie() {
    const { id } = useParams()
    return <>CARD MODIFIE {id}</>
}

export default CardModifie;
