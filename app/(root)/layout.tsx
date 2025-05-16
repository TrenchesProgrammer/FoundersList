import Navbar from "../components/Navbar"
import { SessionProvider } from 'next-auth/react';
import {MantineProvider} from "@mantine/core"
export default function Layout ({ children} : Readonly<{children : React.ReactNode}>){
    return(
        <main>
            <MantineProvider>
                <SessionProvider>
                    <Navbar/>
                    {children}
                </SessionProvider>
            </MantineProvider>

        </main>
    )
}