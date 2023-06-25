import React, { useContext, useEffect, useMemo } from 'react';
import FirstCard from 'components/FirstCard/FirstCard';
import Card from 'components/Card/Card';
import 'pages/CardDashboard/CardDashboard.scss';
import ContactCard from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import DB_OPERATIONS from 'utility/db';

function CardDashboard() {
    const ctxValues = useContext(ctxStoreValues);
    //Fetch data only once, when app is started
    useEffect(() => {
        if (!ctxValues.values.isAppRunFirstTime) {
            DB_OPERATIONS.loadUsersList(ctxValues);
        }
    });
    const cardsInDashboard = useMemo(() => {
        return ctxValues.values.usersList.map((el) => {
            return <Card
                userInfo={new ContactCard(el)}
                key={el.id}
            />
        });
    }, [ctxValues.values.usersList])
    const filteredCards = useMemo(() => {
        return ctxValues.values.usersList.filter((el) => {
            return (el.firstName + el.lastName).toLowerCase().startsWith(ctxValues.values.searchBarValue.toLowerCase());
        });
    }, [ctxValues.values.usersList, ctxValues.values.searchBarValue])
    const cardsInDashboardFiltered = useMemo(() => {
        return filteredCards.map((el) => {
            return <Card
                userInfo={new ContactCard(el)}
                key={el.id}
            />
        });
    }, [filteredCards])

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
