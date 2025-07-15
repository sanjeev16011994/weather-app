import React from "react";
import SideBar from "./sidebar/SideBar";
import MainComponent from "./main/MainComponent";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 rounded-xl  ">
      <div className="flex flex-1  ">
        <aside className="w-84 bg-white text-white p-4 rounded-bl-4xl rounded-tl-4xl  ">
          <SideBar />
        </aside>

        <main className="flex-1 p-6 bg-gray-100 rounded-r-4xl rounded-br-4xl ">
          <MainComponent />
        </main>
      </div>
    </div>
  );
};

export default Layout;
