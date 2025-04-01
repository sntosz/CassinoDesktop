import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { Lock, Mail, UserRound } from "lucide-react";

export function Login() {
    return (
        <div className="flex bg-gradient-to-b from-[#07080D] to-[#1D1F2C] w-screen h-[100vh]">
            <div className="relative ml-64 w-1/2 flex justify-center items-center">
                <img src="../../../public/banner.png" alt="" />
                <Heading className="ml-96 mb-auto mt-60 font-bold text-white">Entrar</Heading>
            </div>
            <div className="text-white flex justify-center items-center flex-col gap-6 mt-20 ml-16">
                <Input type="text" label="Nome" placeholder="Digite seu nome" iconRight={<UserRound/>} className="h-12 w-96" />
                <Input type="email" label="E-mail" placeholder="Digite seu e-mail" iconRight={<Mail/>} className="w-96 h-12 " />
                <Input type="password" label="Senha" placeholder="Digite sua senha" iconRight={<Lock/>} className="w-96 h-12"  />
                <p className="ml-56">Esqueceu sua senha?</p>
                <Button className="text-xl h-12 w-96 text-black">Entrar</Button>
                <div className="flex">
                    <p className="text-gray-400 mt-5">Não tem conta?</p>
                    <p className="mt-5 ml-1">Cadastra-se</p>
                </div>
            </div>
        </div>
    );
}