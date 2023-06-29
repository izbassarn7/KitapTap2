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
            height={"200"}
            width={"200"}
            src={src || "/images/placeholder.png"}
            alt="Avatar"
        />
     );
}
 
export default Avatar;