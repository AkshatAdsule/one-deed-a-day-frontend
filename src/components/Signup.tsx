import React, { ReactElement, useState } from 'react';

export interface Props {
  onSubmit: () => void;
}

function Signup(props: Props): ReactElement {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className="user-form" action="/register" method="POST">
      <div className="form-group">
        <label className="form-label">Username</label>
        <input
          className="form-control"
          aria-describedby="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <small className="form-help text-muted" id="emailHelp">
          This is visible to other users.
        </small>
      </div>
      <div className="form-group">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <small className="form-help text-muted" id="emailHelp">
          We&apos;ll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        type="submit"
        className="btn btn-lg btn-outline-light"
        onClick={(e) => {
          props.onSubmit();
          e.preventDefault();
        }}>
        Register
      </button>
    </form>
  );
}

export default Signup;
