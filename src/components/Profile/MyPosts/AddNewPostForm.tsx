// import React from 'react'
// import { Formik } from 'formik';

// const AddNewPostForm = (props) => {
//   return (
//     <div>
//       <Formik initialValues={{ text: "" }} onSubmit={(values) => { props.onAddPost(values.text) }}>

//         {({ values, handleSubmit, handleChange }) => (
//           <div>

//             <p>
//               <input onChange={handleChange} type={`text`} name={"text"} value={values.text} />
//             </p>

//             <button onClick={handleSubmit} type={"submit"}>Send</button>
//           </div>
//         )}
//       </Formik>

//     </div>
//   )
// }
// export default AddNewPostForm;