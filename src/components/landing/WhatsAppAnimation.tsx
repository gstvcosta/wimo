import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  time: string;
}

export const WhatsAppAnimation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const messageSequence = [
    { text: "Gastei 55,00 no almoço hoje", time: "12:30" },
    { text: "Recebi 200,00 do freelance", time: "14:15" },
    { text: "Paguei 150,00 de internet", time: "16:45" },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const addNextMessage = () => {
      if (currentIndex >= messageSequence.length) {
        // Reset animation after a pause
        timeoutId = setTimeout(() => {
          setMessages([]);
          currentIndex = 0;
          addNextMessage();
        }, 3000);
        return;
      }

      // Show typing indicator
      setIsTyping(true);
      
      timeoutId = setTimeout(() => {
        setIsTyping(false);
        
        // Add message
        const newMessage = {
          id: currentIndex,
          ...messageSequence[currentIndex],
        };
        
        setMessages(prev => [...prev, newMessage]);
        currentIndex++;
        
        // Schedule next message
        timeoutId = setTimeout(addNextMessage, 2000);
      }, 1500);
    };

    addNextMessage();

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
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-xs">💰</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-sm font-semibold">Minhas Finanças</h3>
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
                    className="flex justify-end"
                  >
                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">{message.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">{message.time}</span>
                        <span className="text-[10px] text-blue-500">✓✓</span>
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
                    className="flex justify-end"
                  >
                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-3 shadow-sm">
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
