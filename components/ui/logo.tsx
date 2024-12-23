import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
      <Image src="/images/logo.jpg" alt="Nexura labs" width={64} height={64} />
  );
}
