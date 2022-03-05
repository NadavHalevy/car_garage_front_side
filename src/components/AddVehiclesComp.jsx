import React, { Component } from 'react'
import VehiclesService from '../services/VehiclesService';


class AddVehiclesComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: '',
			licenseNumber: '',
            vehicleType: "",
            modelName: "",
            energyPercentage: '',
            tirePressure:'',
			wheels: '',
            batteryOrFuel: ""
		}

		this.changeLicenseNumberHandler = this.changeLicenseNumberHandler.bind(this);
		this.changeVehicleTypeHandler = this.changeVehicleTypeHandler.bind(this);
		this.changeModelNameHandler = this.changeModelNameHandler.bind(this);
		this.changeEnergyPercentageHandler = this.changeEnergyPercentageHandler.bind(this);
		this.changeTirePressureHandler = this.changeTirePressureHandler.bind(this);
		this.changeWheelsHandler = this.changeWheelsHandler.bind(this);
		this.changebatteryOrFuelHandler = this.changebatteryOrFuelHandler.bind(this);
		this.saveVehicle = this.saveVehicle.bind(this);

	}

	saveVehicle = (e) => {
		e.preventDefault();
		let vehicle = {licenseNumber: this.state.licenseNumber, vehicleType: this.state.vehicleType, modelName: this.state.modelName,
			energyPercentage: this.state.energyPercentage, tirePressure: this.state.tirePressure, wheels: this.state.wheels,
			batteryOrFuel: this.state.batteryOrFuel};
		console.log('vehicle => ' + JSON.stringify(vehicle));


		VehiclesService.addVehicles(vehicle).then(res => {
			this.props.history.push('/vehicles');
		});
	}

	changeLicenseNumberHandler = (e) => {
		this.setState({ licenseNumber: e.target.value });
	}

	changeVehicleTypeHandler = (e) => {
		this.setState({ vehicleType: e.target.value });
	}

	changeModelNameHandler = (e) => {
		this.setState({ modelName: e.target.value });
	}

	changeEnergyPercentageHandler = (e) => {
		this.setState({ energyPercentage: e.target.value });
	}

	changeTirePressureHandler = (e) => {
		this.setState({ tirePressure: e.target.value });
	}

	changeWheelsHandler = (e) => {
		this.setState({ wheels: e.target.value });
	}

	changebatteryOrFuelHandler = (e) => {
		this.setState({ batteryOrFuel: e.target.value });
	}

	cancel() {
		this.props.history.push('/vehicles');
    }

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							<h3 className="text-center">Add Vehicle</h3>
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>Vehicle License Number</label>
										<input placeholder="Vehicle License Number" name="licenseNumber" className="form-control"
											value={this.state.licenseNumber} onChange={this.changeLicenseNumberHandler}/>
									</div>
									<div className="form-group">
										<label>Vehicle Type</label>
										<input placeholder="Vehicle Type" name="vehicleType" className="form-control"
											value={this.state.vehicleType} onChange={this.changeVehicleTypeHandler} />
									</div>
									<div className="form-group">
										<label>Model Name</label>
										<input placeholder="Model Name" name="modelName" className="form-control"
											value={this.state.modelName} onChange={this.changeModelNameHandler} />
									</div>
									<div className="form-group">
										<label>Energy Percentage</label>
										<input placeholder="Energy Percentage" name="energyPercentage" className="form-control"
											value={this.state.energyPercentage} onChange={this.changeEnergyPercentageHandler} />
									</div>
									<div className="form-group">
										<label>Tire Pressure</label>
										<input placeholder="Tire Pressure" name="tirePressure" className="form-control"
											value={this.state.tirePressure} onChange={this.changeTirePressureHandler} />
										<div className="form-group">
											<label>Wheels- motorcycle: 2 , car: 4, or truck: 16</label>
											<input placeholder="Wheels" name="wheels" className="form-control"
												value={this.state.wheels} onChange={this.changeWheelsHandler} />
										</div>
										<div className="form-group">
											<label>Battery Or Fuel</label>
											<input placeholder="BatteryOrFuel" name="batteryOrFuel" className="form-control"
												value={this.state.batteryOrFuel} onChange={this.changebatteryOrFuelHandler} />
										</div>
									</div>

									<button className="btn btn-success" onClick={this.saveVehicle}>Save</button>
									<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddVehiclesComp;