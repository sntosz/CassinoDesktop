import { Heading } from "@/components/ui/heading";
import { LayoutHome } from "@/layout/LayoutHome";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile() {
  return (
    <LayoutHome>
      <Heading className="mb-10" >Perfil</Heading>
      <div className="bg-[#1D1F2C] w-1/2 rounded-lg  border border-gray-800 p-8">

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6 justify-start">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-3 w-80">
                  <Button className="rounded">
                      Adicionar Foto
                  </Button>
                  <Button className="rounded">
                      Excluir foto
                  </Button>
                </div>
          </div>
          <div className="space-y-6">
                <Input
                  type="text"
                  label="Nome Completo"
                  placeholder="Gael Monteiro Alves"
                  className=""
                />
                <Input
                  type="email"
                  label="E-mail"
                  placeholder="gaelmonteiroalves@gmail.com"
                  className=""
                />
                <Input
                  type="text"
                  label="CPF"
                  placeholder="369.246.458-00"
                  className=""
                />
                <Input
                  type="text"
                  label="Data de Nascimento"
                  placeholder="15/02/2006"
                  className="text-slate-300 placeholder:text-slate-500"
                />
                <div className="mt-2 flex w-full justify-end">
                  <Button className="h-12 w-64">
                    Editar informações
                  </Button>
                </div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
}