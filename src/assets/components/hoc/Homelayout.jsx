import { Navbar } from "../Navbar";


export default function HomeLayout({children}){
    return(
        <div className="flex ">
            <Navbar/>
            {children}
        </div>
    )
}