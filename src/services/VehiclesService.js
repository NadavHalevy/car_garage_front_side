import axios from 'axios';

const VEHICLES_BASE_URL = "http://localhost:8080/vehicles/getAll";
const ADD_VEHICLES_BASE_URL = "http://localhost:8080/vehicles/add";


class VehiclesService {

    getVehicles() {
        return axios.get(VEHICLES_BASE_URL);
    }

    addVehicles(vehicle) {
        return axios.post(ADD_VEHICLES_BASE_URL, vehicle);
    }
}

export default new VehiclesService();