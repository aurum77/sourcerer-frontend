import { useFormik } from "formik";
import "./Login.css";


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return(
    <>
      <form onSubmit={formik.handleSubmit}>
      
    </form>
    </>
  )
};

export default Login;
