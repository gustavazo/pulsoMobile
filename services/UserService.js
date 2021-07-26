import CRUDService from "./CRUDService";

class UserService extends CRUDService {
    constructor() {
        super("users");
    }
}

export default new UserService();