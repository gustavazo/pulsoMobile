import ABMService from "./CRUDService";

class ClaseService extends ABMService {
  constructor() {
    super("classe-instances")
  }
}

export default new ClaseService();
