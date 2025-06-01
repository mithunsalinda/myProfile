'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function FormButton({
  children,
  type = 'button',
  variant = 'primary',
  loading = false,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'py-2 rounded-md text-xs font-bold transition flex items-center justify-center gap-2 h-[40px]';

  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700',
    secondary: 'bg-white text-black border border-gray-600 hover:bg-violet-700 hover:text-white',
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <>
          {icon && <span className="w-5 h-5">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
