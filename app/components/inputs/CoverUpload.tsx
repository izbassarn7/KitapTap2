'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import {MdAddPhotoAlternate} from "react-icons/md";

declare global {
    var cloudinary: any;
}

interface CoverUploadProps {
    onChange: (value: string) => void;
    value : string;
}

const CoverUpload: React.FC<CoverUploadProps> = (
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
            uploadPreset="mse3cpse"
            options={{
                maxFiles: 1,
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
                    p-20
                    border-gray-300
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4
                    text-gray-400
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
                                "
                            >
                                <Image 
                                    alt="cover"
                                    fill
                                    style={{objectFit: 'cover'}}
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
 
export default CoverUpload;