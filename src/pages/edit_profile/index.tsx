import { Heading } from "@/components/ui/heading";
import { LayoutHome } from "@/layout/LayoutHome";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EditarPerfil() {
  return (
    <LayoutHome>
      <Heading size={"default"} className="mb-10">Editar Perfil</Heading>
      <div className="flex items-center gap-6">
        <div className="flex justify-center items-center">
            <img src="../../../public/Profile.png" alt="Foto_de_Perfil" className="w-36 h-36 rounded-full"/>
            <Button className="text-lg ml-14 mr-5 h-12 w-64 text-black">
                Adicionar Foto
            </Button>
            <Button className="text-yellow-500 border-4 border-yellow-500 rounded-md bg-black hover:bg-red-600 text-base font-medium h-12 w-64">
                Excluir foto
            </Button>


        </div>
      </div>
      <div className="mt-20">
      <Input
              type="text"
              label="Nome Completo"
              placeholder="Gael Monteiro Alves"
              className="w-96"
            />
      <Input
              type="email"
              label="E-mail"
              placeholder="gaelmonteiroalves@gmail.com"
              className="w-96"
            />
      <Input
              type="text"
              label="CPF"
              placeholder="369.246.458-00"
              className="w-96"
            />
            <Input
                type="text"
                label="Data de Nascimento"
                placeholder="15/02/2006"
                className="text-slate-300 w-96 placeholder:text-slate-500"
              />
      </div>
      <div>
        <Button className="text-lg ml-32 mt-10 mr-5 text-black h-12 w-64">
                Mudar senha
            </Button>
      </div>
    </LayoutHome>
  );
}