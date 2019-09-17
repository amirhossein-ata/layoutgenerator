import React, {useState} from "react";
import ReactDOM from "react-dom";
import Dropdown from './components/Dropdown';
import Layout from './components/Layout';

const App = () => {

  const [layout, setLayout] = useState("");
  const handleSelectLayout = selectedLayout => {
    setLayout(selectedLayout)
  }

  return (
    <div className="container">
      <Dropdown onSelect={handleSelectLayout} selected={layout}/>
      <Layout layout={layout} />
      
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));