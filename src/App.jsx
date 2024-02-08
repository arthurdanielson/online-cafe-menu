import { useState } from "react"
import Header from "./components/Header/Header.jsx"
import MenuItem from "./components/MenuItem/MenuItem.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { breakfasts, courses, drinks } from "../public/menu.js"

function App() {
    const menuPages = [breakfasts, courses, drinks]
    const [selectedPage, updateSelectedPage] = useState(0)

    return (
        <>
            <Header updateSelectedPage={updateSelectedPage} />
            <main>
                <section className="m-3">
                    <div className="card-group row row-cols-1 row-cols-md-4 g-4">
                        {menuPages[selectedPage].map(item => <MenuItem image={item.image} name={item.name} price={item.price} description={item.description} />)}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
