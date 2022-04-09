import React from "react"
import { Formik } from 'formik';
import { SaveProfileTc } from "../../../redux/profile-reducer";

const ProfileDataForm: React.FC<any> = ({profile, toEditMode }) => {


	return (
		<Formik
			initialValues={profile}
			onSubmit={(values) => {
				SaveProfileTc(values);
				toEditMode(false);
			}}
		>
			{({ values, handleChange, handleBlur }) => (
				<div>
					<br />
					<div>
						<label htmlFor={"fullName"}><b>FullName</b> </label>
						<input
							type={`text`}
							name={"fullName"}
							value={values.fullName}
							placeholder="FullName"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					<br />

					<div>
						<label htmlFor={"lookingForAJob"}><b>lookingForAJob</b> </label>
						<input
							type={`checkbox`}
							name={"lookingForAJob"}
							value={values.lookingForAJob}
							placeholder="lookingForAJob"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					<br />

					<div>
						<div>
							<label htmlFor={"lookingForAJobDescription"}><b>lookingForAJobDescription</b> </label>
							<div>
								<br />
								<textarea
									name={"lookingForAJobDescription"}
									value={values.lookingForAJobDescription}
									placeholder="lookingForAJobDescription"
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
						</div>
					</div>
					<br />
					<div>
						<div>
							<label htmlFor={"aboutMe"}><b>aboutMe</b> </label>
							<div>
								<textarea
									name={"aboutMe"}
									value={values.aboutMe}
									placeholder="aboutMe"
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
						</div>
					</div>
					<br />
					<div>
						<label htmlFor={"contacts"}>
							<b>contacts :
								{Object.keys(profile.contacts).map(key => {
									return (<div key={key}><b>{key}:</b>
										<input
											type="text"
											name={`"contacts".${key}`}
											placeholder={key}
										/></div>)
								})}</b> </label>
					</div>
					<div><button
						type={"submit"}
					>Save</button></div>
				</div>

			)}
		</Formik>
	)
}

export default ProfileDataForm;