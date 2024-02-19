import  { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {SetUser} = useContext(UserContext);
  const handleSubmit = (e)=>{
            e.preventDefalut();
            SetUser({username,password});
  }

  return (
    <div>
      <input type="text" placeholder="usename" value={username} onChange={(e) => setUsername(e.target.value)} /> {' '}
      <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
