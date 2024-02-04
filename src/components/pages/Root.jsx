import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";
import Footer from "../Footer/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
