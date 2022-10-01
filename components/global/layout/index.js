import Navbar from '../navigation'
import Footer from '../footer'

const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />            
        </>
    )
}

export default Layout