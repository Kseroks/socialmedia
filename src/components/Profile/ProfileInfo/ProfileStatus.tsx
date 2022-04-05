import React from 'react'

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status,

	}

	activatedEditMode = () => {
		this.setState({
			editMode: true,
		})
	}

	deactivatedEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.UpDateStatusTc(this.state.status);
	}

	onStatusChange = (event) => {
		this.setState({
			status: event.currentTarget.value,
		});
	}

	componentDidUpdate(PrevProps, PrevState) {
		if (PrevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}


	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div><span
						onDoubleClick={this.activatedEditMode} >
						{this.props.status}</span></div>
				}
				{this.state.editMode &&
					<div><input
						onChange={this.onStatusChange}
						autoFocus={true}
						onBlur={this.deactivatedEditMode}
						value={this.state.status} /></div>
				}
			</div>
		)
	}
}
export default ProfileStatus;