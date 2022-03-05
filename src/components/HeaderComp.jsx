import React, { Component } from 'react'


class HeaderComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark">
						<div><a herf="http://javaguides.net" className="navbar-brand"> Car Garage Management App </a></div>
					</nav>
				</header>
			</div>
		)
	}
}

export default HeaderComp;