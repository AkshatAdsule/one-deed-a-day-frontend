import React, { ReactElement, useState } from 'react';
import { LoginInterface } from '../apiacess';

export interface Props {
  onSubmit: (user: any) => void;
}

function Login(props: Props): ReactElement {
  const [username, setUsername] = useState('');
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
          props.onSubmit({ username: username, password: password });
          e.preventDefault();
        }}>
        Register
      </button>
    </form>
  );
}

export default Login;
