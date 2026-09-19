# BuildCraft Constructions - website + admin demo

A production-style demo website for a construction contractor, plus a simple CMS/CRM the
contractor can run themselves: add and edit projects, and track quote enquiries from New to
Converted.

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Other scripts: `npm run build`, `npm run start`, `npm run typecheck`.

## Demo login

Admin panel: http://localhost:3000/admin/login

- Email: `admin@buildcraft.demo`
- Password: `demo123`

This is DEMO authentication. Credentials are checked in `src/app/api/auth/login/route.ts`
(with `.env` overrides) and the session is a flag in `sessionStorage`. Swap in NextAuth,
Clerk or Supabase Auth before going live.

## The two flows to show a client

**1. The contractor manages the portfolio**

Admin login → Dashboard → Projects → Add project → fill details and images → Publish →
open `/projects` on the public site → the new project is there.

**2. The website captures and manages leads**

`/request-a-quote` → submit the form → success message → Admin → Enquiries → the new
enquiry is at the top with status New → change it to Contacted, then Converted.

## Pages

| Public | Admin |
| --- | --- |
| `/` Home | `/admin/login` Demo login |
| `/about` | `/admin` Dashboard |
| `/services` | `/admin/projects` Project list |
| `/projects` with filters and search | `/admin/projects/new` Add project |
| `/projects/[slug]` Project detail | `/admin/projects/[id]` Edit project |
| `/contact` | `/admin/enquiries` Lead management |
| `/request-a-quote` | `/admin/settings` Business details, reset demo data |

## Where the data lives

All state goes through `src/context/StoreProvider.tsx`. It seeds from
`src/data/projects.ts` and `src/data/enquiries.ts`, keeps everything in React state and
mirrors it to `localStorage` so the demo survives a refresh.

To connect PostgreSQL / Supabase, replace the bodies of `addProject`, `updateProject`,
`deleteProject`, `addEnquiry` and `updateEnquiryStatus` with API calls. Nothing else in the
app needs to change. `src/app/api/enquiries/route.ts` already shows the server-side shape
(currently an in-memory log).

Reset the demo data any time from Admin → Settings.

## Things you will want to replace

| What | Where |
| --- | --- |
| Phone, WhatsApp number, email, address, map, social links | `src/lib/site.ts` |
| All project photos and page imagery | `src/data/images.ts` |
| Seed projects and enquiries | `src/data/projects.ts`, `src/data/enquiries.ts` |
| Services copy | `src/data/services.ts` |
| Team, stats, testimonials, process | `src/data/company.ts` |
| Demo credentials | `.env` (see `.env.example`) |

The WhatsApp button uses `whatsappLink()` from `src/lib/site.ts` with the message
"Hello BuildCraft Constructions, I would like to discuss a construction project."

## Structure

```
src/
  app/
    (site)/          public pages, shared navbar/footer/WhatsApp layout
    admin/           admin panel with its own sidebar layout and auth guard
    api/             demo login route + enquiry endpoint
  components/
    ui/              Button, Field, Modal, Skeleton, SmartImage, StatusBadge, ImageUploader
    public/          Navbar, Footer, Hero sections, cards, forms, filters
    admin/           Sidebar, header, dashboard cards, project and enquiry tables, project form
  context/           StoreProvider (data), AuthProvider (demo auth)
  data/              seed content
  lib/               types, site config, helpers
```

## Notes

- Images load from Unsplash. `SmartImage` falls back to `/placeholder.svg` if a URL fails,
  so a dead link never breaks the layout.
- Forms validate on submit and show field-level errors, loading states and success states.
- Tables become cards on mobile; the admin panel is usable from a phone.
- Reduced-motion preferences are respected and focus rings are visible throughout.
