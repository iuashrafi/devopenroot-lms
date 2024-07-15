import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex space-x-2">
      <Image height={40} width={40} alt="logo" src="/logo.svg" />
      <span className="font-medium">Devopenroot</span>
    </Link>
  );
};
