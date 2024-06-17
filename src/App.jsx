import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="bg-primary flex h-screen w-full">
      <SideBar/>
      <Dashboard />
    </div>
  );
}

export default App;
