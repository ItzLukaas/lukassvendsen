# Push → GitHub → Vercel (automatisk live)

Når du har fulgt nedenstående én gang, vil **hver push til `main`** automatisk bygge og deploye på Vercel.

---

## Frisk PC (kun Node.js installeret)

Du behøver kun **to ting** på din maskine:

| Hvad        | Hvorfor                         | Download |
|------------|----------------------------------|----------|
| **Node.js** | (har du allerede)               | [nodejs.org](https://nodejs.org) |
| **Git**     | For at pushe koden til GitHub   | [git-scm.com/download/win](https://git-scm.com/download/win) |

**Gør sådan:**

1. **Installér Git:** Gå til [https://git-scm.com/download/win](https://git-scm.com/download/win) → vælg "Click here to download" → kør installeren. Tryk "Next" gennem trinnene (standard er fint). Afslut med "Finish".
2. **Genstart terminal:** Luk alle terminaler/Cursor og åbn dem igen, så Windows genkender `git`.
3. **Tjek:** Åbn PowerShell og skriv `git --version`. Du bør se fx `git version 2.43.0`.
4. Følg derefter **"1. Opret repo på GitHub"** og **"2. Push projektet til GitHub"** nedenfor.

Du behøver **ikke** at installere noget andet (ingen global npm-pakker, ingen ekstra værktøjer). Vercel kører `npm install` og `npm run build` på deres servere, når du pusher.

---

## Før du starter: Git og terminal

**Hvis `git init` giver fejl**, er det ofte én af disse årsager:

### 1) Git er ikke installeret

Åbn en **ny** terminal (PowerShell eller Command Prompt) og skriv:

```powershell
git --version
```

- Hvis du får en version (fx `git version 2.43.0`), er Git installeret – gå videre til punkt 2.
- Hvis du får "ukendt kommando" eller "not recognized", skal du installere Git:  
  **Download:** [https://git-scm.com/download/win](https://git-scm.com/download/win)  
  Installer med standardindstillinger og **genstart Cursor/terminal** bagefter.

### 2) Brug en terminal uden for Cursor

Cursor’s indbyggede terminal kan somme tider give problemer med Git. Prøv i stedet:

- **Windows:** Åbn **PowerShell** eller **Windows Terminal** fra Start-menuen.  
  Gå til projektmappen:  
  `cd C:\Users\Bandit\Downloads\lukassvendsen`  
  Kør derefter `git init` osv. der.

Eller:

- Højreklik på mappen **lukassvendsen** i **File Explorer** → vælg **"Open in Terminal"** eller **"Åbn i PowerShell"** (hvis du har den mulighed). Så er du allerede i den rigtige mappe – kør derefter `git init`.

### 3) Du er i den forkerte mappe

I terminalen skal du være inde i selve **lukassvendsen**-mappen (hvor `package.json` og `src` ligger). Kør:

```powershell
cd "C:\Users\Bandit\Downloads\lukassvendsen"
dir
```

Du bør se `package.json`, `src`, `README.md` osv. Derefter: `git init`.

---

## 1. Opret repo på GitHub (først)

1. Gå til **[github.com/new](https://github.com/new)** (log ind hvis nødvendigt).
2. **Repository name:** fx `lukassvendsen` (eller hvad du vil).
3. Vælg **Public**.
4. **Vigtigt:** Tilføj **ikke** README, .gitignore eller license – projektet har filer allerede.
5. Klik **Create repository**.
6. GitHub viser nu kommandoer – du skal bruge **din** projektmappe og de kommandoer fra trin 2 nedenfor.

---

## 2. Push projektet til GitHub

Åbn terminal i projektmappen og kør:

**PowerShell (Windows):** Kør én linje ad gangen.

```powershell
cd "C:\Users\Bandit\Downloads\lukassvendsen"
git init
git add .
git status
git commit -m "Initial commit - fotografi one-pager"
git branch -M main
git remote add origin https://github.com/ItzLukaas/lukassvendsen.git
git push -u origin main
```

**Git Bash / Linux / macOS:** Samme kommandoer, men brug din mappesti i `cd` (fx `cd /c/Users/Bandit/Downloads/lukassvendsen`).

**Tip:** Brug kun almindelig bindestreg `-` i commit-beskeden (ikke lang tankestreg –). Hvis `git push` spørger om login, brug GitHub **Personal Access Token** som adgangskode (ikke din almindelige kode).

---

## 3. Knyt repo til Vercel (gør det live)

1. Gå til **[vercel.com](https://vercel.com)** og klik **Sign Up** eller **Log In**.
2. Vælg **Continue with GitHub** og godkend adgang, så Vercel kan læse dine repos.
3. Klik **Add New…** → **Project**.
4. Under **Import Git Repository** skal du se **ItzLukaas/lukassvendsen**. Klik **Import** ved det repo.
5. På næste skærm:
   - **Framework Preset** skal stå som **Next.js** (Vercel finder det selv).
   - **Root Directory**: lad stå tom (eller `./`).
   - Klik **Deploy**.
6. Vent 1–2 minutter. Når build er grøn, er du live.
7. Klik **Visit** – så får du din URL (fx `lukassvendsen.vercel.app`). Den kan deles med det samme.

**Eget domæne senere:** I Vercel → dit projekt → **Settings** → **Domains** kan du tilføje fx `lukassvendsen.dk`.

---

## 4. Fremover: automatisk deploy ved push

Når repo er forbundet til Vercel som ovenfor:

- **Push til `main`** → Vercel bygger og sætter siden live automatisk.
- Du pusher som altid: `git add .` → `git commit -m "Besked"` → `git push`.

Ingen ekstra skridt nødvendigt; Vercel håndterer resten.

---

## Fejlfinding

- **"remote origin already exists"** – Du har allerede tilknyttet GitHub. Brug i stedet:  
  `git remote set-url origin https://github.com/ItzLukaas/lukassvendsen.git`  
  og derefter `git push -u origin main`.

- **"failed to push" / 403 / authentication** – GitHub kræver ofte et **Personal Access Token** i stedet for kodeadgangskode:  
  [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens) → Generate new token. Brug token som adgangskode når `git push` spørger.

- **Mange filer / "buffer too large"** – Sørg for at du er i projektmappen (`lukassvendsen`) og at `.gitignore` findes, så `node_modules` og `.next` ikke følger med. Kør `git status` for at se hvad der bliver tilføjet.

- **Kør i PowerShell:** Åbn PowerShell, gå til mappen med `cd "C:\Users\Bandit\Downloads\lukassvendsen"`, og kør derefter hver `git`-kommando én ad gangen.
