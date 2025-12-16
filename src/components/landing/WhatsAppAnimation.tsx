import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  time: string;
  isBot: boolean;
}

export const WhatsAppAnimation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const interactions = [
    {
      userMessage: { text: "Gastei 55,00 no almoço hoje", time: "12:30" },
      botMessage: { 
        text: "🎉 Despesa registrada com sucesso!\n\n✅ Tipo: Despesa\n📝 Descrição: Almoço\n💰 Valor: R$ 55,00\n📍 Categoria: Alimentação\n🗓 Data: 23/10/2025", 
        time: "12:30" 
      }
    },
    {
      userMessage: { text: "Recebi 200,00 de freelance", time: "14:15" },
      botMessage: { 
        text: "🎉 Que ótimo! Receita adicionada com sucesso!\n\n✅ Tipo: Receita\n📝 Descrição: Freelance\n💰 Valor: R$ 200,00\n📍 Categoria: Freelance\n🗓 Data: 23/10/2025", 
        time: "14:15" 
      }
    },
    {
      userMessage: { text: "Marque o compromisso Reunião hoje às 20h", time: "16:05" },
      botMessage: {
        text: "O compromisso \"Reunião\" foi criado com sucesso para hoje às 20h! Se precisar de mais alguma coisa, é só avisar!",
        time: "16:05"
      }
    },
  ];

  useEffect(() => {
    let currentInteractionIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const playInteraction = () => {
      // Limpar tela
      setMessages([]);
      setIsTyping(false);

      const interaction = interactions[currentInteractionIndex];
      
      // Passo 1: Mostrar mensagem do usuário
      timeoutId = setTimeout(() => {
        setMessages([{ 
          id: 0, 
          text: interaction.userMessage.text, 
          time: interaction.userMessage.time, 
          isBot: false 
        }]);
        
        // Passo 2: Mostrar indicador "digitando..."
        timeoutId = setTimeout(() => {
          setIsTyping(true);
          
          // Passo 3: Mostrar resposta do bot
          timeoutId = setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { 
              id: 1, 
              text: interaction.botMessage.text, 
              time: interaction.botMessage.time, 
              isBot: true 
            }]);
            
            // Passo 4: Pausar e ir para próxima interação
            timeoutId = setTimeout(() => {
              currentInteractionIndex = (currentInteractionIndex + 1) % interactions.length;
              playInteraction();
            }, 3000);
          }, 1500);
        }, 800);
      }, 500);
    };

    playInteraction();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-black rounded-[40px] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-[#ECE5DD] rounded-[32px] overflow-hidden shadow-inner">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
              <img src="/images/favicon.png" alt="Wivio" className="w-full h-full object-cover scale-[1.05]" />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-sm font-semibold">Wivio</h3>
              <p className="text-white/70 text-xs">online</p>
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-[380px] p-4 overflow-hidden relative">
            {/* WhatsApp Background Pattern */}
            <div className="absolute inset-0 opacity-20" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                 }}>
            </div>

            {/* Messages */}
            <div className="relative space-y-2">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`${message.isBot ? 'bg-white rounded-lg rounded-tl-none' : 'bg-[#DCF8C6] rounded-lg rounded-tr-none'} px-3 py-2 max-w-[85%] shadow-sm`}>
                      <p className="text-sm text-gray-800 whitespace-pre-line">{message.text}</p>
                      <div className={`flex items-center ${message.isBot ? 'justify-start' : 'justify-end'} gap-1 mt-1`}>
                        <span className="text-[10px] text-gray-500">{message.time}</span>
                        {!message.isBot && <span className="text-[10px] text-blue-500">✓✓</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full px-4 py-2">
              <span className="text-xs text-gray-400">Mensagem</span>
            </div>
            <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🎤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
