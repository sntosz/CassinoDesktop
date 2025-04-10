import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { Lock, Mail, UserRound } from "lucide-react";
 
export function Login() {
  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background: linear-gradient(to bottom, #07080D, #1D1F2C);
          }
 
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
 
          .animate-fadeUp {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.8s ease-out forwards;
          }
        `}
      </style>
 
      <div className="flex items-center bg-gradient-to-b from-[#07080D] to-[#1D1F2C] w-screen h-[100vh] animate-fadeUp p-0 m-0">
        <div className="w-1/2 flex justify-center items-center">
          <img src="../../../banner.png" alt="banner" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 h-screen w-1/2">
          <div className="text-white h-full flex justify-center items-center flex-col gap-6 animate-fadeUp">
            <Heading className="flex w-full font-bold text-white animate-fadeUp">
              Entrar
            </Heading>
            <Input
              type="email"
              label="Endereço de E-mail"
              placeholder="Digite seu e-mail"
              iconRight={<Mail />}
              className="w-96"
            />
            <Input
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              iconRight={<Lock />}
              className="w-96"
            />
            <div className="flex flex-col gap-2 items-center">
              <Link to={'/home'} className="w-full">
                <Button className="text-lg h-12 w-96 text-black">Entrar</Button>
              </Link>
              <p className="text-gray-400">Não tem uma conta? <Link className="text-yellow-500 hover:underline hover:text-yellow-600 no-underline" to={'/cadastrar'} >Criar</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}