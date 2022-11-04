// the component will have props,
// the props will be the things we pass as parameters to the routings

// conditional rendering --
import {Navigate, useNavigate} from "react-router-dom";
import {getLoggedUser} from "../http-utils/user-requests";

export function AuthenticatedRoute({ children }) {
    // children - comes as props of the "AuthenticatedRoute" function.
    // These props come where we define the route(AuthenticatedRoute) in App.js.
    const user = getLoggedUser();
    // console.log(props);

    if(!user) {
        return <Navigate to="/login" />;
    }
    // return the component we want to render
    // return <props.element {...props} />;
    return children;
}