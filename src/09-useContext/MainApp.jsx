import { UserProvider } from "../context/UserProvider"
import { Navigate, Route, Routes } from "react-router-dom"

import { AboutPage, HomePage, LoginPage, Menu } from "./index"


export const MainApp = () => {

    return (
        <UserProvider>
            <Menu />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/**  <Route   path ="/*" element= { <AboutPage/> } />*/}
                <Route path="/*" element={<Navigate to="/about" />} /> {/**Con esto si la ruta no exziste en vez de quedarse en la ruta que no existe se mueve a la ruta que tu le digas */}

            </Routes>
        </UserProvider>
    )

}