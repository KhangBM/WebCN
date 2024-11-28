import React, {useState} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [message, setMessage] = useState('Welcome to My Profile!');
    const navigate = useNavigate()
    const gotoEmaillist = () =>{
        navigate('/Emaillist')
    }
    const gotoSurvey = () => {
        navigate('/Survey')
    }
    const gotoBT5 = () => {
        navigate('/BT5')
    }
    const gotoBT6 = () => {
        navigate('/BT6')
    }
    return (
        <div className="container">
          <div className="header">
            <img src="/FullSizeRender.jpeg" alt="" className="logo" />
            <h1 className="info">WELCOME TO MY PROFILE</h1>
          </div>
          <div className="body">
            <h2>WORK AND SOURCE</h2>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}></th>
                  <th>Work</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Email list</td>
                  <td>
                    <button onClick={gotoEmaillist}>Demo</button>
                  </td>
                  <td>
                    <button>Source</button>
                  </td>
                </tr>
                <tr>
                  <td>Survey</td>
                  <td>
                    <button onClick={gotoSurvey}>Demo</button>
                  </td>
                  <td>
                    <button>Source</button>
                  </td>
                </tr>
                <tr>
                  <td>BT5</td>
                  <td>
                    <button onClick={gotoBT5}>Demo</button>
                  </td>
                  <td>
                    <button>Source</button>
                  </td>
                </tr>
                <tr>
                  <td>BT6</td>
                  <td>
                    <button onClick={gotoBT6}>Demo</button>
                  </td>
                  <td>
                    <button>Source</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{textAlign:"center"}}>@khangbanhmi</p>
          </div>
        </div>
      );
}

export default Home