import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-screen w-full bg-chat-bg overflow-hidden'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
