import React from 'react'
import { Formik } from 'formik';

interface PropsType  {
  onAddPost: (newMessageBody: string) => void
} 

const AddNewPostForm: React.FC<PropsType>= (props) => {
  return (
    <div>
      <Formik initialValues={{ text: "" }} onSubmit={(values) => { props.onAddPost(values.text) }}>
        {({ values,handleChange }) => (
          <div>
            <p>
              <input onChange={handleChange} type={`text`} name={"text"} value={values.text} />
            </p>
            <button type={"submit"}>Send</button>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default AddNewPostForm;