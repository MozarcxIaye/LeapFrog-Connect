import Navbar from "./navbar/Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout