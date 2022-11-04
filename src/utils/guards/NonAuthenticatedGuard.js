// Component function: if user is logged,
// must have no access to login and register pages.
// If trying to access them.

import {getLoggedUser} from "../http-utils/user-requests";
import {Navigate} from "react-router-dom";

// Accept some props, of these props we will need "children"
// in order to know which component we want to render.
export function NonAuthenticatedGuard({ children }) {
    // get the logged-in user
    const loggedUser = getLoggedUser();

    // if user is logged, redirect only to nested routes in AuthenticatedRoutes
    // if user exists then is logged, we do not want the users to get to the login/register pages.
    if(loggedUser) {
        return <Navigate to="/users-list"/>
    }
    return children;
}