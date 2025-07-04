import { brujula, buscar, perfil, tiktoklogo } from "./assets/image";


export function Navbar() {
    return (
        <nav className=" items-center flex flex-col justify-between bg-white absolute  shadow-md p">
            
            <div className="flex gap-10 justify-center text-black font-family: 'Poppins', sans-serif">
                <figure>
                <img className="w-30" src={tiktoklogo} alt="TikTok Logo" />
            </figure>
            
                <input  className="bg-[rgb(224,224,224)] rounded-lg p-0.5 h-7 m-2 "  type="text" placeholder=" Buscar" />
                <h3 > Para ti</h3>
                <img src="" alt="" /> <h3>  Explorar</h3>
                <h3>Siguiendo</h3>
                <h3>Cargar</h3>
                <h3>LIVE</h3>
                <h3>Perfil</h3>
                <h3>...Más</h3>
                <button className="bg-[rgb(254,44,85)] font-bold text-white py-1.5 px-6 border-4 rounded-lg ">Iniciar Sesión</button>
            </div>

        </nav>
    );
}