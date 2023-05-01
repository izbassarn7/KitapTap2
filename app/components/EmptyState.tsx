'use client';

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = (
    {
    title = "No books found",
    subtitle = "Try changing the filters or posting a new book",
    showReset 
    }
) => {
    const router = useRouter();
    return ( 
        <div
            className="
            pt-56
            h-[60hv]
            flex
            flex-col
            justify-center
            items-center
            gap-2
            "
        >
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button 
                        outline
                        label="Reset filters"
                        onClick={() => router.push("/")}
                    />
                )}
            </div>
        </div>
     );
}
 
export default EmptyState;