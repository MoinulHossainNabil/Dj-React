class Auth {
    constructor(props) {
        super(props)
    
        this.state = {
             isUserAuthenticated: false
        }
    }
    
    isAuthenticated() {
        this.isUserAuthenticated
    }
    login() {
        this.state.isUserAuthenticated = true
    }
    logout() {
        this.state.isUserAuthenticated = false
    }
}
export default Auth
