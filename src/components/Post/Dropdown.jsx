import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import Modal from "../Modal";


// uiverse.io sitesine gittik
const Dropdown = ({tweet}) => {
const [isModalOpen, setIsModalOpen] = useState(false);

// silme
const handleDelete = () => {
// silinecek tweet dökümanın referansını al.
const tweetRef = doc(db, "tweets", tweet.id)
// dökümanı kaldır
deleteDoc(tweetRef)
.then(()=> toast.info("Tweet akıştan kaldırıldı"))
.catch(()=> toast.error("Bir sorun oluştu"))

};
// güncelleme
const handleEdit = () => {
  setIsModalOpen(true);
};


// siteden kopyaladığımız html kodunu buraya yapıştırınca hata verdi. <hr> lara   ve input lara dikkat bu halden <br /> slash ekledik tüm kodlara
// daha sonra css i ni de kopyala index.css sayfasına yapıştır



  return (
  <>
<label className="popup">
  <input type="checkbox"/>
  <div className="burger" >
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav className="popup-window">
    <legend>Eylemler</legend>
    <ul>
      <li>
        <button onClick={handleEdit}>
        <MdEdit />

          <span>Düzenle</span>
        </button>
      </li>
      <hr/>
      <li>
        <button onClick={handleDelete}>
        <FaTrashAlt className="text-red-500"/>
          <span>Sil</span>
        </button>
      </li>
    </ul>
  </nav>
</label>
{isModalOpen && <Modal tweet={tweet} close={()=> setIsModalOpen(false)} />}
</>
  );
}

export default Dropdown
