import React, {useContext, useEffect} from 'react';

import { GlobalContext } from '../context/GlobalState';

const Dashboard = () => {
    const {user, getUser} = useContext(GlobalContext);

    useEffect(() => {
        getUser("jkobayashi@ataway.com");
    }, [getUser]);

    return (
        <div>
            <p>{user.name}</p>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
