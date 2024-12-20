import { useState } from 'react';
import InputLabel from '@/Components/InputLabel'; // Assuming you have an InputLabel component


export default function InputDropdown ({ label, value, options, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <InputLabel value={label} />

            <div
                onClick={toggleDropdown}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md cursor-pointer"
            >
                <span className="text-sm">{value}</span>
            </div>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

