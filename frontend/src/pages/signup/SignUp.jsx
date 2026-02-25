import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-8 rounded-2xl shadow-glow glass-card'>

				{/* Logo & Title */}
				<div className='flex flex-col items-center mb-7'>
					<div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-glow mb-4'>
						<svg className='w-7 h-7 text-white' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z' />
						</svg>
					</div>
					<h1 className='text-3xl font-bold text-white tracking-tight'>
						Join <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300'>Syncr</span>
					</h1>
					<p className='text-sm text-purple-300/60 mt-1'>Create your account to get started</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='block text-sm font-medium text-purple-300/80 mb-2'>Full Name</label>
						<input
							type='text'
							placeholder='John Doe'
							className='Syncr-input w-full h-11 px-4 text-sm'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-purple-300/80 mb-2'>Username</label>
						<input
							type='text'
							placeholder='johndoe'
							className='Syncr-input w-full h-11 px-4 text-sm'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-purple-300/80 mb-2'>Password</label>
						<input
							type='password'
							placeholder='Enter password'
							className='Syncr-input w-full h-11 px-4 text-sm'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-purple-300/80 mb-2'>Confirm Password</label>
						<input
							type='password'
							placeholder='Confirm password'
							className='Syncr-input w-full h-11 px-4 text-sm'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={"/login"}
						className='block text-sm text-purple-400/70 hover:text-purple-300 transition-colors duration-200'
					>
						Already have an account? <span className='underline underline-offset-2'>Sign in</span>
					</Link>

					<button
						type='submit'
						className='btn-violet w-full h-11 text-sm'
						disabled={loading}
					>
						{loading ? <span className='loading loading-spinner loading-sm'></span> : "Create Account"}
					</button>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
