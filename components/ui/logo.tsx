import Image from "next/image";

export default function Logo({
  size = 48,
  priority = false,
}: {
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo.jpg"
      alt="Nexura Labs"
      width={size}
      height={size}
      className="rounded-lg object-cover"
      priority={priority}
    />
  );
}
