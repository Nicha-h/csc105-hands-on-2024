//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-amber-200">
      <div className="flex flex-col justify-center items-center font-mono">
        <h1 className="font-black text-8xl text-[#4a3925] pb-6">Oops!</h1>
        <h2 className=' text-[#4a3925] font-black text-3xl'>404 - Page Not Found</h2>
        <p className='italic mt-2 text-[#4a3925] text-sm'>It seems like this page doesn't exist! :D </p>
        
        <button onClick={() => navigate('/')}
          className="mt-5 px-4 py-2 bg-[#4f351f] text-white rounded hover:bg-[#30231d] hover:scale-105 
          transition-all duration-200 ease-in-out transform">
        Go to home
        </button>
      </div>
      
    </div>
  );
};

export default NotFoundPage;