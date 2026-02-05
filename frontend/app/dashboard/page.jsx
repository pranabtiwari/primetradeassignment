"use client"

import { useState, useEffect } from "react"
import api from "../lib/auth.api.js"
import TaskForm from "../components/TaskForm.jsx"


export default function Dashboard() {
  const [task, setTask] = useState([])
  const fetchTasks = async () => {
    const response = await api.get('/tasks')
    setTask(response.data)
  }
  const createTask = async (data) => {
    await api.post('/tasks', data)
    fetchTasks()
  }
  const deleteTask = async (_id) => {
     await api.delete(`/tasks/${_id}`)
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])



    return (
        <div className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-indigo-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-block mb-4">
                        <span className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-indigo-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                            Task Management
                        </span>
                    </div>
                    <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
                        Dashboard
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Organize your day, manage projects, and track your productivity with ease.
                    </p>
                </header>

                <TaskForm createTask={createTask} />

                <div className="mt-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            Your Tasks
                            <span className="px-2.5 py-0.5 bg-slate-800 text-slate-400 rounded-lg text-sm font-medium border border-slate-700">
                                {task.length}
                            </span>
                        </h2>
                        <div className="flex gap-2">
                            {/* Placeholder for future filters if needed */}
                        </div>
                    </div>

                    {task.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {task.map((item, key) => (
                                <li key={item._id || key} className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-4 right-4 z-20">
                                        <button 
                                            onClick={() => deleteTask(item._id)}
                                            className="p-2 bg-slate-800 text-slate-400 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
                                            title="Delete task"
                                        > 
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                        </button>
                                    </div>

                                    <div className="mb-4 pr-12">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${
                                            (item.status || 'pending') === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                            (item.status || 'pending') === 'in-progress' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' :
                                            'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                        }`}>
                                            {(item.status || 'pending') === 'completed' ? 'Completed' :
                                            (item.status || 'pending') === 'in-progress' ? 'In Progress' :
                                            'Pending'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors">
                                        {item.title || 'Untitled Task'}
                                    </h3>
                                    
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {item.description || 'No description provided.'}
                                    </p>

                                    <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                                        <span className="text-xs text-slate-500 font-medium">Task ID: #{item._id ? item._id.toString().slice(-4) : '????'}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
                                <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">No tasks yet</h3>
                            <p className="text-slate-500 max-w-sm mx-auto">
                                Get started by creating your first task using the form above.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )


}