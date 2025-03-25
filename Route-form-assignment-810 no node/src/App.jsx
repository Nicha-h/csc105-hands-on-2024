import { NavLink, Outlet, useLocation} from "react-router-dom";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="flex justify-center gap-5 text-base border-3">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/fav">Favourite</NavLink>
      </nav>
      {isHomePage &&
        <>
        <div className="flex justify-center items-center bg-amber-200 w-screen h-screen">
          <h1 className="font-mono text-5xl font-bold text-[#4a3925] -mt-20 ">Welcome to the Home Page!</h1>
        </div>
        </>
      }
      <Outlet />
    </>
  );
}

export default App;