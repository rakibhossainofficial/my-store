"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function LoginBtn() {
  const session = useSession();

  if (session.data) {
    return (
      <>
        Signed in as {session.data.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/register">Register</Link>
    </>
  );
}
