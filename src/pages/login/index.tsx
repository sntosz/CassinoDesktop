import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";

export function Login() {
    return (
        <div className="flex bg-gradient-to-b from-[#07080D] to-[#1D1F2C] w-screen min-h-screen">
            <div className="w-1/2 flex justify-center items-center">
                <img src="../../../public/banner.png" alt="" />
                <div className="flex flex-col items-center">
                    <p className="text-4xl text-white font-medium flex justify-center items-center mb-96 ml-20">
                        Entrar
                    </p>
                    {/* Adicionando a barra amarela */}
                    <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
                </div>
            </div>
            <div className="text-white flex justify-center items-center flex-col">
                <p className="mr-auto mt">Nome</p>
                <Input type="text" placeholder="Digite seu nome" className="w-96 h-8" />
                <p className="mr-auto mt">E-mail</p>
                <Input type="email" placeholder="Digite seu e-mail" className="w-96 h-8" />
                <p className="mr-auto mt">Senha</p>
                <Input type="password" placeholder="Digite sua senha" className="w-96 h-8" />
            </div>
        </div>
    );
}