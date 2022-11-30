import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function Navbar({ logout }) {
    const router = useRouter();
    const handleClick = () => {
        router.push(logout);
    };
    return (
        <div>
            <div className=" mx-auto flex bg-gray-300 justify-between p-3">
                <div className="bg-gray-500 text-black px-4 py-2 rounded-xl ">
                    <button>Ory </button>
                </div>
                <div className="flex space-x-2 leading-tight font-extralight">
                    <div className="flex items-center">
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg uppercase text-md font-opensans text-blueGray-600">ADMIN PAGE</button>
                    </div>
                    <div className="flex items-center">
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg uppercase text-md font-opensans text-blueGray-600">HOME PAGE</button>
                    </div>
                    <div>
                        <button onClick={handleClick} className="px-4 py-2 bg-gray-800 text-white rounded-lg uppercase text-md font-opensans text-blueGray-600 hover:text-amber-500 mr-2 ">
                            logout
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex justify-start  p-10 bg-slate-400 min-h-screen mx-auto">
                <div className="flex flex-col space-y-5 p-6 bg-slate-200 rounded-md min-w-full">
                    <div className="font-bold font-serif">
                        Welcome To Ory
                    </div>
                    <div>
                        <p>This app implements kratos and ketos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
