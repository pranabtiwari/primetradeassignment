"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import api from "./lib/auth.api.js";

export default function ClientLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      // Skip auth check for public routes
      if (pathname === "/") {
        setLoading(false);
        return;
      }

      try {
        await api.get("/me");
        setLoading(false);
      } catch (error) {
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router, pathname]);

  return <>{loading ? <div>Loading...</div> : children}</>;
}
