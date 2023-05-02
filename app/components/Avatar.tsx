'use client';
import Image from "next/image";

interface AvatarProps {
    src?: string | null | undefined;
    height?: string;
    width?: string;
}

const Avatar: React.FC<AvatarProps> = (
    {
        src,
        height,
        width
    }
) => {
    return ( 
        <Image
            className="rounded-full"
            height={"40"}
            width={"40"}
            src={src || "/images/placeholder.webp"}
            alt="Avatar"
        />
     );
}
 
export default Avatar;