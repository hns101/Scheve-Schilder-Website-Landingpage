// app/not-found.tsx
"use client";

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function NotFound() {
    useEffect(() => {
        // Leid de gebruiker direct om naar de homepage
        redirect('/');
    }, []); // De lege dependency array zorgt ervoor dat dit effect maar één keer runt

    // Optioneel: toon een bericht terwijl de redirect plaatsvindt
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '20px',
            fontFamily: 'sans-serif',
            backgroundColor: 'var(--color-bg-body)', // Gebruik uw CSS variabele
            color: 'var(--color-text-default)' // Gebruik uw CSS variabele
        }}>
            <h1>404 - Pagina Niet Gevonden</h1>
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>
                U wordt automatisch omgeleid naar de homepage...
            </p>
            {/* U kunt hier ook een laadspinner toevoegen voor betere UX */}
        </div>
    );
}