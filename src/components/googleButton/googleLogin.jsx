import { GoogleLogin } from "react-google-login";

const clientId =
  "1065255482933-3pgtuvdlckvr8s4uo1ecko09gm2blo9s.apps.googleusercontent.com";

function googleLogin() {
    const onSuccess = async (GoogleResponse) => {
        console.log('clicked')
        console.log("Login Success: currentUser:", GoogleResponse.profileObj);
      };
    
      const onFailure = (response) => {
        console.error("Login failed: res:", response);
      };
  return (
    <div className="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default googleLogin();