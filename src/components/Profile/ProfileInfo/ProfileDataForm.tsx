import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { SaveProfileTc } from "../../../redux/profile-reducer";
import "./ProfileInfo.module.css";

export const ProfileDataForm: React.FC<any> = ({ profile, toEditMode }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={profile}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(SaveProfileTc(values));
        toEditMode(false);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            FullName
            <Field type={`text`} name={"fullName"} placeholder="FullName" />
          </label>

          <label>
            lookingForAJob
            <Field
              type={`checkbox`}
              name={"lookingForAJob"}
              placeholder="lookingForAJob"
            />
          </label>

          <label>
            lookingForAJobDescription
            <Field
              type={`text`}
              name={"lookingForAJobDescription"}
              placeholder="lookingForAJobDescription"
            />
          </label>

          <label>
            aboutMe
            <Field
              type={`text`}
              name={"aboutMe"}
              placeholder="lookingForAJob"
            />
          </label>

          <label>
            <b>
              contacts
              {Object.keys(profile.contacts).map((key) => {
                return (
                  <div key={key}>
                    <b>{key}:</b>
                    <Field
                      type={`text`}
                      name={`"contacts".${key}`}
                      placeholder={key}
                    />
                  </div>
                );
              })}
            </b>
          </label>

          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
