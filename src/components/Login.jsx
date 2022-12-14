import { useFormik } from 'formik';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="grid place-items-center h-screen">
      <form
        className="flex flex-col justify-center items-center w-28 gap-4"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label className="mx-1" htmlFor="email">
            Email Address
          </label>
          <input
            className="bg-gray-700 my-1 rounded-md h-8 p-6"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label className="mx-1" htmlFor="password">
            Password
          </label>
          <input
            className="bg-gray-700 my-1 rounded-md h-8 p-6"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button
          className="bg-slate-800 my-1 rounded-md px-4 py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
