import Link from "next/link"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar