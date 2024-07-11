import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { CiShare2 } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaRetweet } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { db, auth } from "../../firebase";


//! console.log(auth)

const Buttons = ({tweet}) => {

  // oturumu açık olan kullanıcı bu tweet i like ladı mı?
const isLiked = tweet.likes.includes(auth.currentUser.uid);
  //!  console.log(auth.currentUser.uid)



  //!  console.log(tweet.likes)

  // 1) 31. satırda onclick verdikten sonra buraya gelip // like durumunu terine çevirecek fonksiyon yaz
  const toggleLike = async ()=>{


// 2) güncellenecek dökümanın referansını al
const tweetRef  = doc(db, "tweets", tweet.id);

  // 3) referansı alınan tweet dökümanını güncelle
await updateDoc(tweetRef, {
 // isEdited:true,
 // textContent: "Yeni yazı içeriği",

    likes: 
    isLiked 
    ? arrayRemove(auth.currentUser.uid) 
    : arrayUnion(auth.currentUser.uid),

})
};
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
   <div onClick={toggleLike} className="p-3 flex gap-2 items-center rounded-full cursor-pointer
    transition hover:bg-[#ff00d444]">

      {isLiked ? <FaHeart className="text-red-500" /> : 
        <FaRegHeart />}
        <p>{tweet.likes.length} </p>
    </div>
   <div className="p-3 rounded-full cursor-pointer
    transition hover:bg-[#3b3b3bac]">
        <LuMessageCircle />
    </div>
    </div>
  )
}

export default Buttons
