import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";



// parent route' un  elementi
const Protected = () => {

  
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    // kullanıcının oturumunu izlr ve oturumda bir değişiklik olduğunda callback(cb)
    // function ı tetikler
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

//! console.log(isAuth)

  // eğer kullanıcının yetkisi yoksa login e yönlendir
  if (isAuth === false) {
   return <Navigate to="/" replace/>
  }

  // eğer yetkisi varsa alt rout taki elementi göster
  return <Outlet />;
};

export default Protected;
