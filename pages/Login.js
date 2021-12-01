import { getProviders, signIn } from "next-auth/react"


function Login({ providers }) {
    return (
        <div>
           <img className="w-52 mb-5" src="https://icones.pro/wp-content/uploads/2021/04/icone-spotify-rouge.png" alt=""  />
        
        {Object.values(providers).map((provider) =>(

            <div key={provider.name}>
                <button className="bg-[#D2042D]">Login with {provider.name}</button>
            </div>

        ) )}

        </div>
    )
}

export default Login
export async function getServerSideProps(){
    const providers =await getProviders();

    return {
        props:{
            providers,
        }
    }
}
