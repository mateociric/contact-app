import React, { useContext } from 'react';
import 'pages/CardDashboard/CardDashboard.scss';
import FirstCard from 'components/FirstCard/FirstCard';
import Card from 'components/Card/Card';
import ContactCard from 'model/model-card';
import ctxStoreValues from 'store/store-context';

function CardDashboard() {

    const ctxValues = useContext(ctxStoreValues);

    const cardsInDashboard = ctxValues.usersList.map((el, index) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={index}
        />
    });

    const filteringCards = ctxValues.usersList.filter(el => {
        return (el.name + el.surname).toLowerCase().startsWith(ctxValues.searchBarValue.toLowerCase());
    })

    const cardsInDashboardFiltered = filteringCards.map((el, index) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={index}
        />
    });

    return (
        <section className='dashboard'>
            <FirstCard />
            {ctxValues.searchBarValue ? cardsInDashboardFiltered : cardsInDashboard}
        </section>
    )
}

export default CardDashboard;
