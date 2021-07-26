import HTTPService from "../screens/services/HTTPService";

class AuthService extends HTTPService {
    currentUser = null;

    async login(email, password) {
        const session = await this.api.post("/users/login", { email, password });
        localStorage.setItem("jwt", session.data.token);
        this.setDefaultHeader("Authorization", "Bearer " + session.data.token);

        const user = await this.api.get("/users/me");
        localStorage.setItem("currentUser", JSON.stringify(user.data));
        this.currentUser = JSON.stringify(user.data);

        return user.data;
    }

    getStoredUser() {
        localStorage.getItem("currentUser");
    };

    getCurrentUser() {
        if (!this.currentUser) {
            this.currentUser = this.getStoredUser();
        }

        return this.currentUser;
    }
}

export default new AuthService();