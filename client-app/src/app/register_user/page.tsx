import React from 'react';

import LogoButton from '@/components/ui/LogoButton';
import RegisterForm from './components/RegisterForm';
export default function LoginPage() {
  return (
    <div className="bg-[url('/bg-blur.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-white/60 p-5 w-full text-center backdrop-blur-sm">
        <div className="text-left">
          <LogoButton />
        </div>
        <h1 className="text-2xl font-light mb-1">
          Welcome to <span className="font-bold">myApp</span>
        </h1>
        <hr className="w-18 mx-auto my-4 border-gray-500" />
        <div className="p-10  rounded-md shadow-md  w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-center justify-content-center mx-auto">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
