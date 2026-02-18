import React , {useEffect, useState} from "react";
import { assets } from "../assets/assets";
import logoBlack from '../assets/logo-black.svg';
import { Link,useLocation,useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Contact', path: '/Contact' },
        { name: 'About', path: '/About' },
    ];

     

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const {openSignIn} = useClerk()
    const {user} = useUser() 
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        if(location.pathname !== '/') {
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
        setIsScrolled(prev => prev || location.pathname !== '/' ? true : prev);


        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/rooms?destination=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
            scrollTo(0, 0);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 pointer-events-auto ${isScrolled ? "bg-white/80 shadow-md text-black backdrop-blur-lg py-3 md:py-4" : location.pathname === '/rooms' ? "bg-transparent text-black py-4 md:py-6" : "py-4 md:py-6"}`} style={{zIndex: 9999}}>

                {/* Logo */}
                <Link to='/'>
                    <img
                        src={isScrolled ? logoBlack : assets.logo}
                        alt="logo"
                        className={`h-9 transition-all duration-500 ${(!isScrolled && location.pathname === '/rooms') ? 'text-black' : ''}`}
                    />
                </Link>


                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-black" : location.pathname === '/rooms' ? "text-black" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-black" : location.pathname === '/rooms' ? "bg-black" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : location.pathname === '/rooms' ? 'text-black' : 'text-white'} transition-all`} onClick={()=> navigate('/owner')}>
                         Dashboard 
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Bar - appears inline when open */}
                    {isSearchOpen ? (
                        <form onSubmit={handleSearch} className="flex items-center gap-2 animate-slideIn">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className={`px-3 py-1.5 rounded-lg border outline-none text-sm w-48 ${isScrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 bg-white/90 text-gray-700'}`}
                                autoFocus
                            />
                            <button 
                                type="button"
                                onClick={() => setIsSearchOpen(false)}
                                className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}
                            >
                                ✕
                            </button>
                        </form>
                    ) : (
                        <img 
                            src={assets.searchIcon} 
                            alt="search" 
                            className={` ${isScrolled && "invert"} h-7 transition-all duration-500 cursor-pointer`}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />
                    )}
                    
                    {user ?
                    (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={()=> navigate('/my-bookings')}/>
                            </UserButton.MenuItems>
                        </UserButton>)

                        :

                        (<button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>)
                        
                    }

                </div>

                {/* Mobile Menu Button */}

                <div className="flex items-center gap-3 md:hidden">
                    {isSearchOpen ? (
                        <form onSubmit={handleSearch} className="flex items-center gap-2 animate-slideIn">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="px-2 py-1 rounded-lg border border-gray-300 outline-none text-sm w-32 bg-white text-gray-700"
                                autoFocus
                            />
                            <button 
                                type="button"
                                onClick={() => setIsSearchOpen(false)}
                                className="text-sm text-gray-600"
                            >
                                ✕
                            </button>
                        </form>
                    ) : (
                        <img 
                            src={assets.searchIcon} 
                            alt="search" 
                            className={`${isScrolled && "invert"} h-5 cursor-pointer`}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />
                    )}

                    {user &&  <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={()=> navigate('/my-bookings')}/>
                            </UserButton.MenuItems>
                        </UserButton>}

                     <img onClick={() => setIsMenuOpen(!isMenuOpen)}  src={assets.menuIcon} alt="" className={`${isScrolled && "invert"} h-4 cursor-pointer`}/> 
                </div>

                {/* Mobile Menu */}
                <div className={`fixed  top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`} style={{zIndex: 9998}}>
                    <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        <img src={assets.closeIcon} alt="close-menu" className="h-6.5 " />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    {user && <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all" onClick={()=> navigate ('/owner')}>
                        Dashboard
                    </button>}

                    {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full cursor-pointer transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>

            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.2s ease-out forwards;
                }
            `}</style>
        </>
    );
}


export default Navbar;