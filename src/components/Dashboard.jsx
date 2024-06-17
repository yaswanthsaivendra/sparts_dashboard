import MainSection from "./MainSection";
import TopBar from "./TopBar"



const Dashboard = () => {
  return (
    <div className="bg-white flex flex-col w-full m-8 rounded-2xl shadow-lg shadow-primary">
        <TopBar />
        <MainSection/>
    </div>
  )
}

export default Dashboard;