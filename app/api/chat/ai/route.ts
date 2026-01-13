import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  let language = "it"; // Default language
  try {
    const body = await request.json();
    const { message, conversationHistory, language: langFromBody } = body;
    if (langFromBody) language = langFromBody;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Se non c'è una chiave API, restituisci un messaggio di errore (con status 200 per mostrarlo nella chat)
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        {
          response:
            language === "en"
              ? "⚠️ Groq API key is not configured. Please add GROQ_API_KEY to your .env.local file or Vercel environment variables. Get your API key at https://console.groq.com/keys"
              : language === "al"
              ? "⚠️ Çelësi API i Groq nuk është konfiguruar. Ju lutemi shtoni GROQ_API_KEY në skedarin .env.local ose variablat e mjedisit të Vercel. Merrni çelësin tuaj në https://console.groq.com/keys"
              : "⚠️ La chiave API di Groq non è configurata. Si prega di aggiungere GROQ_API_KEY al file .env.local o alle variabili d'ambiente di Vercel. Ottieni la tua chiave API su https://console.groq.com/keys",
        },
        { status: 200 }
      );
    }

    // Inizializza Groq client (compatibile con OpenAI API)
    const groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    // Prepara i messaggi per Groq
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          language === "en"
            ? "You are a helpful assistant for a software development company called Alcode. Be professional, friendly, and concise. Help users with information about services, projects, pricing, and contacts."
            : language === "al"
            ? "Ju jeni një asistent i dobishëm për një kompani zhvillimi softueri të quajtur Alcode. Jini profesional, miqësor dhe konciz. Ndihmoni përdoruesit me informacione rreth shërbimeve, projekteve, çmimeve dhe kontakteve."
            : "Sei un assistente utile per un'azienda di sviluppo software chiamata Alcode. Sii professionale, amichevole e conciso. Aiuta gli utenti con informazioni su servizi, progetti, prezzi e contatti.",
      },
    ];

    // Aggiungi la cronologia della conversazione
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.forEach((msg: { text: string; sender: string }) => {
        if (msg.sender === "user") {
          messages.push({
            role: "user",
            content: msg.text,
          });
        } else if (msg.sender === "assistant" || msg.sender === "company") {
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

    // Chiama Groq API
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-70b-versatile", // Modello Groq consigliato
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const aiResponse = completion.choices[0]?.message?.content || "";

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Groq API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    
    // Se è un errore di autenticazione, suggerisci di controllare la chiave API
    if (errorMessage.includes("401") || errorMessage.includes("Unauthorized") || errorMessage.includes("Invalid API key")) {
      return NextResponse.json(
        {
          response:
            language === "en"
              ? "❌ Invalid Groq API key. Please check your GROQ_API_KEY in .env.local or Vercel environment variables. Get a valid key at https://console.groq.com/keys"
              : language === "al"
              ? "❌ Çelësi API i Groq është i pavlefshëm. Ju lutemi kontrolloni GROQ_API_KEY në .env.local ose variablat e mjedisit të Vercel. Merrni një çelës të vlefshëm në https://console.groq.com/keys"
              : "❌ Chiave API Groq non valida. Controlla GROQ_API_KEY in .env.local o nelle variabili d'ambiente di Vercel. Ottieni una chiave valida su https://console.groq.com/keys",
        },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      {
        response:
          language === "en"
            ? `❌ Error: ${errorMessage}. Please try again or contact support.`
            : language === "al"
            ? `❌ Gabim: ${errorMessage}. Ju lutemi provoni përsëri ose kontaktoni mbështetjen.`
            : `❌ Errore: ${errorMessage}. Riprova o contatta il supporto.`,
      },
      { status: 200 }
    );
  }
}
