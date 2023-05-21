import { useState } from 'react'

function Login() {

  const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(e){
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify({
            password: password,
            userName: userName,
          })
        })
    
        const data = await response.json();
    }
    

  return (
    <>
    <div className="flex background h-screen w-full bg-pbeige justify-center">
      <div className="login h-[90%] w-4/5 bg-white rounded-xl shadow-md m-auto text-5xl">
        <h2 className='title font-bold m-4 mt-12'>Break <br/> Generator</h2>
        <div className="subtitle flex justify-end mx-4 font-md text-pgreen">Beta</div>

        <div className="login">
        <div className="login__form">
                    <form className="flex flex-col items-center" onSubmit={(e) => {loginUser(e)}}>
                        <div className="login__form__email w-3/4 mt-4">
                            <label className="text-tg text-sm font-bold" htmlFor="email">Username</label>
                            <input className="w-full h-8 border-2 border-tg rounded-md" value={userName} onChange={(e) => setUsername(e.target.value)}  name="username" id="username" />
                        </div>
                        <div className="login__form__password w-3/4 mt-4">
                            <label className="text-tg text-sm font-bold" htmlFor="password">Password</label>
                            <input className="w-full h-8 border-2 border-tg rounded-md" type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                            <h3 className=' flex text-pgreen text-sm justify-end'>Forgot Password?</h3>
                        </div>
                        <div className="login__form__submit w-3/4 mt-24 justify-end">
                            <button className="w-full h-full p-3 m-auto bg-tg text-cs rounded-md bg-plime">Login</button>
                        </div>
                    </form>
                    </div>
        </div>
        

      </div>
    </div>
    </>
  )
}

export default Login
