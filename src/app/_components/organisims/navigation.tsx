'use client'
import CustomButton from '@/app/_components/atoms/buttons'
import { usePathname } from "next/navigation";
import Link from 'next/link'
import type { UserSession } from "@/app/constants/types";

export default function Navigation({ session }: { session: UserSession }) {
  const pathName = usePathname();
  return (
    <div className="flex h-1/2 flex-col justify-center">
      <CustomButton buttonType={pathName === "/" ? "secondary" : "primary"}>
        <Link href="/">Community</Link>
      </CustomButton>
      <CustomButton
        buttonType={pathName === "/my-store" ? "secondary" : "primary"}
      >
        <Link href={session ? "/my-store" : "/auth/signin"}>My Store</Link>
      </CustomButton>
    </div>
  );
}