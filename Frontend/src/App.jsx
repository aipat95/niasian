import './App.css';
import { RouterProvider } from "react-router-dom";
import mainRoute from './Layout/mainLayout';

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={mainRoute} />
    </div>
  );
}

export default App;
