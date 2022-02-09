export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        console.log("Header Token: ", user.accessToken);
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}