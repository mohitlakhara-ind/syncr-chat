import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

	const bubbleColor = fromMe
		? "bg-chat-bubbleSent text-white"
		: "bg-chat-bubbleReceived text-chat-textDark border border-chat-border shadow-sm";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName} mb-2`}>
			<div className='chat-image avatar'>
				<div className='w-9 rounded-full border border-chat-border'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${bubbleColor} ${shakeClass} py-2 px-4 shadow-sm min-h-0`}>
				{message.message}
			</div>
			<div className='chat-footer text-[11px] text-chat-textMuted flex gap-1 items-center mt-1'>
				{formattedTime}
			</div>
		</div>
	);
};
export default Message;
