import { useNavigate } from "react-router-dom";
import blehGif from '../assets/bleh.gif';

const SignUpPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-amber-200 w-screen h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full h-full font-mono">
                <div className="p-10 w-1/4 h-auto bg-white rounded-xl">
                    <p className="flex justify-center text-6xl text-[#4a3925]">Sign up</p>

                    <div className='flex justify-center items-center my-4'>
                        <img src={blehGif} alt="Funny animation" className="max-w-full h-auto"/>
                    </div>

                    <button onClick={() => navigate("/")} className="w-full py-2 bg-amber-500 hover:bg-amber-600 hover:scale-105 text-white rounded 
                    transition-all duration-200 ease-in-out transform">
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;