import React, { Component } from 'react'
import VehiclesService from '../services/VehiclesService';


class UpdateVehiclesComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: this.props.match.params.id,
			licenseNumber: '',
			vehicleType: "",
			modelName: "",
			energyPercentage: '',
			tirePressure: '',
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
		this.updateVehicle = this.updateVehicle.bind(this);

	}

	componentDidMount() {
		VehiclesService.getVehicleByID(this.state.id).then((res) => {
			let vehicle = res.data;
			this.setState({
				licenseNumber: vehicle.licenseNumber,
				vehicleType: vehicle.vehicleType,
				modelName: vehicle.modelName,
				energyPercentage: vehicle.energyPercentage,
				tirePressure: vehicle.tirePressure,
				wheels: vehicle.wheels,
				batteryOrFuel: vehicle.batteryOrFuel
			})
		});
	}

	updateVehicle = (e) => {
		e.preventDefault();
		let vehicle = {licenseNumber: this.state.licenseNumber, vehicleType: this.state.vehicleType, modelName: this.state.modelName,
			energyPercentage: this.state.energyPercentage, tirePressure: this.state.tirePressure, wheels: this.state.wheels,
			batteryOrFuel: this.state.batteryOrFuel};
		console.log('vehicle => ' + JSON.stringify(vehicle));


		VehiclesService.updateVehicle(vehicle, this.state.id).then(res => {
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
							<h3 className="text-center">Update Vehicle</h3>
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>License Number</label>
										<input placeholder="License Number" name="licenseNumber" className="form-control"
											value={this.state.licenseNumber} onChange={this.changelicenseNumberHandler} />
									</div>
									<div className="form-group">
										<label>Vehicle Type  - regular/electric motorcycle/car && truck</label>
										<input placeholder="Vehicle Type" name="vehicleType" className="form-control"
											value={this.state.vehicleType} onChange={this.changeVehicleTypeHandler} />
									</div>
									<div className="form-group">
										<label>Model Name - Nissan/Mercedes/Suzuki/Audi/Other..</label>
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
									</div>
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
								

									<button className="btn btn-success" onClick={this.updateVehicle}>Save</button>
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

export default UpdateVehiclesComp;