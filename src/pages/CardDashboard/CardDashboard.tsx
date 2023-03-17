import React, { useContext } from 'react';
import FirstCard from 'components/FirstCard/FirstCard';
import Card from 'components/Card/Card';
import 'pages/CardDashboard/CardDashboard.scss';
import ContactCard from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import DB_OPERATIONS from 'utility/db';

function CardDashboard() {
    const ctxValues = useContext(ctxStoreValues);
    //Fetch data only once, when app is started
    if (!ctxValues.values.isAppRunFirstTime) {
        DB_OPERATIONS.loadUsersList(ctxValues);
    }

    const cardsInDashboard = ctxValues.values.usersList.map((el) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={el.id}
        />
    });
    const filteredCards = ctxValues.values.usersList.filter((el) => {
        return (el.firstName + el.lastName).toLowerCase().startsWith(ctxValues.values.searchBarValue.toLowerCase());
    });
    const cardsInDashboardFiltered = filteredCards.map((el) => {
        return <Card
            userInfo={new ContactCard(el)}
            key={el.id}
        />
    });

    return (
        <>
            <section className='dashboard grid'>
                <FirstCard />
                {ctxValues.values.searchBarValue ? cardsInDashboardFiltered : cardsInDashboard}
            </section>
        </>
    )
}

export default CardDashboard;
