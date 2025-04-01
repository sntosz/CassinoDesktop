
import { CardGame } from "@/components/CardGame/CardGame";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { LayoutHome } from "@/layout/LayoutHome";

export function Home() {
  return (
    <LayoutHome>
      <div>
      <CardGame 
        titulo="Poker"
        image="../../../public/poker.jpg"
        subtitulo="jogo de aventura"
        descricao="O poker é um jogo de cartas em que os jogadores apostam com base na força de suas mãos, combinando estratégia, blefe e sorte."
      />
      </div>
    </LayoutHome>
  );
}