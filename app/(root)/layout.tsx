import Navbar from "../components/Navbar"
import {Providers} from "../Providers"
export default function Layout ({ children} : Readonly<{children : React.ReactNode}>){
    return(
        <main>
            <Providers>
                <Navbar/>
                {children}
            </Providers>
        </main>
    )
}