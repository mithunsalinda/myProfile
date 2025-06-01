'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import RequirentTag from './RequirentTag';

type TextInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
};

export default function TextInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required,
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="flex items-center mb-4 w-full max-w-md">
      <label className="w-60 text-sm font-medium text-black text-right mr-2">
        {label} {required && <RequirentTag />}
      </label>
      <div className="relative w-full">
        <input
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-[100%] px-4 py-2 pr-10 rounded-md focus:outline-none border border-black"
        />
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
