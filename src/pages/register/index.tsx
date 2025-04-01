import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Heading} from "@/components/ui/heading";
import { Lock, Mail, UserRound } from "lucide-react";
 
export function Register() {
    return (
        <div className="flex bg-gradient-to-b from-[#07080D] to-[#1D1F2C] w-screen min-h-screen ">
            <div className="relative ml-20 w-1/2 flex justify-center items-center">
                <img src="../../../public/banner.png" alt="" />
                <Heading className="ml-36 mb-auto mt-32">Entrar</Heading>
            </div>
            <div className="text-white flex justify-center items-center flex-col gap-4 mt-10">
                <Input type="text" label="Nome" placeholder="Digite seu nome" iconRight={<UserRound/>} className="w-96 h-8" />
                <Input type="email" label="E-mail" placeholder="Digite seu e-mail" iconRight={<Mail/>} className="w-96 h-8 " />
                <Input type="password" label="Senha" placeholder="Digite sua senha" iconRight={<Lock/>} className="w-96 h-8"  />
                <p className=" ml-72">Esqueceu sua senha?</p>
                <Button className="text-xl  h-12 w-full text-black">Entrar</Button>
                <div className="flex">
                    <p className="text-gray-400 mt-5">Não tem conta?</p>
                    <p className="mt-5 ml-1">Cadastra-se</p>
                </div>
            </div>
        </div>
    );
}