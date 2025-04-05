import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { Lock, Mail, UserRound } from "lucide-react";
 
export function Register() {
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
          <img src="../../../public/banner.png" alt="banner" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 h-screen w-1/2">
          <div className="text-white h-full flex justify-center items-center flex-col gap-6 animate-fadeUp">
            <Heading className="flex w-full font-bold text-white animate-fadeUp">
              Criar Conta
            </Heading>
            <Input
              type="email"
              label="Endereço de E-mail"
              placeholder="Digite seu e-mail"
              iconRight={<Mail />}
              className="text-white w-96 h-12"
            />
              <Input
                type="text"
                label="CPF"
                placeholder="Digite seu CPF"
                iconRight={<UserRound />}
                className="text-white h-12 w-96"
              />
              <Input
                type="date"
                label="Data de Nascimento"
                placeholder="Digite sua data de nascimento"
                // iconRight={<UserRound />}
                className="text-white h-12 w-96 placeholder:w-full"
              />
              <Input
                type="password"
                label="Senha"
                placeholder="Digite sua senha"
                iconRight={<Lock />}
                className="text-white w-96 h-12"
              />
              <div className="flex flex-col gap-4 items-center">
                <Button className="text-lg h-12 w-96 text-black">Cadastrar</Button>
                <p className="text-gray-400">Já tem uma conta? <Link className="text-yellow-500 hover:underline hover:text-yellow-600 no-underline" to={'/'} >Entrar</Link></p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}