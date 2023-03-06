import React, { useContext } from 'react';
import Card from 'components/Card/Card';
import ContactCard from 'model/model-card';
import ctxStoreValues from 'store/store-context';

function CardFavorite() {

    const ctxValues = useContext(ctxStoreValues);

    const filteredCards = ctxValues.usersList.filter(el => {
        return el.isFavorite;
    });
    
    const cardsInFavorite = filteredCards.map((el) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={el.id}
        />
    });

    return (
        <section className='dashboard'>
            {cardsInFavorite}
        </section>
    )
}

export default CardFavorite;
