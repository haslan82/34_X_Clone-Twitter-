import moment from "moment";
import { MdEdit } from "react-icons/md";


const Userinfo = ({tweet}) => {
  //!  console.log(tweet)
let date = tweet.createdAt?.toDate();
  //! console.log(date)


//moment yardımıyla şuanki tarihten ne kadar uzak olduğunu hesapla
  date = moment(date).fromNow();
  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
      <p>{tweet.user.name} </p>
      <p className="text-gray-400 text-sm">@{tweet.user.name.toLowerCase().split(" ").join("_")} </p>
      {/* //! split  teki tırnak arasında boşluk bırakılacak, join de ise tırnak arasında alt tire verilecek :)) */}
    <p className="text-gray-400 text-sm">{date} </p>
    
{tweet.isEdited && (
    <p className="text-gray-400 text-sm">
        <span className="max-md:hidden">*düzenlendi</span>
        <MdEdit  className="md:hidden"/>
    </p>
)}


    </div>
  )
}

export default Userinfo
