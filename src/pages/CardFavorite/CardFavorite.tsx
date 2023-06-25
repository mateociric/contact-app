import React, { useContext } from 'react';
import Card from 'components/Card/Card';
import 'pages/CardFavorite/CardFavorite.scss'
import ContactCard from 'model/model-card';
import ctxStoreValues from 'store/store-context';

function CardFavorite() {
    const ctxValues = useContext(ctxStoreValues);
    
    const filteredCards = ctxValues.values.usersList.filter(el => {
        return el.isFavorite;
    });
    const cardsInFavorite = filteredCards.map((el) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={el.id}
        />
    });
    //if card exists inside favorite page
    const favoriteFull = <section className='dashboard-full grid'> {cardsInFavorite} </section>;
    const favoriteEmpty = <section className='dashboard-empty'>NO SELECTED CARDS</section>

    return (
        <>
            {cardsInFavorite.length ? favoriteFull : favoriteEmpty}
        </>
    )
}

export default CardFavorite;
