'use client';

import React from 'react';
interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  return (
    <div className="flex items-center mb-4 w-full max-w-md">
      {label && (
        <label className="w-60 text-sm font-medium text-black text-right mr-2">{label}</label>
      )}
      <div className="relative w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
