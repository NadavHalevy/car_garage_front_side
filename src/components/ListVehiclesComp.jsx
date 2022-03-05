import React, { Component } from 'react'
import VehiclesService from '../services/VehiclesService'


class ListVehiclesComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			vehicles: []
		}

		this.addVehicle = this.addVehicle.bind(this);
		this.updateVehicle = this.updateVehicle.bind(this);
	}

	componentDidMount() {
		VehiclesService.getVehicles().then((res) => {
			this.setState({ vehicles: res.data });
		});
	}

	addVehicle() {
		this.props.history.push('/add');
	}

	updateVehicle(id) {
		this.props.history.push(`/getSingleVehicle/${id}`);
	}

	render() {
		return (
			<div>
				<h2 className="text-center">Vehicles List</h2>
				<div className="row">
					<button className="btn btn-primary" onClick={this.addVehicle}>Add Vehicle</button>
				</div>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th> Vehicle ID</th>
								<th> License Number</th>
								<th> Vehicle Type</th>
								<th> Model Name</th>
								<th> Energy Percentage</th>
								<th> Tire Pressure</th>
								<th> Wheels</th>
								<th> Battery Or Fuel</th>
								<th> Actions</th>
							</tr>
						</thead>

						<tbody>
							{
								this.state.vehicles.map(
									vehicle =>
										<tr key={vehicle.id}>
											<td> {vehicle.id}</td>
											<td> {vehicle.licenseNumber}</td>
											<td> {vehicle.vehicleType}</td>
											<td> {vehicle.modelName}</td>
											<td> {vehicle.energyPercentage}</td>
											<td> {vehicle.tirePressure}</td>
											<td> {vehicle.wheels}</td>
											<td> {vehicle.batteryOrFuel}</td>
											<td>
												<button onClick={() => this.updateVehicle(vehicle.id)} className="btn btn-info">Update</button>
											</td>
										</tr>
								)
							}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default ListVehiclesComp;
