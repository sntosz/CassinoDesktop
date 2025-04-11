import { Button } from "@/components/ui/button";
import { Link, data } from "react-router";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { Cadastro } from "@/api/api";

export function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");




  async function submit(event: any) {
    event.preventDefault();
    console.log(nome)
    const resultado = await Cadastro(nome,email,cpf,dataNascimento)
    console.log(resultado)
  }
  // const cadastro = Cadastro(nome, email, cpf, dataNascimento)
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
              Criar Conta
            </Heading>
            <form onSubmit={submit}>
              <Input
                name="nome"
                onChange={(e) => setNome(e.target.value)}
                type="text"
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                iconRight={<Mail />}
                className="w-96"
              />
              <Input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Endereço de E-mail"
                placeholder="Digite seu e-mail"
                iconRight={<Mail />}
                className="w-96"
              />
              <Input
              name="cpf"
              onChange={(e) => setCpf(e.target.value)}
                type="text"
                label="CPF"
                placeholder="Digite seu CPF"
                iconRight={<UserRound />}
                className="w-96"
              />
              <Input
              name="dataNascimento"
              onChange={(e) => setDataNascimento(e.target.value)}
                type="date"
                label="Data de Nascimento"
                placeholder="Digite sua data de nascimento"
                // iconRight={<UserRound />}
                className="text-slate-300 w-96 placeholder:text-slate-500"
              />
              <div className="flex flex-col gap-2 items-center">
                {/* <Link to={'/confirmar-senha'} className="w-full">
                  <Button type="submit" className="text-lg h-12 w-96 text-black">Cadastrar</Button>
                </Link> */}
                <Button type="submit" className="text-lg h-12 w-96 text-black">Cadastrar</Button>
                <p className="text-gray-400">Já tem uma conta? <Link className="text-yellow-500 hover:underline hover:text-yellow-600 no-underline" to={'/'} >Entrar</Link></p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}