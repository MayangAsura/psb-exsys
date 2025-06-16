import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";
import ProfileCover from "./components/sections/ProfileCover/ProfileCover";
import Sidebar from "./components/sections/Sidebar/Sidebar";
import Profile from "./components/sections/ProfileCard/Profile"; 
import Exam from "./components/sections/Exams/Exam";
import Header from "./components/Header";

function App() {
  return (
    <main className="min-w-lg min-h-screen relative bg-gray-50 pb-10">
      <Header />
      {/* <ProfileCover /> */}
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Profile />
          </div>
          <div className="w-full lg:w-2/3 ">
            <Exam />
            {/* <Navbar /> */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
