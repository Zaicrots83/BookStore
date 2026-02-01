import { useState, type ChangeEvent } from "react";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent) => {
    event.preventDefault();
    console.log("email", email);
    console.log("password", password);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={handleEmail}
        />
        <input
          type="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default login;
