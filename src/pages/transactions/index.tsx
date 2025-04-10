import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LayoutHome } from '@/layout/LayoutHome';

interface BankOption {
  name: string;
  logo: string;
  timeEstimate: string;
  type: 'instant' | 'regular';
}

export function Transactions(){
  const bankOptions: BankOption[] = [
    {
      name: 'Pix',
      logo: '/pix.png',
      timeEstimate: 'Imediato',
      type: 'instant'
    },
    {
      name: 'Nubank',
      logo: '/nubank-95.png',
      timeEstimate: 'Até 5 minutos',
      type: 'regular'
    },
    {
      name: 'Caixa',
      logo: '/caixa.jpg',
      timeEstimate: 'Até 5 minutos',
      type: 'regular'
    },
    {
      name: 'Itaú',
      logo: '/itau.png',
      timeEstimate: 'Até 5 minutos',
      type: 'regular'
    },
    {
      name: 'Bradesco',
      logo: '/bradesco.webp',
      timeEstimate: 'Até 5 minutos',
      type: 'regular'
    },
    {
      name: 'Banco do Brasil',
      logo: '/bb.jpg',
      timeEstimate: 'Até 5 minutos',
      type: 'regular'
    },
  ];

  return (
    <LayoutHome>
      <div className="min-h-screen mp">
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Depósito</h1>
          </div>
        </header>
        {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}


        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="bg-[#1D1F2C] rounded-lg ">
              <div className="p-4 border-b-[1px] border-[#45474F]">
                <h2 className="text-lg font-semibold text-white">BANCO</h2>
              </div>
              <div className="">
                {bankOptions.map((bank) => (
                  <button
                    key={bank.name}
                    className="w-full p-4 flex  items-center border-solid border border-b-[1px] border-[#45474F]  justify-between hover:bg-[#282B3B] transition-colors bg-[#1D1F2C]"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={bank.logo}
                        alt={`${bank.name} logo`}
                        className="w-8 h-8 "
                      />
                      <div className="text-left">
                        <p className="font-medium text-white">{bank.name}</p>
                        <p className="text-sm text-gray-400">{bank.timeEstimate}</p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-[#1D1F2C] rounded-lg border border-gray-800 p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">Saldo</h2>
                <span className="font-bold text-white">R$0,02</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Saque disponível</span>
                  <span className="text-white">R$0,02</span>
                </div>
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-white hover:text-black rounded-sm bg-[#435d7a]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Atualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};
