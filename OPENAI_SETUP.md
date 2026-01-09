# OpenAI API Setup

Per utilizzare la chat AI, è necessario configurare la chiave API di OpenAI.

## Passaggi per la configurazione:

1. **Ottieni una chiave API da OpenAI:**
   - Vai su https://platform.openai.com/api-keys
   - Accedi al tuo account (o creane uno se non ce l'hai)
   - Clicca su "Create new secret key"
   - Copia la chiave API generata

2. **Crea il file `.env.local` nella root del progetto:**
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```
   
   Sostituisci `your_openai_api_key_here` con la chiave API che hai copiato.

3. **Riavvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

## Note importanti:

- Il file `.env.local` è già nel `.gitignore` e non verrà committato
- Non condividere mai la tua chiave API pubblicamente
- La chiave API ha dei costi associati all'uso di OpenAI
- Il modello utilizzato è `gpt-4o-mini` (puoi modificarlo in `app/api/chat/ai/route.ts`)

## Modello utilizzato:

Attualmente il sistema usa `gpt-4o-mini` per bilanciare costi e performance. Se vuoi usare un modello diverso, modifica questa riga in `app/api/chat/ai/route.ts`:

```typescript
model: "gpt-4o-mini", // Cambia in "gpt-4o" per più qualità
```

