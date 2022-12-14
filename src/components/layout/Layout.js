// Components:
// - Small and reusable
// - Strongly specialized in for one purpose
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Main } from "../main/Main";
export function Layout() {
    return (
        <div>
            <Header />
            <Main/>
            <Footer />
        </div>
    );
}