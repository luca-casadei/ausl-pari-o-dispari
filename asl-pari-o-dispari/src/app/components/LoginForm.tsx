import Image from "next/image"

export default function LoginForm(){
    return(
        <main className="rounded-md my-auto md:w-1/2 p-10 bg-orange-50">
            <div className="flex grow flex-col items-center">
                <Image src={"/logo.png"} alt="PariODispariLogo" width={150} height={150}/>
                <form className="flex flex-col md:w-5/6 items-center">
                    <h1 className="font-bold text-xl">
                        Pari o Dispari
                    </h1>
                    <h1>
                        Portale ASL
                    </h1>
                    <div className="flex w-full flex-col mt-6">
                        <label className="text-lg text-orange-500">Email:</label>
                        <input required className="p-3 outline-orange-400 rounded-lg" id="emailField" type="email" placeholder="esempio@dominio.it"/>
                    </div>
                    <div className="flex w-full flex-col mt-3">
                        <label className="text-lg text-orange-500">Password:</label>
                        <input required maxLength={20} className="p-3 rounded-lg outline-orange-400" id="passwordField" type="password" placeholder="Massimo 20 caratteri"/>
                    </div>
                    <input value={"Accedi"} className="mt-10 w-3/4 hover:bg-amber-500 text-white bg-orange-300 hover:outline-orange-400 hover:outline-none hover:outline-4 p-3 rounded-lg" type="submit"/>
                </form>
            </div>
        </main>
    )
}