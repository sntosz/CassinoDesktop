import React from 'react';
import { Heart, Diamond, Club, Spade } from 'lucide-react';

interface CardProps {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  rank: string;
  isFaceUp?: boolean;
}

const suitIcons = {
  hearts: <Heart className="text-red-500" />,
  diamonds: <Diamond className="text-red-500" />,
  clubs: <Club className="text-black" />,
  spades: <Spade className="text-black" />,
};

export const Card: React.FC<CardProps> = ({ suit, rank, isFaceUp = true }) => {
  return (
    <div className="w-24 h-36 bg-white border-2 border-black rounded-lg flex flex-col justify-between p-2 text-xl font-bold">
      {isFaceUp ? (
        <>
          <div className="self-start">{rank}</div>
          <div className="text-4xl text-center">{suitIcons[suit]}</div>
          <div className="self-end transform rotate-180">{rank}</div>
        </>
      ) : (
        <div className="w-full h-full bg-blue-500 text-white flex items-center justify-center text-4xl">?</div>
      )}
    </div>
  );
};