'use client';

import { useState } from 'react';
import { MessageSquareText, Send, Phone, X, Bot, CheckCheck, Sparkles, MessageCircle } from 'lucide-react';

export default function LiveChat({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! 👋 Welcome to Merash Express Export Assistant. How can I help you with your shipment today?',
      time: 'Just now'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickPrompts = [
    "📦 How do I get an export quote?",
    "🚢 What ports do you operate from?",
    "📜 Do you provide Phytosanitary certificates?",
    "💬 Talk directly on WhatsApp"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: query, time: 'Just now' };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Simulate auto-reply
    setTimeout(() => {
      let replyText = "Thank you for reaching out! Our export documentation specialist is ready to assist you. For instant rates and container availability, please connect directly via WhatsApp or call us at +91 98765 43210.";
      
      if (query.includes('WhatsApp')) {
        window.open('https://wa.me/919876543210?text=Hi%20Merash%20Express,%20I%20want%20to%20inquire%20about%20export%20freight', '_blank');
        replyText = "Opening WhatsApp chat with our export officer (+91 98765 43210)...";
      } else if (query.includes('quote')) {
        replyText = "To get an accurate freight quote, please provide your commodity type, estimated weight (in KG/Tons), and target destination port (e.g. Dubai, Singapore, Rotterdam). You can also call +91 98765 43210 for instant pricing!";
      } else if (query.includes('ports')) {
        replyText = "We operate direct FCL and LCL container sailings from Port of Nhava Sheva (JNPT), Chennai Port, Mundra Port, and Kolkata Port, plus Air Cargo from Mumbai and Delhi terminals!";
      }

      const botMsg = { id: Date.now() + 1, sender: 'bot', text: replyText, time: 'Just now' };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 md:bottom-6 right-4 z-40 p-3.5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 border border-blue-400/30 group"
      >
        <MessageSquareText className="w-5 h-5" />
        <span className="hidden sm:inline text-xs font-bold">Live Export Chat</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
      </button>

      {/* Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-0 md:bottom-20 right-0 md:right-6 z-50 w-full md:w-96 h-[80vh] md:h-[520px] bg-white dark:bg-slate-900 rounded-t-3xl md:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold">Merash Export Support</h4>
                <p className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online | Response &lt; 2 mins
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="tel:9876543210"
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                title="Call 98765 43210"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-950/60">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs space-y-1 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 text-[9px] opacity-70">
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 overflow-x-auto no-scrollbar flex items-center gap-1.5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-600 whitespace-nowrap transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about export rates, documentation..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white px-3 py-2.5 rounded-xl focus:outline-none border border-transparent focus:border-blue-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Direct WhatsApp Callout */}
          <a
            href="https://wa.me/919876543210?text=Hi%20Merash%20Express,%20I%20want%20to%20inquire%20about%20export%20shipment"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-emerald-600 text-white text-[11px] font-bold text-center flex items-center justify-center gap-1.5 hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" /> Direct Chat on WhatsApp (+91 98765 43210)
          </a>

        </div>
      )}
    </>
  );
}
