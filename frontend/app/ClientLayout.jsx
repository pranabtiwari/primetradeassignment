"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "./lib/auth.api.js";

export default function ClientLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/me");
        setLoading(false);
      } catch (error) {
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router]);

  return <>{loading ? <div>Loading...</div> : children}</>;
}
