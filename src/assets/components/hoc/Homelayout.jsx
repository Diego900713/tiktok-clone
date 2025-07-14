// import { Navbar } from "../Navbar";


// export default function HomeLayout({children}){
//     return(
//         <div className="flex">
//             <Navbar/>
//             {children}
//         </div>
//     )
// }
// -----------------------------------------
import { Link } from "react-router-dom";

function HomeLayout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/login">Iniciar Sesión</Link> |{" "}
          <Link to="/register">Registrarse</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default HomeLayout;
