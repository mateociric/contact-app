import React, { useContext, useEffect } from 'react';
import 'pages/CardDashboard/CardDashboard.scss';
import CreateCard from 'components/FirstCard/FirstCard';
import Card from 'components/Card/Card';
import ContactCard from 'model/card';
import ctxStoreValues from 'store/context-store';

function Dashboard() {
    const ctxValues = useContext(ctxStoreValues);

    return (
        <section className='card-dashboard'>
            <CreateCard />
            {ctxValues.listUsers.map((el, index) => {
                return <Card userInfo={new ContactCard(el)} key={index} />
            })}
        </section>
    )
}

export default Dashboard;
