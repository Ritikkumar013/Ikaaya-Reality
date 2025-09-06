// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, Menu, X } from "lucide-react";

// interface DropdownMenuProps {
//   title: string;
//   children: React.ReactNode;
//   closeMenu?: () => void;
// }

// interface DropdownItemProps {
//   href: string;
//   children: React.ReactNode;
//   closeMenu?: () => void;
// }

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > window.innerHeight * 0.1);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"} flex items-center justify-between px-7`}
//     >
//       <Link href="/">
//         <Image className="lg:w-30 md:w-24 w-20" src={isScrolled ? "/ikaaya/beige.png" : "/ikaaya/beige.png"} width={512} height={512} alt="Logo" />
//       </Link>

//       <nav className={`hidden lg:flex justify-center gap-7 ${isScrolled ? "text-black" : "text-white"}`}>
//         <Link href="/" className="cursor-pointer py-4">Home</Link>
//         <DropdownMenu title="About the Project">
//           <DropdownItem href="/location">Location Advantages</DropdownItem>
//           <DropdownItem href="/aPlan">Unit Configurations</DropdownItem>
//           <DropdownItem href="/specifications">Specifications</DropdownItem>
//         </DropdownMenu>
//         <Link href="/clubhouse" className="cursor-pointer py-4">Clubhouse/Amenities</Link>
//         <DropdownMenu title="Experience the Project">
//           <DropdownItem href="/gallery">Image Gallery</DropdownItem>
//           <DropdownItem href="/walkthrough">Walkthrough Video</DropdownItem>
//           <DropdownItem href="/constructionupdates">Construction Updates</DropdownItem>
//         </DropdownMenu>
//         <Link href="/aboutus" className="cursor-pointer py-4">About Developer</Link>
//         <DropdownMenu title="RERA">
//           <DropdownItem href="https://platinum-towers.com/pdfs/certificate-of-registration-in-rera-essel-platinum.pdf">Certificate</DropdownItem>
//           <DropdownItem href="/rera/faq">Mdda Approval</DropdownItem>
//           <DropdownItem href="/rera/contact">Bank Approvals</DropdownItem>
//           <DropdownItem href="https://platinum-towers.com/pdfs/schedule-of-contruction.pdf">Construction Updates</DropdownItem>
//         </DropdownMenu>
//       </nav>

//       <button className={`hidden lg:flex px-8 py-3 text-sm ${isScrolled ? "bg-black text-white" : "bg-[#ffffffcc]"} items-center`}>Contact Us</button>

//       <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         {isMenuOpen ? <X className="w-8 h-8 text-black" /> : <Menu className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`} />}
//       </button>

//       <div className={`fixed top-0 left-0 h-screen w-3/4 bg-white text-black transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} p-6 lg:hidden overflow-y-auto`}>
//         <Image src='/ikaaya/beige.png' className="absolute top-1 left-3 border-b-2 w-20" width={500} height={500} alt="Logo" />
//         <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
//           <X className="w-8 h-8" />
//         </button>
        
//         <nav className="mt-20 flex flex-col gap-4">
//   <Link href="/" className="py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>

//   <MobileDropdownMenu title="About the Project" closeMenu={() => setIsMenuOpen(false)}>
//     <DropdownItem href="/location" closeMenu={() => setIsMenuOpen(false)}>Location Advantages</DropdownItem>
//     <DropdownItem href="/aPlan" closeMenu={() => setIsMenuOpen(false)}>Unit Configurations</DropdownItem>
//     <DropdownItem href="/specifications" closeMenu={() => setIsMenuOpen(false)}>Specifications</DropdownItem>
//   </MobileDropdownMenu>

//   <Link href="/clubhouse" className="py-2" onClick={() => setIsMenuOpen(false)}>Clubhouse/Amenities</Link>

//   <MobileDropdownMenu title="Experience the Project" closeMenu={() => setIsMenuOpen(false)}>
//     <DropdownItem href="/gallery" closeMenu={() => setIsMenuOpen(false)}>Image Gallery</DropdownItem>
//     <DropdownItem href="/walkthrough" closeMenu={() => setIsMenuOpen(false)}>Walkthrough Video</DropdownItem>
//     <DropdownItem href="/constructionupdates" closeMenu={() => setIsMenuOpen(false)}>Construction Updates</DropdownItem>
//   </MobileDropdownMenu>

