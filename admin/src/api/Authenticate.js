class Authenticate{
    isAdminLogin() {
        let role = sessionStorage.getItem("role");
        return role !== 'admin';
    }
    isRecepLogin() {
        let role = sessionStorage.getItem("role");
        return role === 'reception';
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
    }
    registerAdmin(data) {
        sessionStorage.setItem("authenticatedUser", data);
        sessionStorage.setItem("role", "admin");
        console.log("Successful Login");
    }
    registerReception(data) {
        sessionStorage.setItem("authenticatedUser", data);
        sessionStorage.setItem("role", "reception");
        console.log("Successful Login");
    }

}

export default new Authenticate;