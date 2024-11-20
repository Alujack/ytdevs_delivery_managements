"use client"
import React from 'react';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h2 className="text-2xl font-semibold mb-2">Create Account With</h2>
      <p className="text-gray-500 text-sm mb-6 text-center">
        By using our services you are agreeing to our
        <Link href="/terms" className="text-blue-600 hover:underline ml-1">
          Terms
        </Link> 
        and 
        <Link href="/privacy" className="text-blue-600 hover:underline ml-1">
          Privacy Statement
        </Link>.
      </p>
      <button className="w-4/5 py-2 mb-3 border border-gray-300 rounded hover:bg-gray-100">
        Sign in with Email
      </button>
      <button className="w-4/5 py-2 mb-3 border border-gray-300 rounded hover:bg-gray-100">
        Sign in with Phone
      </button>
      <button className="w-4/5 py-2 mb-3 border border-gray-300 rounded hover:bg-gray-100">
        Sign in with Facebook
      </button>
      <button className="w-4/5 py-2 mb-6 border border-gray-300 rounded hover:bg-gray-100">
        Sign in with Google
      </button>

      <div className="text-center">
        <div className ='flex flex-row justify-center mt-20'>
        <img src="/images/YTDEvs_icon.png" alt="ytdev icon" /></div>
        <p className="text-sm">
          Have an account?{" "}
          <Link href="/auth/login" className="text-purple-600 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