//   <Link href="/aboutus" className="py-2" onClick={() => setIsMenuOpen(false)}>About Developer</Link>

//   <MobileDropdownMenu title="RERA" closeMenu={() => setIsMenuOpen(false)}>
//     <DropdownItem href="https://platinum-towers.com/pdfs/certificate-of-registration-in-rera-essel-platinum.pdf" closeMenu={() => setIsMenuOpen(false)}>Certificate</DropdownItem>
//     <DropdownItem href="/rera/faq" closeMenu={() => setIsMenuOpen(false)}>Mdda Approval</DropdownItem>
//     <DropdownItem href="/rera/contact" closeMenu={() => setIsMenuOpen(false)}>Bank Approvals</DropdownItem>
//     <DropdownItem href="https://platinum-towers.com/pdfs/schedule-of-contruction.pdf" closeMenu={() => setIsMenuOpen(false)}>Construction Updates</DropdownItem>
//   </MobileDropdownMenu>
// </nav>

//         <Link href='/contact'> <button className="mt-6 w-full bg-black text-white py-3">Contact Us</button> </Link>
//       </div>
//     </header>
//   );
// };

// const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
//   return (
//     <div className="relative group py-4">
//       <button className="cursor-pointer flex justify-center items-center gap-2">{title} <ChevronDown className="w-4 h-4" /></button>
//       <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 hidden group-hover:block">
//         <ul>{children}</ul>
//       </div>
//     </div>
//   );
// };

// const MobileDropdownMenu: React.FC<DropdownMenuProps> = ({ title, children, closeMenu }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <button className="w-full flex justify-between items-center py-2" onClick={() => setIsOpen(!isOpen)}>
//         {title} <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
//       </button>
//       {isOpen && (
//         <ul className="pl-4">
//           {React.Children.map(children, (child) =>
//             React.isValidElement<DropdownItemProps>(child) // ✅ Explicitly check type
//               ? React.cloneElement(child, { closeMenu })
//               : child
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// const DropdownItem: React.FC<DropdownItemProps> = ({ href, children, closeMenu }) => (
//   <li className="p-2 hover:bg-gray-200 rounded-md">
//     <Link href={href} onClick={closeMenu}>{children}</Link>
//   </li>
// );

