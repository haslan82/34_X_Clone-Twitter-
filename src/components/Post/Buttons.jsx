import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { CiShare2 } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaRetweet } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

const Buttons = () => {
  return (
    <div className="flex justify-between items-center">
   <div className="p-3 rounded-full cursor-pointer
    transition hover:bg-[#33c1f93f]">
        <LuMessageCircle />
    </div>
   <div className="p-3 rounded-full cursor-pointer
    transition hover:bg-[#000ff44]">
        <FaRetweet />
    </div>
   <div className="p-3 rounded-full cursor-pointer
    transition hover:bg-[#ff00d444]">
        <FaRegHeart />
    </div>
   <div className="p-3 rounded-full cursor-pointer
    transition hover:bg-[#3b3b3bac]">
        <LuMessageCircle />
    </div>
    </div>
  )
}

export default Buttons
