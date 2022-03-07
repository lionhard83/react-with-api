import React, { FC } from 'react';
import './index.css';
import App from './App';
import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";
import { Button } from '@material-ui/core';


const SingleUser: FC<{}> = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const params = useParams() as {invoiceId: string};
  return <p>Single User {params.invoiceId}</p>
}

const Navigator: FC<any> = (props) => <BrowserRouter><Header {...props}></Header></BrowserRouter>

const Header = () =>  {
  const navigate =  useNavigate();
 
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users/2">Users</Link>
            </li>
            <li>
              <Link to="/users/3?sort=desc">Users</Link>
            </li>
            <Button onClick={() => navigate('/users')} >Meno uno</Button>
          </ul>
        </nav>
        <Routes>
          
          <Route path="about" element={<><p>About</p></>}></Route>
          <Route path="users" >
            <Route
              index
              element={<App></App>}
            />
            <Route path=":invoiceId" element={<SingleUser />} />
          </Route>
          <Route path="/" element={<><p>Home</p></>}></Route>
          <Route path="*" element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              ></Route>
        </Routes>
      </div>
    </>
  )
}



export { Navigator }
