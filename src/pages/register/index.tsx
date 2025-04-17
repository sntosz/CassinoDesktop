import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { Lock, Mail, PartyPopper, UserRound } from "lucide-react";
import { useState } from "react";
import { Cadastro, VerificarEmail } from "@/api/api";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { differenceInYears } from 'date-fns';

export function Register() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateAge = (date: string): boolean => {
    const birthDate = new Date(date);
    const today = new Date();
    const age = differenceInYears(today, birthDate);
    return age >= 18;
  };

  const checkEmailExists = async (email: string): Promise<boolean> => {
    const response = await VerificarEmail(email);
    return response.exists;
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setEmailError("");

    if (!validateAge(dataNascimento)) {
      setError("Você deve ter pelo menos 18 anos para criar uma conta.");
      return;
    }

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      setEmailError("Já existe uma conta com este e-mail.");
      return;
    }

    const resultado = await Cadastro(nome, email, cpf, dataNascimento, senha);
    console.log(resultado);

    if (resultado.status === 200) {
      setShowDialog(true);
    } else {
      alert("Erro ao cadastrar. Tente novamente.");
    }
  }

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
            <form className="space-y-6" onSubmit={submit}>
              <Input
                name="nome"
                onChange={(e) => setNome(e.target.value)}
                type="text"
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                iconRight={<Mail />}
                className="w-96"
              />
              <div className="relative">
                <Input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  label="Endereço de E-mail"
                  placeholder="Digite seu e-mail"
                  iconRight={<Mail />}
                  className={`w-96 ${emailError ? 'border-red-500' : ''}`}
                />
                {emailError && (
                  <label className="absolute text-red-500 text-sm mt-1">{emailError}</label>
                )}
              </div>
              <Input
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                type="text"
                label="CPF"
                placeholder="Digite seu CPF"
                iconRight={<UserRound />}
                className="w-96"
              />
              <div className="relative">
                <Input
                  name="dataNascimento"
                  onChange={(e) => setDataNascimento(e.target.value)}
                  type="date"
                  label="Data de Nascimento"
                  placeholder="Digite sua data de nascimento"
                  className={`text-slate-300 w-96 placeholder:text-slate-500 ${error ? 'border-red-500' : ''}`}
                />
                {error && (
                  <label className="absolute text-red-500 text-sm mt-1">{error}</label>
                )}
              </div>
              <Input
                name="senha"
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                label="Senha"
                placeholder="Digite sua senha"
                iconRight={<Lock />}
                className="text-slate-300 w-96 placeholder:text-slate-500"
              />
              <div className="flex flex-col gap-2 items-center">
                <Button type="submit" className="text-lg h-12 w-96 text-black">Cadastrar</Button>
                <p className="text-gray-400">Já tem uma conta? <Link className="text-yellow-500 hover:underline hover:text-yellow-600 no-underline" to={'/'} >Entrar</Link></p>
              </div>
            </form>
            {showDialog && (
              <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-center text-yellow-500 text-3xl">
                      Parabéns <PartyPopper className="text-yellow-500 w-6 h-6" />
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center text-lg">
                      Conta criada com sucesso!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Link to={"/"} className="w-full">
                      <AlertDialogAction>Avançar</AlertDialogAction>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
      </div>
    </>
  );
}