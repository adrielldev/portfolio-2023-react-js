import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">AD</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/sobre" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Sobre
            </NavLink>
            <NavLink to="/projetos" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projetos
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar