import { IoClose } from "react-icons/io5";

const Modal = ({tweet, close}) => {
  return (
    <div className='fixed inset-0 w-full h-full grid place-items-center
     bg-gray-600 bg-opacity-30'>
      <div className='bg-black rounded-md py-10 px-8 w-3/4 
      min-h-[60vh] max-h[80vh] flex flex-col'>
        <div className="flex justify-between">
          <h1 className='text-xl font-bold'>Tweet'i Düzenle</h1>
          <button onClick={close}>
          <IoClose  className="text-3xl transition hover:text-gray-500"/>
          </button>
        </div>
        <form className="flex-1  mt-10 flex flex-col justify-between">
          <div className="flex flex-col ">
            <label className="mb-4">İçeriği Değiştir</label>
            <input name="title" defaultValue={tweet.textContent} 
            type="text" className="border rounded-md p-1 text-black"/>

<label className="mt-10 mb-4">Fotoğraf Ekle/Değiştir</label>
<input name="file" type="file" />

          </div>
          <div className="flex justify-end gap-5">
            <button 
            className=" bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded-full" 
            type="button">Vazgeç</button>
            <button 
            className=" bg-blue-500 hover:bg-gray-600 py-2 px-4 rounded-full" 
            type="submit">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
