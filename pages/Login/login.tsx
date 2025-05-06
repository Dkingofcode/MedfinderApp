// import { signIn, signOut, useSession } from "next-auth/react";


import React from 'react'

const login = () => {
  return (
    <div>
      
    </div>
  )
}

export default login;

// export default function AuthButtons() {
//   const { data: session } = useSession();

//   return session ? (
//     <div>
//       <p>Welcome, {session.user.email}</p>
//       <button onClick={() => signOut()}>Logout</button>
//     </div>
//;   ) : (
//     <button onClick={() => signIn()}>Login</button>
//   );
// }
