import React from 'react'
import { NavLink, useParams, useSearchParams } from "react-router-dom";

function FavouriteDetailPage() {
    const { PostId } = useParams();
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const size = searchParams.get("size");
  
    return (
    <div className="bg-amber-200 w-screen h-screen flex justify-center items-center">
      <div className="-mt-30 p-10 w-1/4 h-auto bg-white rounded-xl font-mono">
            <h1 className="flex justify-center text-2xl font-bold mb-6">Favourite Details</h1>
            
            <div className="border-3 border-amber-600 p-6 rounded-lg shadow">
            <p className="text-lg mb-2">
                Your favourite post is <span className="font-semibold text-blue-600">{q || "unknown"}</span>.
            </p>
            <p className="text-lg mb-2">
                Post ID is <span className="font-semibold text-green-600">{PostId}</span>.
            </p>
            {size && (
                <p className="text-lg">
                Size is <span className="font-semibold text-purple-600">{size}</span>.
                </p>
            )}
            </div>
            <div className='flex justify-end mt-4'>
                <NavLink to="/fav" className={"hover:underline hover:text-blue-600"}> Back </NavLink>
            </div>
        </div>
      </div>
    );
  };

export default FavouriteDetailPage
