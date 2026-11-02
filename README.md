# P2P Crypto Trading Platform — Solana

A prototype of a peer-to-peer cryptocurrency trading application intended to connect wallet users with offers. The repository combines a React/Vite frontend with an Anchor/Rust workspace for Solana program development.

## Intended functionality

The project description and current frontend outline the following goals:

- Connect a user's Solana wallet.
- Create and accept peer-to-peer offers.
- Provide an administrative interface with transaction/profit reporting.

These are project goals and should not be interpreted as evidence that a complete, audited, or production-ready trading flow is available.

## Technology stack

- Solana / Anchor (Rust) — on-chain program development.
- React + TypeScript + Vite — frontend.
- Solana Wallet Adapter / Phantom — wallet connectivity (as described by the project).

## Repository layout

- `anchor/` — Anchor workspace and Solana program.
- `app/` — frontend application.
- `README.md` — project overview and setup notes.

## Setup

The repository is still missing a complete, verified installation guide and dependency manifest in the root documentation. Before running it, install compatible versions of Node.js, Rust, Solana CLI, and Anchor, then inspect the package manifests and Anchor configuration in their respective directories.

Do not assume that the frontend and on-chain program are fully integrated until the program is built, deployed to a development cluster, and tested end to end.

## Security notice

A file named `.env` is currently present in the repository. Environment files must not contain committed secrets. If it contains a private key, seed phrase, RPC credential, or other sensitive value, treat that value as exposed: rotate/revoke it immediately, remove the secret from the repository and Git history, and replace it with a safe `.env.example` containing placeholders only. Do not fund or reuse a wallet whose private key has been exposed.

## Development status

This repository is a prototype. It should not be used to custody funds or facilitate real trades without security review, smart-contract testing, transaction-flow validation, and an independent audit.

## Author

Ruan Molinari — [GitHub](https://github.com/RuanMolinari)
