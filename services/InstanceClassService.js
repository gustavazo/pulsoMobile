import CRUDService from "./CRUDService";

class InstanceClassService extends CRUDService {
   constructor() {
      super("classe-instances");
   }
}

export default new InstanceClassService();