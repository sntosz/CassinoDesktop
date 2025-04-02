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
            animation: fadeUp 0.5s ease-out forwards;
          }
        `}
      </style>
 
      <div
        className="flex bg-gradient-to-b from-[#07080D] to-[#1D1F2C] w-screen h-[100vh] animate-fadeUp p-0 m-0"
      >
        <div className="relative ml-64 w-1/2 flex justify-center items-center">
          <img src="../../../public/banner.png" alt="banner" />
          <Heading className="ml-96 mb-auto mt-52 text-xs font-bold text-white animate-fadeUp">
            Criar uma Conta
          </Heading>
        </div>
        <div className="text-white flex justify-center items-center flex-col gap-6 mt-20 ml-16 animate-fadeUp">
          <Input
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            iconRight={<UserRound />}
            className="text-white h-12 w-96"
          />
          <Input
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            iconRight={<Mail />}
            className="text-white w-96 h-12"
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            iconRight={<Lock />}
            className="text-white w-96 h-12"
          />
          <Input
            type="password"
            label="Confirme sua Senha"
            placeholder="Confirme sua senha"
            iconRight={<Lock />}
            className="text-white w-96 h-12"
          />
          <Button className="text-xl h-12 w-96 text-black">Cadastrar</Button>
          <div className="flex">
            <p className="text-gray-400 mt-5">Ja tem uma conta?</p>
            <p className="mt-5 ml-1">Entrar</p>
          </div>
        </div>
      </div>
    </>
  );
}