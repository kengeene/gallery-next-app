'use client'
import { signIn } from "next-auth/react"
import { useState } from 'react';
import CustomButton from "@/app/_components/atoms/buttons";
// import { useRouter } from "next/navigation";

export default function Page() {
   const [loading, setLoading] = useState(false);
  //  const router = useRouter();

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      signIn("google", { callbackUrl: "/my-store" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-background p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-normal text-white">Sign In</h2>
      <div style={{width: '257px'}}>
      <CustomButton buttonType='secondary' onClick={(e) => handleSignIn(e)} isLoading={loading}>
        Connect with Google
      </CustomButton>
      </div>
    </div>
  );
}
