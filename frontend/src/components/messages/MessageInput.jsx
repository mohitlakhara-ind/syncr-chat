import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='p-4 bg-white border-t border-chat-border' onSubmit={handleSubmit}>
			<div className='w-full relative flex items-center'>
				<input
					type='text'
					className='text-sm rounded-full block w-full pl-4 pr-12 py-3 bg-chat-bg border border-chat-border text-chat-textDark placeholder-chat-textMuted focus:outline-none focus:border-chat-primary focus:ring-1 focus:ring-chat-primary transition-colors'
					placeholder='Type a message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'
					className={`absolute right-2 p-2 rounded-full flex items-center justify-center transition-colors
						${message.trim() ? 'bg-chat-primary text-white hover:bg-chat-primaryHover' : 'text-chat-textMuted hover:bg-gray-200'}`}
					disabled={loading || !message.trim()}
				>
					{loading ? <div className='loading loading-spinner w-4 h-4'></div> : <BsSend className="w-4 h-4" />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;

// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;
