"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/auth.api";

export default function Register() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post("/auth/register", formData);
            
            
            if (response.status === 201) {
                router.push("/login");
            }

        } catch (error) {
            console.error(error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />

            <button
             type="submit"
             disabled={loading}
             >
             {loading ? "Registering..." : "Register"}
            </button>
        </form>
    );
}
