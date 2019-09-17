import React, {useState} from "react";
import ReactDOM from "react-dom";
import Dropdown from './components/Dropdown'

const App = () => {
  const [layout, setLayout] = useState("");
  const handleSelectLayout = selectedLayout => {
    console.log(selectedLayout)
    setLayout(selectedLayout)
  }
  return (
    <div className="container">
      <Dropdown onSelect={handleSelectLayout} selected={layout}/>
      <div className="layout">
        {/* {layout} */}
      </div>
      
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));