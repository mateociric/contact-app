import React, { useContext } from 'react';
import 'pages/CardDashboard/CardDashboard.scss';
import FirstCard from 'components/FirstCard/FirstCard';
import Card from 'components/Card/Card';
import ContactCard from 'model/model-card';
import ctxStoreValues from 'store/store-context';

function CardDashboard() {

    const ctxValues = useContext(ctxStoreValues);

    const cardsInDashboard = ctxValues.values.usersList.map((el) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={el.id}
        />
    });

    const filteredCards = ctxValues.values.usersList.filter((el) => {
        return (el.firstName + el.lastName).toLowerCase().startsWith(ctxValues.values.searchBarValue.toLowerCase());
    })

    const cardsInDashboardFiltered = filteredCards.map((el) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={el.id}
        />
    });

    return (
        <section className='dashboard grid'>
            <FirstCard />
            {ctxValues.values.searchBarValue ? cardsInDashboardFiltered : cardsInDashboard}
        </section>
    )
}

export default CardDashboard;
