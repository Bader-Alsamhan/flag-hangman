# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Flag Hangman — a browser game that shows a random country flag and the player guesses the country name letter-by-letter, hangman style. Vanilla HTML/CSS/JS in exactly three files (`index.html`, `style.css`, `script.js`). No build step, no dependencies, no package manager, no tests.

## Running it

Serve the directory over HTTP (opening `index.html` directly also works since all assets are remote):

```bash
python3 -m http.server 8934
# then open http://localhost:8934
```

Note: the Claude Preview server (`preview_start` / `.claude/launch.json`) fails with macOS sandbox `PermissionError` in this Desktop-located directory. Run the server via Bash in the background instead, and verify with the Chrome extension tools against localhost.

## Architecture

All game logic lives in `script.js`, structured top-to-bottom as: data → state → DOM refs → audio → round setup/rendering → guess logic → map → controls → confetti → event wiring → boot.

**Data model.** `COUNTRIES` holds all 195 countries (193 UN members + Vatican + Palestine), each `{ name, code, a3, lat, lon, difficulty }`:
- `code` (ISO alpha-2) builds the flag URL: `https://flagcdn.com/w320/{code}.png`
- `a3` (ISO alpha-3) matches feature ids in the world GeoJSON for map highlighting
- `lat`/`lon` is an approximate centroid for the map marker

**Game progression.** Endless campaign: countries guessed correctly go into `state.conquered` and never repeat; lost countries stay in the pool and return later. The game ends only when all 195 are conquered (`finishGame()` → "Play Again"). Progress (`score`, `streak`, `round`, `conquered`) persists to localStorage under `flagHangmanProgress` after every round; best streak separately under `flagHangmanBest`. Restart clears progress.

**Scoring.** Wrong guesses (−8) and hints (−15 letter / −25 map) deduct from `state.score` in real time; the round-end bonus is only `BASE_POINTS + streak*10`. Do not also subtract penalties at round end — that double-counts (was a bug once already).

**World map.** Rendered client-side as SVG from GeoJSON fetched at boot (`https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json`). Projection is equirectangular cropped to 85°N–60°S at exactly 2px per degree (`projX`/`projY`), Antarctica skipped. The CSS marker overlay uses the same math as percentages, so the projection constants must stay in sync with the `#world-svg` viewBox (`0 0 720 290`). Rings spanning >300° of longitude (Russia) get negative longitudes shifted +360 to avoid antimeridian streaks. 28 micro-states (Singapore, Monaco, Caribbean/Pacific islands) have no outline in the dataset — the pulsing marker is the intentional fallback, and `highlightCountry()` silently no-ops for them.

**Hangman.** The SVG figure in `index.html` has 6 `.figure-part` elements revealed in a fixed order by `revealHangmanPart()`; `MAX_WRONG = 6` and the hearts display derive from the same counter.

## Gotchas

- Flag aspect ratios vary wildly (Qatar 11:28, Switzerland 1:1, Nepal non-rectangular). The flag frame must keep `object-fit: contain` — `cover` crops flags.
- Country names contain hyphens (Guinea-Bissau, Timor-Leste). `renderWord()` renders non-letter characters as always-visible `.punct` boxes; win-checking strips non-A–Z. Keep both paths in mind when touching name handling.
- Win/lose checks and the keyboard operate on uppercased names; only A–Z is guessable.
- Sounds are synthesized with WebAudio (`beep()`) — there are no audio assets.
