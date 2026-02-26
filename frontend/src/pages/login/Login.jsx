import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-8 clean-card'>

				{/* Logo & Title */}
				<div className='flex flex-col items-center mb-8'>
					<div className='w-14 h-14 rounded-2xl bg-chat-primary flex items-center justify-center shadow-sm mb-4'>
						<svg className='w-7 h-7 text-white' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z' />
						</svg>
					</div>
					<h1 className='text-3xl font-bold text-chat-textDark tracking-tight'>
						Welcome back
					</h1>
					<p className='text-sm text-chat-textMuted mt-1'>Sign in to continue chatting</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-5'>
					<div>
						<label className='block text-sm font-medium text-chat-textDark mb-2'>Username</label>
						<input
							type='text'
							placeholder='Enter your username'
							className='clean-input w-full h-11 px-4 text-sm'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-chat-textDark mb-2'>Password</label>
						<input
							type='password'
							placeholder='Enter your password'
							className='clean-input w-full h-11 px-4 text-sm'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to='/signup'
						className='block text-sm text-chat-primary hover:underline transition-colors duration-200'
					>
						Don&apos;t have an account? Sign up
					</Link>

					<button
						type='submit'
						className='btn-primary-action w-full h-11 text-sm mt-2'
						disabled={loading}
					>
						{loading
							? <span className='loading loading-spinner loading-sm'></span>
							: "Sign In"
						}
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
