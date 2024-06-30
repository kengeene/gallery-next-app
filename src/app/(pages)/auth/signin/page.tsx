'use client'
import { signIn } from "next-auth/react"
import { useState } from 'react';
import CustomButton from "@/app/_components/atoms/buttons";
export default function Page() {
   const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn('google');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-gray-900 p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-semibold text-white">Sign In</h2>
      <CustomButton buttonType='secondary' onClick={handleSignIn} isLoading={loading}>
        Connect with Google
      </CustomButton>
    </div>
  );
}
