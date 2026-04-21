Bilingual Engineering Portal: Document-to-Code Implementation
A high-performance, static-first web platform built to transition a traditional engineering profile from a static document into a modern, bilingual digital identity.

Overview
This project serves as a technical bridge for an engineering firm, converting complex service specifications (HVAC, Elevators, Facility Management) into a responsive UI. The primary focus was on layout stability across bidirectional (RTL/LTR) switching and performance optimization.

Tech Stack
Frontend: React 18 + TypeScript + Vite

Styling: Tailwind CSS (Modern v4/v3 hybrid configuration)

Internationalization: i18next (Native EN/AR support)

Optimization: AI-native orchestration for rapid scaffolding and architecture consistency.

Key Engineering Challenges
1. Bidirectional (RTL) Layout Stability
Engineering terms in Arabic can be more condensed than in English, while technical specs (like EN81/ASME standards) must remain LTR. I implemented a custom bidirectional engine that mirrors the UI logic while preserving the legibility of technical data.

2. Dependency & Versioning Resolution
During the build, I navigated significant versioning conflicts between legacy Tailwind configurations and modern build tools. Resolving these helped ensure a clean, future-proof CSS architecture without technical debt.

3. Document-to-Architecture Mapping
The project required analyzing a raw business profile and architecting a data structure that allows for service-specific inquiry routing and compliance badge automation.

Installation & Setup
Clone the repository:

Bash
git clone https://github.com/Adilalahee/proyash-engineering.git
Install dependencies:

Bash
npm install
Run Development Server:

Bash
npm run dev
Performance Goals
Sub-2s Load Time: Achieved via static-first architecture and Vite's optimized build process.

Type Safety: 100% TypeScript coverage for all bilingual content mappings.

Zero-Overhead: Minimal backend footprint using lightweight form-handling logic.
