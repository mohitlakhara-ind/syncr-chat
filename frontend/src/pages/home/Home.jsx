import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-[85vh] w-full max-w-5xl rounded-2xl overflow-hidden glass-card shadow-glow-lg'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
