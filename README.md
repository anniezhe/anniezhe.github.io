# Annie He's Portfolio Website

My website is built using a provided template from Next.js 14 (pages directory) and NextUI (v2).

[Try the template on CodeSandbox](https://githubbox.com/nextui-org/next-pages-template)

>Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
>Read more: [Pages Router](https://nextjs.org/docs/pages)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

```bash
pnpm create next-app my-hero-app -e https://github.com/heroui-inc/next-pages-template --use-pnpm
```

### IMPORTANT

You must do the following if you're using `pnpm` on an external drive.

1. Go into your new folder by using this command: `cd my-hero-app`
2. Create a new file called 'pnpm-workspace.yaml' file.
3. Paste the following code below.

```yaml
storeDir: "{name of external drive such as E: or D:}\\.pnpm-store"
virtualStoreDir: "node_modules/.pnpm"
allowBuilds:
  - sharp
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `pnpm`:

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

### Run the production build check

```bash
pnpm build
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).
