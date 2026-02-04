"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/auth.api";
import Link from "next/link";

export default function Register() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
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
            setError(error.response?.data?.error || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };
 
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4">
            <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl shadow-slate-900/50 backdrop-blur-md p-8">
                <h1 className="text-2xl font-semibold text-white text-center mb-2">Create your account</h1>
                <p className="text-sm text-slate-400 text-center mb-8">Join to start managing your tasks efficiently</p>

                <div>

                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {
                        error && (
                            <div className="p-3 bg-red-600/20 text-red-400 border border-red-400 rounded-md text-sm text-center">
                                {error}
                            </div>
                        )
                    }
                    <div className="space-y-2">
                        <label htmlFor="username" className="block text-sm font-medium text-slate-200">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Your username"
                            className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition shadow-sm"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition shadow-sm"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-slate-200">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a strong password"
                            className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition shadow-sm"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center cursor-pointer rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/30 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-60 disabled:cursor-not-allowed transition"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                    <p className="text-xs text-center text-slate-500">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-emerald-400 hover:text-emerald-300">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
