'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;

}


const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return ( 
        <div   
            onClick={onClick}
            className="
            px-2
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
            text-neutral-500
            "
        >
            {label}
        </div>
     );
}
 
export default MenuItem;