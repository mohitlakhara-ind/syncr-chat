import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex-1 flex flex-col min-w-0'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Chat Header */}
					<div className='border-b border-purple-500/20 px-5 py-3 flex items-center gap-3'>
						<div className='w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-white text-sm font-semibold shrink-0'>
							{selectedConversation.fullName?.charAt(0).toUpperCase()}
						</div>
						<div>
							<p className='text-sm font-semibold text-purple-100'>{selectedConversation.fullName}</p>
							<p className='text-xs text-purple-400/60'>Active now</p>
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='text-center flex flex-col items-center gap-4 p-8'>
				<div className='w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-700/40 to-purple-600/20 border border-purple-500/20 flex items-center justify-center'>
					<svg className='w-10 h-10 text-purple-400/60' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z' />
					</svg>
				</div>
				<div>
					<p className='text-lg font-semibold text-purple-200'>
						Hey, {authUser.fullName?.split(" ")[0]} 👋
					</p>
					<p className='text-sm text-purple-400/60 mt-1'>Select a conversation to start chatting</p>
				</div>
			</div>
		</div>
	);
};
