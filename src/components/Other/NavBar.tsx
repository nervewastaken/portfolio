import { header } from "@/lib/header";
import Link from "next/link";
import NavBarLogos from "./NavBarLogos";

const NavBar = () => {
  const layHeader = (data: { id: number; name: string; to: string }) => {
    return (
      <li
        className="mx-2 text-sm xs:text-base md:text-xl lg:text-2xl xxs:text-xs"
        key={data.id}
      >
        <Link href={data.to}>{data.name}</Link>
      </li>
    );
  };

  return (
    <header className="flex items-end justify-end my-4">
      <div className="mr-auto">
        <NavBarLogos />
      </div>
      <nav>
        <ul className="flex items-end justify-center text-lg ">{header.map(data => layHeader(data))}</ul>
      </nav>
    </header>
  );
};

export default NavBar;