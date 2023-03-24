import './App.css';
import { Routes, Route } from "react-router-dom";
import Welcome from './Welcome';
import TableData from './TableData';
import WebSiteTracking from './WebSiteTracking';


function App() {
  let tableDates=[];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome  tableDates={tableDates} />} />
        <Route path="table" element={<TableData   tableDates={tableDates} />} />
        <Route path="/websitetracking" element={<WebSiteTracking  tableDates={tableDates} /> } />
      </Routes>
    </div>
  );
}

export default App;
