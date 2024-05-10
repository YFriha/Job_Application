// refresh.js

export async function refresh(setRefreshToken, setAccessToken) {
    const apiUrl = process.env.REACT_APP_API_URL;

    const response = await fetch(`${apiUrl}token/refresh/`);
    const json = await response.json();
    console.log(json);
    
    // Update state with new tokens
    setRefreshToken(json.refresh_token);
    setAccessToken(json.access_token);
  
    // Store tokens in localStorage
    localStorage.setItem("accessToken", json.access_token);
    localStorage.setItem("refreshToken", json.refresh_token);
  
    return json;
}
