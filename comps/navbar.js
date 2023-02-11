import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/user-logo.png" width={90} height={80} />
            </div>
            <Link href="/" >Home</Link>
            <Link href="/about">About</Link>
            <Link href="/list">Listing</Link>
        </nav>
     );
}
 
export default Navbar;