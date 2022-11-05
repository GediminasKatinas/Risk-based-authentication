import {useAuth0} from "@auth0/auth0-react";

function LoginButton(){
const{ loginWithRedirect } = useAuth0();

return(
    <button onClick={() => loginWithRedirect()}>log in</button>
)
};
export default LoginButton;