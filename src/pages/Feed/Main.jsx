import Form from "../../components/Form"


const Main = ({user}) => {

  

  return (
    <main className='border border-zinc-600 overflow-y-auto'>
<header className="border-b border-zinc-600 p-4 font-bpld">Anasayfa</header>

<Form user={user} />


    </main>
  )
}

export default Main
