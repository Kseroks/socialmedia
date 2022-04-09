import { Formik, Form, Field } from "formik";

interface PropsType { addNewMessage: (values: string) => void };

export const DialogsMessage: React.FC<PropsType> = ({addNewMessage}) => {
  return (
    <div>
      <Formik
        initialValues={{ text: "" }}
				onSubmit={(values, { setSubmitting }) => {
					addNewMessage(values.text);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="text" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
