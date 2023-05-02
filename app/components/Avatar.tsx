'use client';
import Image from "next/image";

interface AvatarProps {
    src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = (
    {
        src,
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