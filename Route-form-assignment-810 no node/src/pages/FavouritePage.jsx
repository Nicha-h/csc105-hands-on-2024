import { useNavigate } from "react-router-dom";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FavouritePage = () => {
  const navigate = useNavigate();
  
  const schema = z.object({
    number: z.number({
      required_error: "A number is required",
      invalid_type_error: "Invalid type, must be a number"
    })
    .min(1, { message: "Must be at least 1" })
    .max(100, { message: "Cannot exceed 100" }),
    
    q: z.enum(["love", "like"], {
      required_error: "Please select how you feel",
      invalid_type_error: "Invalid selection - choose 'love' or 'like'"
    }),
    
    size: z.enum(["small", "medium", "large"], {
      required_error: "Size selection is required",
      invalid_type_error: "Please select small, medium, or large"
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  
  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <div className="bg-amber-200 w-screen h-screen flex justify-center items-center">
      <div className="-mt-30 p-10 w-1/4 h-auto bg-white rounded-xl font-mono">
        <h1 className="flex justify-center text-2xl font-bold mb-6">Favourites Page</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Number Input */}
          <div>
            <label className="block mb-1 font-black">Number: </label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              {...register("number", { valueAsNumber: true })}
              placeholder="Enter number from 1-100"
            />
            {errors.number && (
              <p className="italic text-red-500 text-sm mt-1">{errors.number.message}</p>
            )}
          </div>

          {/*q*/}
          <div>
            <label className="block mb-1">How do you feel?</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="love"
                  className="mr-2"
                  {...register("q")}
                />
                Love
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="like"
                  className="mr-2"
                  {...register("q")}
                />
                Like
              </label>
            </div>
            {errors.q && (
              <p className="italic text-red-500 text-sm mt-1">{errors.q.message}</p>
            )}
          </div>

          {/* Size Dropdown */}
          <div>
            <label className="block mb-1">Size</label>
            <select
              className="w-full p-2 border rounded"
              {...register("size")}
            >
              <option value="">Select size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && (
              <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-200 ease-in-out transform"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

  export default FavouritePage;