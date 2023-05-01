import { genres } from "@/app/genres";
import React from "react";
import Select from "react-select";

interface GenreSelectProps {
  value?: any;
  onChange: (value: any) => void;
}

const GenreSelect: React.FC<GenreSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <Select
        placeholder="Select a genre"
        isClearable
        options={genres}
        value={value}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option: any) => (
          <div
            className="
                flex
                flex-row
                items-center
                gap-3
            "
          >
            <div>
              {option.emoji}
            </div>
            <div>
              {option.label}
            </div>
          </div>
        )}
        // Customize classNames and theme as needed
      />
    </div>
  );
};

export default GenreSelect;
