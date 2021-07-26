<<<<<<< HEAD
import axios from "axios";
import config from "../config";

class ABMService {
  nombreRecurso = "";
  http = null;

  // recibimos en el constructor el nombre de un recurso
  // representa un modelo en la api
  constructor(recurso = "") {
    this.nombreRecurso = recurso;

    this.http = axios.create();
    this.http.defaults.baseURL = config.backendUrl + this.nombreRecurso;
  }

  async find(filter = {}) {
    return await this.http.get("", {
      params: {
        filter
      }
    });
  }

  async findById(id) {
    return await this.http.get(`/${id}`)
  }

  async create(data) {
    return await this.http.post("", data);
  }

  async update(id, data) {
    return await this.http.put("/" + id, data);
  }

  async delete(id) {
    return await this.http.delete("/" + id);
  }

  async fetchLinked(modelId, targetName) {
    return await this.http.get("/" + modelId + "/" + targetName);
  }

  async link(modelId, targetName, targetId) {
    return await this.http.put("/" + modelId + "/" + targetName + "/rel/" + targetId);
  }

  async unlink(modelId, targetName, targetId) {
    return await this.http.delete("/" + modelId + "/" + targetName + "/rel/" + targetId);
  }
};

export default ABMService;
=======
import HTTPService from "./HTTPService";

class CRUDService extends HTTPService {
    resourceName = "";

    constructor(resourceName) {
        super();

        this.resourceName = resourceName;
        this.setDefaultBaseUrl(resourceName);
    }

    async find(filter) {
        return await this.api.get("", {
            params: {
                filter: filter
            }
        });
    }

    async findById(id) {
        return await this.api.get("/" + id);
    }

    async remove(id) {
        return await this.api.delete(id);
    }

    async create(newModel) {
        return await this.api.post("", newModel);
    }

    async update(id, newModel) {
        return await this.api.put("/" + id, newModel);
    }

    async link(id, targetModel, fk) {
        return await this.api.patch(`${id}/${targetModel}/link/${fk}`);
    }

    async unlink(id, targetModel, fk) {
        return await this.api.delete(`${id}/${targetModel}/unlink/${fk}`);
    }

    async findLinked(id, targetModel, filter) {
        return await this.api.get(`${id}/${targetModel}`, {
            params: {
                filter
            }
        });
    }
}

export default CRUDService;
>>>>>>> main
