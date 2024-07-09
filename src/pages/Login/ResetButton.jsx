import {  sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";



const ResetButton = ({email}) => {

    // şifre sıfırlama e postası gönder
    const handleReset = ()=> {
        sendPasswordResetEmail(auth, email)
        .then(()=> toast.info("Şifre sıfırlama e postası gönderildi. Mailinizi kontrol edin"))
        .catch((err)=> toast.error("Bir hata oluştu:" + err.code));
    }
  return (
    <div>
     <button onClick={handleReset} className='text-red-500'>Şifrenizi mi unuttunuz?</button>
      
    </div>
  )
}

export default ResetButton
