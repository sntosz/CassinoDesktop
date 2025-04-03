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
        <Card className="flex h-auto border border-solid border-border border-[#45474F] flex-col items-center justify-center p-6">
            <CardHeader className="text-lg font-medium font-sans  text-yellow-500">
                <div className="w-56 rounded">
                    <img className="w-full rounded h-32 " src={image} alt="" />
                </div> 
                <CardTitle>{titulo}</CardTitle>
                <CardDescription className="text-white pb-4">{subtitulo}</CardDescription>
                <Separator className="my-24" />
            </CardHeader>
            <CardContent className="w-56  text-wrap">
                <p className="text-[#aaaaaa] py-4 text-sm">{descricao}</p>
            </CardContent>
            <Button>Jogar</Button>
        </Card>
    )
}