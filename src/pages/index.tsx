import { Icon } from '@iconify/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const techStack = [
  {
    name: 'Redux Toolkit',
    color: 'violet',
    docLink: 'https://redux-toolkit.js.org/',
    description: 'State management',
    logoSrc: '/img/redux.svg',
  },
  {
    name: 'React Router',
    color: 'red',
    docLink: 'https://reactrouter.com/en/main',
    description: 'Routing',
    logoSrc: '/img/react-router.svg',
  },
  {
    name: 'React Hook Form',
    color: 'pink',
    docLink: 'https://react-hook-form.com/',
    description: 'Forms',
    logoSrc: '/img/react-hook-form.svg',
  },
  {
    name: 'TanStack Query',
    color: 'orange',
    docLink: 'https://tanstack.com/query/v4',
    description: 'Data fetching',
    logoSrc: '/img/react-query.svg',
  },
  {
    name: 'Mantine',
    color: 'blue',
    docLink: 'https://mantine.dev/',
    description: 'UI library',
    logoSrc: '/img/mantine.svg',
  },
  {
    name: 'TailwindCSS',
    color: 'cyan',
    docLink: 'https://tailwindcss.com/',
    description: 'CSS framework',
    logoSrc: '/img/tailwindcss.svg',
  },
];

const HomePage = () => {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const dark = colorScheme === 'dark';

  return (
    <>
      <Head>
        <title>NextJS + TS</title>
        <meta
          content="A simple starter template for NextJS + Typescript projects, with many useful features and tools pre-installed."
          name="description"
        ></meta>
      </Head>
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <div className="flex w-full justify-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              alt="nextjs logo"
              className="aspect-square object-contain"
              height={80}
              src="/img/nextjs.svg"
              width={80}
            />
            <h1 className="text-4xl">NextJS</h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              alt="typescript logo"
              className="aspect-square object-contain"
              height={80}
              src="/img/typescript.svg"
              width={80}
            />
            <h1 className="text-4xl">Typescript</h1>
          </div>
        </div>

        <div className="grid w-2/3 grid-cols-1 gap-4 md:grid-cols-2 lg:auto-cols-min lg:grid-cols-3 xl:auto-rows-fr">
          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon="fluent-emoji-flat:high-voltage"
                  inline
                  width={22}
                />{' '}
                Batteries included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map(
                  ({ name, color, docLink, description, logoSrc }) => {
                    return (
                      <div
                        className="flex flex-col items-center gap-4"
                        key={name}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Button
                                asChild
                                className="h-16 w-16"
                                variant="outline"
                              >
                                <Link href={docLink || '#'} target="_blank">
                                  <Image
                                    alt={`${name.toLowerCase()} logo`}
                                    className="aspect-square object-contain"
                                    height={36}
                                    src={logoSrc}
                                    width={36}
                                  />
                                </Link>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <Badge color={color}>{name}</Badge>
                      </div>
                    );
                  },
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon="fluent-emoji-flat:sponge"
                  inline
                  width={22}
                />{' '}
                Better code style with
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge>ESlint</Badge>
                <Badge>Prettier</Badge>
                <Badge>Husky</Badge>
                <Badge>Commitlint</Badge>
                <Badge>Lint-staged</Badge>
                <Badge>Editorconfig</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon="fluent-emoji-flat:dizzy"
                  inline
                  width={22}
                />{' '}
                Move faster with these awesome libraries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge color="yellow">Axios</Badge>
                <Badge color="lime">Clsx</Badge>
                <Badge color="rose">Type-fest</Badge>
                <Badge color="cyan">Zod</Badge>
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon={`fluent-emoji-flat:${
                    dark ? 'full-moon-face' : 'sun-with-face'
                  }`}
                  inline
                  width={22}
                />{' '}
                Dark mode ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Button
                  data-test-id="demo-color-scheme-toggle"
                  onClick={() => toggleColorScheme()}
                  variant="secondary"
                >
                  Toggle dark mode
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
