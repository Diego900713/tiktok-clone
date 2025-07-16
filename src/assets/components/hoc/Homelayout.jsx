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
import { Navbar } from "../Navbar";

function HomeLayout({ children }) {
  return (
    <div className="flex">
      
        <nav >
         <Navbar/>
          {/* <Link to="/login">Iniciar Sesión</Link> |{" "}
          <Link to="/register">Registrarse</Link> */}
        </nav>
     

      <main>{children}</main>
    </div>
  );
}

export default HomeLayout;
