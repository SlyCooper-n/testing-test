export const LoginForm = () => {
  return (
    <div className="card w-[90%] max-w-lg pt-4 bg-primary text-primary-content">
      <h1 className="card-title self-center">Login</h1>

      <form className="card-body w-full">
        <label htmlFor="email" className="label-text">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="input bg-slate-200 text-neutral focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent-focus"
        />

        <label htmlFor="password" className="label-text">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input bg-slate-200 text-neutral focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent-focus"
        />

        <label htmlFor="confirm-pw" className="label-text">
          Confirm password
        </label>
        <input
          type="password"
          id="confirm-pw"
          className="input bg-slate-200 text-neutral focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent-focus"
        />
      </form>
    </div>
  );
};
