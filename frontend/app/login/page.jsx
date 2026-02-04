"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/auth.api.js";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post("/auth/login", formData);
            if (response.status === 200) {
                router.push("/dashboard");
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
             name = "email"
             value = {formData.email}
             onChange={handleChange}
              />
              <input type="text"
                name = "password"
                onChange={handleChange}
                value={formData.password}
               />
               <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
               </button>
        </form>
    )

}