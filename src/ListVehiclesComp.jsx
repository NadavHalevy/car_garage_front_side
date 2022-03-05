import { Tab } from '@material-ui/core'
import React, { Component } from 'react'

class ListVehiclesComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			vehicles: []
		}
	}
	render() {
		return (
			<div>
				<h2 className="text-center">Vehicles List</h2>
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
											<td> {vehicle.licenseNumber}</td>
											<td> {vehicle.vehicleType}</td>
											<td> {vehicle.modelName}</td>
											<td> {vehicle.energyPercentage}</td>
											<td> {vehicle.tirePressure}</td>
											<td> {vehicle.wheels}</td>
											<td> {vehicle.batteryOrFuel}</td>
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
