import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div className="container" style={{ flex: 1 }}>
          <Routes>
            <Route path="/about" element={<About />} />
            {/* Add more routes below as you create components */}
            <Route path="/" element={
              <>
                <div className="heading">Welcome to the Dashboard</div>
                <div className="content">This is your main section.</div>
                <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
                  <thead>
                    <tr>
                      <th>Day/Hour</th>
                      <th>Period 1</th>
                      <th>Period 2</th>
                      <th>Period 3</th>
                      <th>Period 4</th>
                      <th>Period 5</th>
                      <th>Period 6</th>
                      <th>Period 7</th>
                      <th>Period 8</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td>Math</td>
                      <td>Physics</td>
                      <td>Chemistry</td>
                      <td>CS</td>
                      <td>Break</td>
                      <td>Math</td>
                      <td>English</td>
                      <td>PE</td>
                    </tr>
                  </tbody>
                </table>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
