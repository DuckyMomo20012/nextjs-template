This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<table>
    <tbody>
        <tr>
            <th> Tech Stack </th>
            <th> Package </th>
            <th> Version (package.json) </th>
        </tr>
        <tr>
            <td> JavaScript Library </td>
            <td> React </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/react?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Framework </td>
            <td> NextJS </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/next-auth?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Authentication </td>
            <td> Next-Auth </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/next?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> ORM </td>
            <td> Prisma </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/dev/prisma?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> State Management </td>
            <td> Redux-toolkit </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/@reduxjs/toolkit?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Data fetching </td>
            <td> React-query </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/react-query?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Component Styling </td>
            <td> WindiCSS </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/dev/windicss?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> UI Components Library </td>
            <td> Mantine </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/@mantine/core?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Lint tool </td>
            <td> ESLint </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/dev/eslint?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Formatter </td>
            <td> Prettier </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/dev/prettier?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Icons </td>
            <td> Iconify <br/> (@iconify/react) </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/nextjs-template/@iconify/react?color=B9C3FF&style=flat-square"> </td>
        </tr>
    </tbody>
</table>

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

## Folder Architecture:

```
.
├── components
│   ├── elements
│   ├── layouts
│   └── modules
├── constants
├── context
├── hooks
├── pages
│   └── api
├── store
│   └── slice
└── utils
```

- `elements`: Basic building blocks.
- `layouts`: Wrap your pages with default layout.
- `modules`: Modules are built out of multiple `elements`.
- `constants`: Global constants.
- `context`: React Context providers.
- `hooks`: Custom hooks.
- `pages`: Your page routes.
- `pages/api`: Your apis.
- `store`: Store your Redux store.
- `store/slice`: Store your Redux slices.
- `utils`: Your reusable functions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
