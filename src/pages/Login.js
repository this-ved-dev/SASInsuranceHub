import React from 'react'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import apiClient from '../apis/apiClient'
import { AuthContext } from '../context/AuthContext'

import ImageLight from '../assets/img/bfsi.jpg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { Label, Input, Button, HelperText } from '@windmill/react-ui'

function Login() {
  const { authInfo, setAuthInfo } = useContext(AuthContext);
  const [alert, setAlert] = useState('');
  const navigate = useHistory();
  let userInput = React.createRef();
  let passwordInput = React.createRef();
  const authenticate = (event) => {
    event.preventDefault();
    setAlert('');
    const endpoint = "/SASLogon/oauth/token";
    const user = userInput.current.value;
    const password = passwordInput.current.value;
    const data = {
      grant_type: "password",
      response_type: "bearer",
      username: user,
      password: password
    };

    const headers = {
      'Authorization': "Basic " + Buffer.from('viya_app1:Orion123').toString('base64'),
      //'Authorization': "Basic " + btoa('viya_app1:Orion123'),
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    apiClient.post(endpoint, new URLSearchParams(data), { headers: headers })
      .then(response => {
        if (response.status === 200) {
          Instance.defaults.headers.common['Authorization'] = `${response.data.token_type} ${response.data.access_token}`;
          setAuthInfo({ ...authInfo, authenticated: true, user: user, tokenInfo: response.data });
          navigate.push("/app/dashboard");
          return null;
        }
      }).catch(() => {
        apiClient.defaults.headers.common['Authorization'] = null;
        setAlert(`User ${user} could not be authenticated. Please check username and password.`);
      });
  }
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <form onSubmit={authenticate}>
                <Label>
                  <span>Username</span>
                  <Input className="mt-1" ref={userInput}  placeholder="Username" />
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input className="mt-1" type="password" ref={passwordInput} placeholder="***************" />
                </Label>
                {alert && <HelperText valid={false} className="mt-2">{alert}</HelperText>}
                <Button type="submit" className="mt-4" >
                  Log in
                </Button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login