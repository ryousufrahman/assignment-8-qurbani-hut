'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href , children}) => {
    const pathname = usePathname()
    const isActive = href === pathname
    return (
        <Link href={href} className={`${isActive ? "border-b-2 border-b-green-600 text-green-700 font-bold" : "" } text-gray-700 hover:text-green-700 font-medium transition`} >{children}</Link>
    );
};

export default NavLink;