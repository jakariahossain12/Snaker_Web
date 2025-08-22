"use client";

import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Login() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1d232a]">
      <div className="p-8  rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6 text-primary">
          Login with your google account
        </h1>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-green-700"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
