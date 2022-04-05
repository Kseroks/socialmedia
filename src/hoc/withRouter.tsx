import React from "react";
import { useMatch } from 'react-router-dom';

const withRouter = (Component:any) => {
    let RouterComponent = (props:any) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match} />;
    }
    return RouterComponent;
}

export default withRouter;