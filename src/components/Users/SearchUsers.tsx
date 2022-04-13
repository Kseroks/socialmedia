import React from "react";
import { Formik, Form, Field } from "formik";
import { filterType } from "../../redux/users-reducer";


interface PropsType {
	onFilterChanged: (filter: filterType) => void;
}


export const SearchUsers: React.FC<PropsType>= ({onFilterChanged}) => {
  return (
    <Formik
      initialValues={{ term: "",friend: null }}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
				onFilterChanged(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
					<Field name="friend" as="select">
          <option value="null">All</option>
          <option value="true">Only follow</option>
          <option value="false">Only unfollow</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
				</Form>
      )}
    </Formik>
  );
};
