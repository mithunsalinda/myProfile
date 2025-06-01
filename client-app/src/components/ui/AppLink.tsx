'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export type LinkVariant = 'underline' | 'no-underline';

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: LinkVariant;
  className?: string;
};

export const AppLink: React.FC<AppLinkProps> = ({
  href,
  children,
  variant = 'no-underline',
  className,
}) => {
  const baseClass = 'font-medium text-blue-600 dark:text-blue-500';
  const underlineClass =
    variant === 'underline' ? 'underline hover:no-underline' : 'hover:underline';

  return (
    <Link href={href} className={clsx(baseClass, underlineClass, className)}>
      {children}
    </Link>
  );
};
