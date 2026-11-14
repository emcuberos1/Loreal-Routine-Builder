# L'Oréal Smart Routine Builder

A product-aware beauty advisor. Browse and search real products across
L'Oréal Group brands, select the ones you want, and get a routine generated
from those specific items — then ask follow-up questions about it.

**[View the live site →](https://emcuberos1.github.io/Loreal-Routine-Builder/)**

Built on an earlier conversational version I developed for the same brand —
[see it here](https://emcuberos1.github.io/Loreal-Chatbot/).

## Features

- 35 products across CeraVe, La Roche-Posay, Vichy, L'Oréal Paris, Maybelline,
  Lancôme, Garnier, Kiehl's, Kérastase, Redken and others
- Category filter and live keyword search, working together
- Click to select products; selections persist across page reloads and can be
  removed individually or cleared all at once
- Routines generated from the selected products' own data
- Follow-up questions answered with the full conversation in context
- Live web search with inline citations and a sources list
- Right-to-left layout with automatic language detection

## Built with

HTML, CSS and vanilla JavaScript, with a Cloudflare Worker sitting between the
browser and the OpenAI API.

## A note on the API key

The browser never sees it. Requests go to a Cloudflare Worker, which holds the
key as an encrypted secret and forwards the call. Anything in client-side
JavaScript is readable by anyone who opens developer tools, so the key could
not live there.
