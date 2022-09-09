import { Formik } from 'formik'
import React from 'react'

const Login = () => {
    const LoginSubmit = (formdata, {resetForm,setSubmitting }) => {
      console.log(formdata);
      resetForm();
    }
    
  return (
   <>
   <Formik initialValues={{email : '', password : '' }} onSubmit={LoginSubmit}>
    {({values, handleSubmit,handleChange}) => (
         <form onSubmit={handleSubmit}>
         <div className="form-outline mb-4">
           <input type="email" id="email" value={values.email} onChange={handleChange} className="form-control" />
           <label className="form-label" htmlFor="form1Example1">
             Email address
           </label>
         </div> 
         <div className="form-outline mb-4">
           <input type="password" id="password" value={values.password} onChange={handleChange} className="form-control" />
           <label className="form-label" htmlFor="form1Example2">
             Password
           </label>
         </div>
         <div className="row mb-4">
           <div className="col d-flex justify-content-center">
             <div className="form-check">
               <input
                 className="form-check-input"
                 type="checkbox"
                 defaultValue=""
                 id="form1Example3"
                 defaultChecked=""
               />
               <label className="form-check-label" htmlFor="form1Example3">
                 {" "}
                 Remember me{" "}
               </label>
             </div>
           </div>
           <div className="col">
             {/* Simple link */}
             <a href="#!">Forgot password?</a>
           </div>
         </div>
         {/* Submit button */}
         <button type="submit" className="btn btn-primary btn-block">
           Sign in
         </button>
       </form>
    )}
   </Formik>
   
</>
  )
}

export default Login