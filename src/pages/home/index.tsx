
import { CardGame } from "@/components/CardGame/CardGame";

export function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-red-500">
      <CardGame 
      titulo="Poker"
      image="../../../public/poker.jpg"
      subtitulo="jogo de aventura"
      descricao="O poker é um jogo de cartas em que os jogadores apostam com base na força de suas mãos, combinando estratégia, blefe e sorte."
      />
    </div>
  );
}