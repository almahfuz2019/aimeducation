
import { BsMessenger } from 'react-icons/bs';

const Messange = () => {
  return (
    <div className="fixed bottom-0 right-0 p-3 z-30 ">
      <button className="bg-gradient-to-br from-primary via-primary/70 to-primary text-white    py-2 px-4 rounded flex items-center space-x-2">
        <BsMessenger className="w-6 h-6" />
        <span>Chat</span>
      </button>
    </div>
  );
};

export default Messange;
