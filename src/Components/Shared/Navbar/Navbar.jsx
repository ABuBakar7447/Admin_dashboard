import { Link, Outlet } from "react-router-dom";
import { menu } from '../../../Data/data'

const Navbar = () => {
    // id: 1,
    // title: "Homepage",
    // url: "/",
    // icon: "home.svg",
    return (
        <div>
            <div className="grid grid-cols-12 gap-5">

                <div className="col-span-2 min-h-screen  border-4 border-green-500 hidden lg:flex justify-center items-start ">
                    <ul className="menu  menu-vertical px-1 w-full">
                        {
                            menu.map(singlemenu =>
                                <div key={singlemenu.id}>
                                    <p className="text-xl font-bold">{singlemenu.title}</p>
                                    <div className="ml-5 uppercase font-bold">
                                        {singlemenu.listItems.map(menus =>
                                            <Link key={menus.id} to={menus.url}  className="flex my-4">
                                                <img src={menus.icon} alt="" className="w-8 h-8 rounded-full text-white object-cover"/>
                                                <li>
                                                    
                                                    <p>{menus.title}</p>
                                                </li>
                                                
                                                
                                            </Link>)}
                                    </div>
                                </div>
                            )
                        }
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><a>Item 1</a></li>
                        <li>

                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="col-span-10">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 border-4 border-green-500">

                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li>
                                        <a>Parent</a>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Item 3</a></li>
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-center text-xl">daisyUI</a>
                        </div>

                        <div className="col-span-4">
                            <a className="btn">Button</a>
                        </div>
                        <div className="col-span-12 bg-stone-700">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;