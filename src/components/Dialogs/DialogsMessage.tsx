import React from "react"
import { Formik } from 'formik';

interface PropsType  {
    addNewMessage: (newMessageBody: string) => void   
}


const DialogsMessage: React.FC<PropsType>= (props) => {
    return (
        <div>
            <Formik  initialValues={{ text: "" }} onSubmit={(values) => { props.addNewMessage(values.text) }}>
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
export default DialogsMessage;
