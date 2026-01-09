import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Inizializza OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Informazioni sull'azienda per il context
const companyInfo = {
  name: "Alcode",
  location: "Rome, Italy",
  email: "atdhelusha0@gmail.com",
  phone: "+39 389 110 5454",
  services: [
    "Web Development (websites, e-commerce, web applications)",
    "Mobile Development (iOS, Android, cross-platform apps)",
    "UI/UX Design (interfaces, prototypes, design systems)",
    "Software Testing (functional tests, security, performance)",
    "Technology Consulting (strategy, architecture, digital transformation)",
    "Dedicated Teams (developers dedicated to your project)",
  ],
  technologies: {
    frontend: "React, Next.js, Vue.js, TypeScript",
    backend: "Node.js, Python, PHP, Java",
    mobile: "React Native, Flutter, Swift, Kotlin",
    database: "PostgreSQL, MongoDB, MySQL",
  },
  timeEstimates: {
    simple: "2-4 weeks",
    corporate: "4-8 weeks",
    complex: "8-16 weeks",
    mobile: "6-12 weeks",
  },
};

// Rileva la lingua del messaggio
const detectLanguage = (message: string): string => {
  const messageLower = message.toLowerCase();
  
  // Caratteristiche linguistiche
  const albanianIndicators = [
    /\b(përshëndetje|mirë|faleminderit|ju lutem|si|ku|kur|çfarë|kush|pse|më|të|dhe|ose|por|në|me|shërbimet|çmim|kontakt|projekt|sajt|aplikacion|dizajn|zhvillim|mobil|web|porfolio|kohë|tempo|tregoni|thuani|bëj|krijo)\b/i,
    /[ëç]/i,
  ];
  
  const englishIndicators = [
    /\b(hello|hi|thank|please|how|where|when|what|who|why|services|price|contact|project|website|application|design|development|mobile|web|portfolio|time|cost|tell|about)\b/i,
  ];
  
  const italianIndicators = [
    /\b(ciao|salve|buongiorno|buonasera|grazie|prego|come|dove|quando|cosa|chi|perché|quanto|servizi|prezzo|contatto|progetto|sito|applicazione|design|sviluppo|mobile|web|portfolio|tempo|costo|raccontami|parlami|dimmi)\b/i,
  ];
  
  let albanianScore = 0;
  let englishScore = 0;
  let italianScore = 0;
  
  albanianIndicators.forEach(pattern => {
    if (pattern.test(messageLower)) albanianScore++;
  });
  englishIndicators.forEach(pattern => {
    if (pattern.test(messageLower)) englishScore++;
  });
  italianIndicators.forEach(pattern => {
    if (pattern.test(messageLower)) italianScore++;
  });
  
  if (/[ëç]/.test(messageLower)) albanianScore += 2;
  
  if (albanianScore > englishScore && albanianScore > italianScore) return "Albanian";
  if (englishScore > italianScore && englishScore > albanianScore) return "English";
  return "Italian";
};

// Crea il system prompt con informazioni su Alcode
const createSystemPrompt = (): string => {
  return `You are a helpful AI assistant for Alcode, a software development company based in Rome, Italy.

Company Information:
- Name: ${companyInfo.name}
- Location: ${companyInfo.location}
- Email: ${companyInfo.email}
- Phone: ${companyInfo.phone}

Services offered:
${companyInfo.services.map((service, index) => `${index + 1}. ${service}`).join('\n')}

Technologies used:
- Frontend: ${companyInfo.technologies.frontend}
- Backend: ${companyInfo.technologies.backend}
- Mobile: ${companyInfo.technologies.mobile}
- Database: ${companyInfo.technologies.database}

Time estimates:
- Simple portfolio: ${companyInfo.timeEstimates.simple}
- Corporate website: ${companyInfo.timeEstimates.corporate}
- Complex application: ${companyInfo.timeEstimates.complex}
- Mobile app: ${companyInfo.timeEstimates.mobile}

Important instructions:
1. Always respond in the SAME LANGUAGE that the user writes their question in
2. Be helpful, friendly, and professional
3. Provide accurate information about Alcode's services, technologies, and processes
4. If asked about pricing, mention that prices vary based on project complexity and that a free consultation is available
5. If asked about contact, provide the email and phone number
6. Keep responses concise but informative
7. If the user asks something unrelated to Alcode, politely redirect them to ask about Alcode's services

Remember: ALWAYS respond in the same language the user is writing in.`;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Verifica che la chiave API sia configurata
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is not configured");
      return NextResponse.json(
        { 
          error: "OpenAI API key is not configured. Please set OPENAI_API_KEY in your environment variables.",
          response: "I'm sorry, but the AI service is not properly configured. Please contact us directly at " + companyInfo.email + " or " + companyInfo.phone
        },
        { status: 500 }
      );
    }

    // Rileva la lingua del messaggio
    const detectedLanguage = detectLanguage(message);
    console.log("AI Chat - Received message:", message);
    console.log("AI Chat - Detected language:", detectedLanguage);

    // Prepara i messaggi per OpenAI
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: createSystemPrompt(),
      },
    ];

    // Aggiungi la cronologia della conversazione se disponibile
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.forEach((msg: { text: string; sender: string }) => {
        if (msg.sender === "user") {
          messages.push({
            role: "user",
            content: msg.text,
          });
        } else if (msg.sender === "assistant" || msg.sender === "ai") {
          messages.push({
            role: "assistant",
            content: msg.text,
          });
        }
      });
    }

    // Aggiungi il messaggio corrente
    messages.push({
      role: "user",
      content: message,
    });

    // Chiama OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Usa gpt-4o-mini per costi ridotti, puoi cambiare in gpt-4o se preferisci
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const aiResponse = completion.choices[0]?.message?.content || 
      "I'm sorry, I couldn't generate a response. Please try again or contact us directly.";

    console.log("AI Chat - Generated response:", aiResponse.substring(0, 50) + "...");

    // Simula un piccolo delay per rendere la risposta più naturale
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });
  } catch (error: any) {
    console.error("Error generating AI response:", error);
    
    // Gestisci errori specifici di OpenAI
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        {
          success: false,
          error: "OpenAI API error",
          message: error.message,
          response: `I'm sorry, there was an error processing your request. Please contact us directly at ${companyInfo.email} or ${companyInfo.phone}`,
        },
        { status: error.status || 500 }
      );
    }

    // Risposta di fallback
    return NextResponse.json({
      success: false,
      error: "Internal server error",
      response: `I'm sorry, there was an error. Please contact us directly at ${companyInfo.email} or ${companyInfo.phone}`,
    }, { status: 500 });
  }
}
