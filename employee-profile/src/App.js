import EmployeeProfileForm from './components/EmployeeProfileForm';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeProfileForm />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  )
}

export default App;