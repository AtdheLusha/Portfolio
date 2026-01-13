# Groq API Setup

Per utilizzare la chat AI con Groq, è necessario configurare la chiave API.

## Passaggi per la configurazione:

1. **Ottieni una chiave API da Groq:**
   - Vai su https://console.groq.com/keys
   - Accedi al tuo account (o creane uno se non ce l'hai)
   - Clicca su "Create API Key"
   - Copia la chiave API generata

2. **Crea il file `.env.local` nella root del progetto:**
   ```bash
   GROQ_API_KEY=your_groq_api_key_here
   ```
   
   Sostituisci `your_groq_api_key_here` con la chiave API che hai copiato.

3. **Se stai deployando su Vercel:**
   - Vai alle impostazioni del progetto su Vercel
   - Aggiungi la variabile d'ambiente `GROQ_API_KEY` con il valore della tua chiave API

4. **Riavvia il server di sviluppo:**
   ```bash
   yarn dev
   ```

## Note importanti:

- Il file `.env.local` è già nel `.gitignore` e non verrà committato
- Non condividere mai la tua chiave API pubblicamente
- Groq offre un piano gratuito generoso per l'uso dell'API
- Il modello utilizzato è `llama-3.1-70b-versatile` (puoi modificarlo in `app/api/chat/ai/route.ts`)

## Modelli disponibili:

Attualmente il sistema usa `llama-3.1-70b-versatile` che offre un buon bilanciamento tra velocità e qualità. Altri modelli disponibili su Groq:

- `llama-3.1-8b-instant` - Più veloce, buona per risposte rapide
- `llama-3.1-70b-versatile` - Bilanciato tra velocità e qualità (attuale)
- `mixtral-8x7b-32768` - Ottimo per contesti lunghi
- `gemma2-9b-it` - Buono per istruzioni

Per cambiare il modello, modifica questa riga in `app/api/chat/ai/route.ts`:

```typescript
model: "llama-3.1-70b-versatile", // Cambia con il modello desiderato
```

