export default function Navbar() {
    return (
        <nav className="flex justify-between items-center w-full h-16 bg-white px-2 py-2 shadow-md">
            <div className="flex items-center">
                <img src="https://static.souenergy.com.br/logo/stores/1/Dimens_o-da-logo-da-Sou--180x60-px.png" alt="logo" className="w-50" />
            </div>
            <div className="flex items-center">
                <a className="bg-orange text-black rounded-lg px-4 py-2 font-bold md:text-base sm:text-sm xl:text-xl text-xs" href="/ofertas">Ofertas</a>
                <a className="bg-orange text-black rounded-lg px-4 py-2 font-bold md:text-base sm:text-sm xl:text-xl text-xs" href="/adm">Administração</a>
            </div>
        </nav>
    )
}