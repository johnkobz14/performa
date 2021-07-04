import React, {useContext, useEffect} from 'react';

import { UserContext } from '../context/UserProvider';

const Dashboard = () => {
    const {user, getUser} = useContext(UserContext);

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
