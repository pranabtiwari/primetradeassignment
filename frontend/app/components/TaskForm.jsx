import { useState } from "react"


const TaskForm = ({ createTask }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("pending")


    const submitForm = (e) => {
        e.preventDefault()
        const payLoad = { title, description, status }
        createTask(payLoad)

    }
    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                
                <h3 className="relative text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 w-2 h-8 rounded-full"></span>
                    Create New Task
                </h3>

                <form onSubmit={submitForm} className="relative space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 ml-1">Title</label>
                        <input 
                            type="text" 
                            placeholder="What needs to be done?" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 ml-1">Description</label>
                        <input 
                            type="text" 
                            placeholder="Add some details..." 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 ml-1">Status</label>
                        <div className="relative">
                            <select
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full appearance-none px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-200 cursor-pointer"
                            >
                                <option value="pending" className="bg-slate-800">Pending</option>
                                <option value="in-progress" className="bg-slate-800">In Progress</option>
                                <option value="completed" className="bg-slate-800">Completed</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-500/25 transform transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TaskForm