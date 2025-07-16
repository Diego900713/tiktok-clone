// import { brujula, buscar, perfil, tiktoklogo } from "../image";
// import { Home, Compass, UserPlus, Tv, User, MoreHorizontal, HomeIcon, HouseIcon, Search } from 'lucide-react';


// export function Navbar() {
//     return (
//         <nav className="flex flex-col gap-10 justify-center items-center  border border-e-1 w-[20vw] top-0 bag-">

//             <div className="flex flex-col gap-10 justify-center text-center font-semibold text-black font-family: 'Poppins', sans-serif,Arial">
//                 <img className="w-30 mx-auto" src={tiktoklogo} alt="TikTok Logo" />
//                 <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-45">
//                     <Search className="w-5 h-5 text-black mr-2" />
//                     <input
//                         type="text"
//                         placeholder="Buscar"
//                         className="bg-transparent outline-none placeholder:text-gray-500 w-full"
//                     />
//                 </div>
//                 {/* Para ti (activo) */}
//                 <div className="flex items-center justify-center gap-3 text-[#fe2c55] font-semibold">
//                     <HouseIcon fill="#fe2c55" className="w-5 h-5" />
//                     <span>Para ti</span>
//                 </div>
//                 {/* Explorar */}
//                 <div className="flex justify-center items-center gap-3">
//                     <Compass className="w-5 h-5" />
//                     <span>Explorar</span>
//                 </div>

//                 {/* Siguiendo */}
//                 <div className="flex justify-center items-center gap-3">
//                     <UserPlus className="w-5 h-5" />
//                     <span>Siguiendo</span>
//                 </div>

//                 {/* Cargar */}
//                 <div className="flex justify-center items-center gap-3">
//                     <svg
//                         className="w-5 h-5"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                     >
//                         <rect x="3" y="3" width="18" height="18" rx="2" />
//                         <line x1="12" y1="8" x2="12" y2="16" />
//                         <line x1="8" y1="12" x2="16" y2="12" />
//                     </svg>
//                     <span>Cargar</span>
//                 </div>

//                 {/* LIVE */}
//                 <div className="flex justify-center items-center gap-3">
//                     <Tv className="w-5 h-5" />
//                     <span>LIVE</span>
//                 </div>

//                 {/* Perfil */}
//                 <div className="flex justify-center items-center gap-3">
//                     <User className="w-5 h-5" />
//                     <span>Perfil</span>
//                 </div>

//                 {/* Más */}
//                 <div className="flex justify-center items-center gap-3">
//                     <MoreHorizontal className="w-5 h-5" />
//                     <span>Más</span>
//                 </div>

//                 <button className="bg-[rgb(254,44,85)] font-bold text-white py-1.5 px-6 border-4 rounded-lg ">Iniciar Sesión</button>
//             </div>

//         </nav>
//     );
// }
// ------------------------------------------
import { useState } from "react";
import { tiktoklogo } from "../image";
import { Compass, UserPlus, Tv, User, MoreHorizontal, HouseIcon, Search } from 'lucide-react';
import Modal from "./modal"; // Asegúrate de importar bien
import Login from "../../pages/Login";
import Register from "../../pages/Register";


export function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="flex flex-col gap-10 justify-center items-center border w-[20vw] top-0">
                <div className="flex flex-col gap-10 justify-center text-center font-semibold text-black">
                    <img className="w-30 mx-auto" src={tiktoklogo} alt="TikTok Logo" />

                    {/* Buscador */}
                    <div className="flex items-center bg-gray-100  px-4 py-2 w-45 hover:bg-gray-100 rounded-lg transition">
                        <Search className="w-5 h-5 text-black mr-2" />
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="bg-transparent outline-none placeholder:text-gray-500 w-full"
                        />
                    </div>

                    {/* Ítems de navegación */}
                    {/* Ítems de navegación */}
                    <div className="flex items-center gap-3 text-[#fe2c55] font-semibold px-4 py-2 hover:bg-[#bf9999] rounded-lg transition">
                        <HouseIcon fill="#fe2c55" className="w-5 h-5" />
                        <span>Para ti</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#bf9999] rounded-lg transition">
                        <Compass className="w-5 h-5" />
                        <span>Explorar</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#bf9999] rounded-lg transition">
                        <UserPlus className="w-5 h-5" />
                        <span>Siguiendo</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#bf9999] rounded-lg transition">
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        <span>Cargar</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#bf9999] rounded-lg transition">
                        <Tv className="w-5 h-5" />
                        <span>LIVE</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#bf9999] rounded-lg transition">
                        <User className="w-5 h-5" />
                        <span>Perfil</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#bf9999] rounded-lg transition">
                        <MoreHorizontal className="w-5 h-5" />
                        <span>Más</span>
                    </div>

                    {/* Botón Iniciar Sesión */}
                    <button
                        className="bg-[rgb(254,44,85)] font-bold text-white py-1.5 px-6 border-4 rounded-lg hover [#fe2c55]"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Iniciar Sesión
                    </button>

                    {/* Footer */}
                    <div className="text-sm text-gray-500 mt-10 space-y-2">
                        <p className="hover:underline cursor-pointer">Empresa</p>
                        <p className="hover:underline cursor-pointer">Programa</p>
                        <p className="hover:underline cursor-pointer">Términos y políticas</p>
                        <p className="text-xs mt-2">&copy; 2025 TikTok</p>
                    </div>
                </div>
            </nav>



            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4 text-center">Bienvenido</h2>
                <Login />
                <hr className="my-4" />
                <Register />
            </Modal>
        </>
    );
}

