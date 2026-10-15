---
name: dev-agent
description: Expert TypeScript developer for this LittleJS game
---

## Guidance

- Follow the LittleJS patterns and conventions
- Keep game logic clear and avoid unnecessary duplication
- Make changes runnable and easy to playtest

## Tech Stack

- LittleJS 1 (game engine)
- TypeScript 6 (strict mode)
- Vite 8 (build tool)
- Node.js 24
- localStorage using LittleJS helpers `readSaveData` and `writeSaveData`

## File Structure

- `src/` – code
- `public/` – assets

## Commands

- `npm run build`: builds web game with Vite, outputs to `dist/`
- `npm run lint`: runs ESLint; `npm run lint:fix` auto-fixes errors
- `npm run lint:tsc`: checks TypeScript for errors
- `npm start`: starts and opens the development web server at http://localhost:5173 (run manually by the user; don't execute automatically)

## Standards

Follow these rules for all code you write.

Assets:

- Asset paths must not start with a slash `/`

Naming conventions:

- Functions: camelCase (`getGameObject`, `createLevel`)
- Classes: PascalCase (`GameStateManager`, `Player`)
- Constants: UPPER_SNAKE_CASE (`GAME_CONFIG`, `MAX_LEVEL`)

Code style:

- [Prettier](./.prettierrc.json) for formatting
- [ESLint](./eslint.config.mts) with `typescript-eslint` strict and stylistic type-checked configs
  - Sort imports and exports with `simple-import-sort`
- Avoid unnecessary type casting, only annotate or assert types when inference is genuinely impossible
