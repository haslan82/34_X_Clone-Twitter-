import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Form from "../../components/Form";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Loader from "../../components/Loader";
import Post from "../../components/Post";

const Main = ({ user }) => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    //  1) abone olunacak kolleksiyonun referansını al
    const ref = collection(db, "tweets");

    // 7) abonelik ayarları
    const q = query(ref, orderBy("createdAt", "desc"));

    //  2) kolleksiyona abone olunuyor
    const unsub = onSnapshot(ref, (snapshot) => {
      //! console.log(snapshot.docs)

      //   4) tweetlerin geçici olarak tutulacağı dizi
      const temp = [];

      //      5)  doc 'ların içerisinde ki veriye erişip geçici diziye aktarıyoruz
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
      //!console.log(doc)  )
      //! console.log(temp)

      //      6) state güncelliyoruz

      setTweets(temp);
    });

    //  3) bileşen ekrandan giderse aboneliği durdur
    return () => unsub();
  }, []);

  //! console.log(tweets);

  return (
    <main className="border border-zinc-600 overflow-y-auto">
      <header className="border-b border-zinc-600 p-4 font-bpld">
        Anasayfa
      </header>

      <Form user={user} />

      {!tweets ? (
        <div className=" flex justify-center my-20 scale-[1.5]">
          <Loader />
        </div>
      ) : (
        tweets.map((tweet) => <Post tweet={tweet} key={tweet.id} />)
      )}
    </main>
  );
};

export default Main;
