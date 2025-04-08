
import { CardGame } from "@/components/CardGame/CardGame";
import { Heading } from "@/components/ui/heading";
import { LayoutHome } from "@/layout/LayoutHome";

export function Home() {
  return (
    <LayoutHome>
      <Heading size={"default"} className="mb-10">Jogos</Heading>
      <div className="flex items-center gap-6">
        <CardGame 
          titulo="Poker"
          image="../../../public/poker.jpg"
          subtitulo="jogo de aventura"
          descricao="O poker é um jogo de cartas em que os jogadores apostam com base na força de suas mãos, combinando estratégia, blefe e sorte."
        />
        <CardGame 
          titulo="Poker"
          image="../../../public/poker.jpg"
          subtitulo="jogo de aventura"
          descricao="O poker é um jogo de cartas em que os jogadores apostam com base na força de suas mãos, combinando estratégia, blefe e sorte."
        />
        <CardGame 
          titulo="Poker"
          image="../../../public/poker.jpg"
          subtitulo="jogo de aventura"
          descricao="O poker é um jogo de cartas em que os jogadores apostam com base na força de suas mãos, combinando estratégia, blefe e sorte."
        />
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