// export default Header;


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownMenuProps {
  title: string;
  children: React.ReactNode;
  closeMenu?: () => void;
}

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
  closeMenu?: () => void;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"} flex items-center justify-between px-7`}
    >
      <Link href="/">
        <Image className="lg:w-30 md:w-24 w-20" src={isScrolled ? "/ikaaya/beige.png" : "/ikaaya/beige.png"} width={512} height={512} alt="Logo" />
      </Link>

      <nav className={`hidden lg:flex justify-center gap-7 ${isScrolled ? "text-black" : "text-white"}`}>
        <Link href="/" className="cursor-pointer py-4">Home</Link>
        {/* <DropdownMenu title="About the Project">
          <DropdownItem href="/location">Location Advantages</DropdownItem>
          <DropdownItem href="/aPlan">Unit Configurations</DropdownItem>
          <DropdownItem href="/specifications">Specifications</DropdownItem>
        </DropdownMenu> */}
        {/* <Link href="/clubhouse" className="cursor-pointer py-4">Clubhouse/Amenities</Link>
        <DropdownMenu title="Experience the Project">
          <DropdownItem href="/gallery">Image Gallery</DropdownItem>
          <DropdownItem href="/walkthrough">Walkthrough Video</DropdownItem>
          <DropdownItem href="/constructionupdates">Construction Updates</DropdownItem>
        </DropdownMenu> */}
        <Link href="/aboutus" className="cursor-pointer py-4">About Us</Link> 
        <Link href="/aPlan" className="cursor-pointer"> 
         <DropdownMenu title="Properties">
          <DropdownItem href="aPlan">Residential Properties</DropdownItem>
          <DropdownItem href="/aPlan">Commericial Properties</DropdownItem>
          
        </DropdownMenu>
        </Link>
        <Link href="/contact" className="cursor-pointer py-4">Contact Us</Link>
       
      </nav>

      <button className={`hidden lg:flex px-8 py-3 text-sm ${isScrolled ? "bg-black text-white" : "bg-[#ffffffcc]"} items-center`}>Get in touch</button>

      <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="w-8 h-8 text-black" /> : <Menu className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`} />}
      </button>

      <div className={`fixed top-0 left-0 h-screen w-3/4 bg-white text-black transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} p-6 lg:hidden overflow-y-auto`}>
        <Image src='/ikaaya/beige.png' className="absolute top-1 left-3 border-b-2 w-20" width={500} height={500} alt="Logo" />
        <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
          <X className="w-8 h-8" />
        </button>
        
        <nav className="mt-20 flex flex-col gap-4">
  <Link href="/" className="py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>

  <MobileDropdownMenu title="About the Project" closeMenu={() => setIsMenuOpen(false)}>
    <DropdownItem href="/location" closeMenu={() => setIsMenuOpen(false)}>Location Advantages</DropdownItem>
    <DropdownItem href="/aPlan" closeMenu={() => setIsMenuOpen(false)}>Unit Configurations</DropdownItem>
    <DropdownItem href="/specifications" closeMenu={() => setIsMenuOpen(false)}>Specifications</DropdownItem>
  </MobileDropdownMenu>

  <Link href="/clubhouse" className="py-2" onClick={() => setIsMenuOpen(false)}>Clubhouse/Amenities</Link>

  <MobileDropdownMenu title="Experience the Project" closeMenu={() => setIsMenuOpen(false)}>
    <DropdownItem href="/gallery" closeMenu={() => setIsMenuOpen(false)}>Image Gallery</DropdownItem>
    <DropdownItem href="/walkthrough" closeMenu={() => setIsMenuOpen(false)}>Walkthrough Video</DropdownItem>
    <DropdownItem href="/constructionupdates" closeMenu={() => setIsMenuOpen(false)}>Construction Updates</DropdownItem>
  </MobileDropdownMenu>

  <Link href="/aboutus" className="py-2" onClick={() => setIsMenuOpen(false)}>About Developer</Link>

  <MobileDropdownMenu title="RERA" closeMenu={() => setIsMenuOpen(false)}>
    <DropdownItem href="https://platinum-towers.com/pdfs/certificate-of-registration-in-rera-essel-platinum.pdf" closeMenu={() => setIsMenuOpen(false)}>Certificate</DropdownItem>
    <DropdownItem href="/rera/faq" closeMenu={() => setIsMenuOpen(false)}>Mdda Approval</DropdownItem>
    <DropdownItem href="/rera/contact" closeMenu={() => setIsMenuOpen(false)}>Bank Approvals</DropdownItem>
    <DropdownItem href="https://platinum-towers.com/pdfs/schedule-of-contruction.pdf" closeMenu={() => setIsMenuOpen(false)}>Construction Updates</DropdownItem>
  </MobileDropdownMenu>
</nav>

        <Link href='/contact'> <button className="mt-6 w-full bg-black text-white py-3">Get in Touch</button> </Link>
      </div>
    </header>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
  return (
    <div className="relative group py-4">
      <button className="cursor-pointer flex justify-center items-center gap-2">{title} <ChevronDown className="w-4 h-4" /></button>
      <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 hidden group-hover:block">
        <ul>{children}</ul>
      </div>
    </div>
  );
};

const MobileDropdownMenu: React.FC<DropdownMenuProps> = ({ title, children, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="w-full flex justify-between items-center py-2" onClick={() => setIsOpen(!isOpen)}>
        {title} <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <ul className="pl-4">
          {React.Children.map(children, (child) =>
            React.isValidElement<DropdownItemProps>(child) // ✅ Explicitly check type
              ? React.cloneElement(child, { closeMenu })
              : child
          )}
        </ul>
      )}
    </div>
  );
};

const DropdownItem: React.FC<DropdownItemProps> = ({ href, children, closeMenu }) => (
  <li className="p-2 hover:bg-gray-200 rounded-md">
    <Link href={href} onClick={closeMenu}>{children}</Link>
  </li>
);

export default Header;

