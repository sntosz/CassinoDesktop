import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export interface CardGameProps{
    image: string
    titulo: string
    subtitulo: string
    descricao: string
}

export function CardGame({ image, titulo, subtitulo,  descricao }: CardGameProps){
    return(
        <Card className="flex flex-col items-center justify-center p-6">
            <CardHeader className="text-yellow-500">
                <div className="w-56 rounded">
                    <img className="w-full rounded border border-white h-32" src={image} alt="" />
                </div> 
                <CardTitle>{titulo}</CardTitle>
                <CardDescription className="text-white pb-3">{subtitulo}</CardDescription>
                <Separator className="my-10" />
            </CardHeader>
            <CardContent className="w-56  text-wrap">
                <p className="text-[#aaaaaa] text-sm">{descricao}</p>
            </CardContent>
            <Button>Jogar</Button>
        </Card>
    )
}