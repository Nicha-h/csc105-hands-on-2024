import { useNavigate, NavLink } from "react-router-dom";
import { z } from "zod";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
    const navigate = useNavigate();
    const userSchema = z.object({
      email: z.string().email("Use a proper email format!"),
      password: z.string().min(6, "Password must at least 6 characters long"),
    
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(userSchema)});
  
    const onSubmit = (data) => {
      console.log("Form submitted:", data);
      navigate("/");
    };
  
  return (
    <>
    <div className="flex justify-center items-center w-screen h-screen bg-amber-200">
      <div className="flex flex-col justify-center items-center w-150 h-100 bg-white shadow-xl rounded-2xl">
        <div className="font-mono font-bold text-5xl">User Login</div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-2">
            <p className="font-mono pb-1">Email</p>
            <input className="border-2 rounded-lg w-100 h-10 pl-2" {...register("email")} placeholder="Email" />
            {errors.email && <p className="error-message ">{errors.email.message}</p>}
          </div>
          <div className="p-2">
            <p className="font-mono pb-1">Password</p>
            <input className="border-2 rounded-lg w-100 h-10 pl-2" {...register("password")} placeholder="Password" />{errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full h-10 bg-amber-300 hover:bg-amber-400 hover:scale-105 rounded-lg font-mono transition-all duration-200 ease-in-out transform mt-3 mb-2"
          >
            Login
          </button>

          <div className="text-center font-mono text-sm">
            <span>Don't have an account? </span>
            <NavLink
              to="/signup"
              className="text-amber-600 hover:underline hover:text-amber-800"
            >
              Sign Up
            </NavLink>
          </div>
      </form>
      
      
      
      </div>
    </div>

    </>
  );
};
  
  export default LoginPage;