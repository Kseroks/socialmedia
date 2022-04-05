import React, { useState, useEffect } from 'react'

const ProfileStatusWithHook = (props) => {
	let [editMode, SetEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activatedEditMode = () => {
		SetEditMode(true);
	};

	const deactivatedEditMode = () => {
		SetEditMode(false)
		props.UpDateStatusTc(status);
	};

	const onStatusChange = (event) => {
		setStatus(event.currentTarget.value);
	};

	return (
		<div>
			{!editMode &&
				<div>
					<span
						onDoubleClick={activatedEditMode}>
						{props.status}
					</span>
				</div>
			}
			{editMode &&
				<div><input
					onChange={onStatusChange}
					autoFocus={true}
					onBlur={deactivatedEditMode}
					value={status}
				/></div>
			}
		</div>
	)
}
export default ProfileStatusWithHook;