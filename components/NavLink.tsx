'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({
  text,
  href,
  icon,
}: {
  text: string;
  href: string;
  icon?: JSX.Element;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
        pathname === href && 'bg-muted font-bold'
      }`}
    >
      {icon && icon}
      {text}
    </Link>
  );
};

export default NavLink;
