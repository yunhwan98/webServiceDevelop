import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo: React.FC = () => {
    return (
        <Link href="/">
            <Image
                src="/icons/nextjs-icon.svg"
                alt="nextjs"
                width="220"
                height="80"
            />
        </Link>
    );
};
