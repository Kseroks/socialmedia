import React from "react";
import { Formik, Form, Field } from "formik";

interface PropsType {
  onAddPost: (values: string) => void;
}

export const AddNewPostForm: React.FC<PropsType> = (props) => {
  return (
    <div>
      <Formik
        initialValues={{ post: "" }}
        onSubmit={(values, { setSubmitting }) => {
          props.onAddPost(values.post);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="post" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
