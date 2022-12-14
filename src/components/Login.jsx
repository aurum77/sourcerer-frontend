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
    <div className="grid h-screen place-items-center">
      <form
        className="flex w-28 flex-col items-center justify-center gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="my-2 bg-gradient-to-r from-blue-600 via-pink-500 to-orange-500 bg-clip-text py-1 text-4xl font-extrabold text-transparent">
          Login
        </div>
        <div>
          <label className="mx-1" htmlFor="email">
            Email Address
          </label>
          <input
            className="my-1 h-8 rounded-md bg-gray-700 p-6"
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
            className="my-1 h-8 rounded-md bg-gray-700 p-6"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button
          className="my-1 rounded-md bg-slate-800 px-6 py-2 hover:bg-slate-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
