import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import {MdAddPhotoAlternate} from "react-icons/md";

declare global {
    var cloudinary: any;
}

interface AvatarUploadProps {
    onChange: (value: string) => void;
    value : string;
}

const AvatarUpload: React.FC<AvatarUploadProps> = (
    {
        onChange,
        value
    }
) => {

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url);
    }, [onChange]);

    return ( 
        <CldUploadWidget 
            onUpload={handleUpload}
            uploadPreset="mse3cpse" // replace with your upload preset
            options={{
                maxFiles: 1, // add circular cropping for avatar
            }}
        >
            {({ open }) => {
                return (
                    <div 
                    onClick={() => open?.()}
                    className="relative
                    cursor-pointer
                    hover:opacity-80
                    transition
                    border-2
                    border-dashed
                    p-10
                    border-gray-300
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4
                    text-gray-400
                    rounded-full // round the div for avatar shape
                    w-40 h-40 // change dimensions for avatar size
                    "
                    >
                        <MdAddPhotoAlternate size={50} />
                        <div>
                            <p>Click to upload</p>
                        </div>
                        {value && (
                            <div
                                className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                rounded-full // round the image for avatar shape
                                overflow-hidden // hide the overflow parts after rounding
                                "
                            >
                                <Image 
                                    alt="avatar"
                                    layout="fill" // you had fill incorrectly written as style
                                    objectFit="cover"
                                    src={value}
                                />

                            </div>
                        )}
                    </div>
                );
            }}
        </CldUploadWidget>
     );
}
 
export default AvatarUpload;
