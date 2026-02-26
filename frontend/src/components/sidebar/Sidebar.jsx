import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-chat-border bg-chat-sidebar p-4 flex flex-col w-72 min-w-72 h-full'>
			{/* Brand header */}
			<div className='flex items-center gap-2 mb-5'>
				<div className='w-8 h-8 rounded-xl bg-chat-primary flex items-center justify-center'>
					<svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' />
					</svg>
				</div>
				<span className='text-lg font-bold text-chat-textDark'>Chattr</span>
			</div>

			<SearchInput />
			<div className='my-3 border-t border-chat-border'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
