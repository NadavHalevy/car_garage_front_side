import axios from 'axios';

const VEHICLES_BASE_URL = "http://localhost:8080/vehicles/getAll";
const ADD_VEHICLE_BASE_URL = "http://localhost:8080/vehicles/add";
const GET_VEHICLE_BY_ID_BASE_URL = "http://localhost:8080/vehicles/getSingleVehicle"; 
const GET_VEHICLE_BY_LN_BASE_URL = "http://localhost:8080/vehicles/getSingleVehicleByLicenseNumber"; 
const UPDATE_VEHICLE_BASE_URL = "http://localhost:8080/vehicles/update";

class VehiclesService {

    getVehicles() {
        return axios.get(VEHICLES_BASE_URL);
    }

    addVehicles(vehicle) {
        return axios.post(ADD_VEHICLE_BASE_URL, vehicle);
    }

    getVehicleByID(id) {
        return axios.get(GET_VEHICLE_BY_ID_BASE_URL + "/" + id);
    }

    getVehicleByLicenseNumber(licenseNumber) {
        return axios.get(GET_VEHICLE_BY_LN_BASE_URL + "/" + licenseNumber);
    }

    updateVehicle(vehicle, id) {
        return axios.put(UPDATE_VEHICLE_BASE_URL + "/" + id, vehicle);
    }


}

export default new VehiclesService();