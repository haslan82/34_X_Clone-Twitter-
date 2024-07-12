import { IoClose } from "react-icons/io5";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import upload from "../../utils/upload";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../Loader";

const Modal = ({ tweet, close }) => {
  const [isLoading, setIsLoading] = useState(false);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlarda ki verilere ulaşalım

    const text = e.target[0].value;
    const file = e.target[1].files[0];

    setIsLoading(true);
    // güncellenicek olan dökümanının referansını al

    const tweetRef = doc(db, "tweets", tweet.id);

    try {
      // eğer dosya seçilmediyse sadece yazıyı güncelle
      if (!file || !file?.type.startsWith("image")) {
        await updateDoc(tweetRef, {
          textContent: text,
          isEdited: true,
        });
        return close();
      }
      // dosya seçildiyse hem yazı hem fotoğrafı güncelle:
      // seçilen fotoğrafı storage'a yükle

      const newUrl = await upload(file);

      // belgenin hem yazı hem fotoğraf değerini güncelle

      await updateDoc(tweetRef, {
        textContent: text,
        imageContent: newUrl,
        isEditted: true,
      });

      // başarı bildirimi gönder
      toast.success("Tweet bilgileri güncellendi");
    } catch (err) {
      // hata bildirimi gönder
      toast.error("Bir sorun oluştu");
      console.log(err);
    }

    setIsLoading(false);
    // modalı kapat
    close();
  };

  return (
    <div
      className="fixed inset-0 w-full h-full grid place-items-center
     bg-gray-600 bg-opacity-30"
    >
      <div
        className="bg-black rounded-md py-10 px-8 w-3/4 max-w-[400px]
      min-h-[60vh] max-h[80vh] flex flex-col"
      >
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Tweet'i Düzenle</h1>
          <button onClick={close}>
            <IoClose className="text-3xl transition hover:text-gray-500" />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-1  mt-10 flex flex-col justify-between"
        >
          <div className="flex flex-col ">
            <label className="mb-4">İçeriği Değiştir</label>
            <input
              name="title"
              defaultValue={tweet.textContent}
              type="text"
              className="border rounded-md p-1 text-black"
            />

            <label className="mt-10 mb-4">Fotoğraf Ekle/Değiştir</label>
            <input name="file" type="file" />
          </div>
          <div className="flex justify-end gap-5">
            <button
            onClick={close}
              className=" bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded-full"
              type="button"
            >
              Vazgeç
            </button>
            <button
            disabled={isLoading}
              className=" bg-blue-500 min-w-[75px] flex items-center justify-center hover:bg-gray-600 py-2 px-4 rounded-full"
              type="submit"
            >
              {isLoading? <Loader /> : "Kaydet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
