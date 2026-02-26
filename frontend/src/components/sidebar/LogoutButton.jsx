import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto pt-4'>
			{!loading ? (
				<div
					className='flex items-center gap-2 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors duration-200 w-max'
					onClick={logout}
				>
					<BiLogOut className='w-6 h-6' />
					<span className="text-sm font-medium">Logout</span>
				</div>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
