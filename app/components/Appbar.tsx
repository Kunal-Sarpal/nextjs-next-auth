'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

function Appbar() {

    const router = useRouter();
    const session = useSession();

    return (
        <div className='flex p-5 shadow-xl gap-10'>
          
                <button onClick={() => {
                    signOut();
                    // router.push("/ap")
                }}>Sign out</button>
      
                <button onClick={() => {
                    signIn()
                    router.push("/")
                }}>Sign in</button>
                {JSON.stringify(session)}
 
        </div>
  

    )
}

export default Appbar
