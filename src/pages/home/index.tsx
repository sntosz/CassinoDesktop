
import { CardGame } from "@/components/CardGame/CardGame";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";


export function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-b from-[#07080D] to-[#1D1F2C]">
      <CardGame 
      titulo="Poker"
      image="../../../public/poker.jpg"
      subtitulo="jogo de aventura"
      descricao="O poker é um jogo de cartas em que os jogadores apostam com base na força de suas mãos, combinando estratégia, blefe e sorte."
      />
      <img className="w-16 h-16" src="../../../public/logo.png" alt="" />
      <Input 
      label="Digite seu nome"
      iconRight =<Mail/>
      />
    </div>
  );
}