import React, { useState } from 'react'; // 导入useState
import { Link, useNavigate } from 'react-router-dom'; // 假设你使用了React Router
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState(''); // 设置初始值为空字符串
  const [password, setPassword] = useState(''); // 设置初始值为空字符串
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password }) // 你可能想要将路径改为'/login'，而不是'/register'
      .then(result => {
        console.log(result);
        if(result.data === 'Success'){
            navigate('/home'); // 你可能想要导航到登录后的仪表盘页面
        }   
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">Login</button> {/* 添加登录按钮 */}
        </form>
        <p>Already Have an Account</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Sign up
        </Link>   
      </div>
    </div>
  );
}
