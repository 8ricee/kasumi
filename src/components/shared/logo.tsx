"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    className?: string;
}

function Logo({ className }: LogoProps) {
    return (
        <Link href="/">
            <Image
                src="/favicon/dark.svg"
                alt="Logo"
                width={50}
                height={50}
                priority
                className={className}
            />
        </Link>
    );
}

export default Logo;
