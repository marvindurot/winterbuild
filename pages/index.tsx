import CodeBlock from '@/components/CodeBlock'
import HightlightText from '@/components/HighlightText'
import ThemeChanger from '@/components/ThemeChanger'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Install Winter CMS with Laravel Sail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-slate-900 bg-white">
        <section>
          <nav>
            <ul className="flex flex-col items-end">
              <li className="p-4">
                <ThemeChanger />
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex items-center flex-col">
          <article className="max-w-3xl font-sans dark:text-slate-400 text-gray-600 pb-12">
            <h1 className="font-bold dark:text-white text-black text-3xl pb-2">
              Installing Winter CMS with Laravel Sail
            </h1>
            <h2 className="text-xl pb-4">
              Learn how to install Winter CMS with a local Docker environment.
            </h2>
            <div className="flex items-start">
              <p className="text-md w-2/3 pe-8 text-justify">
                <a
                  className="text-indigo-400 hover:text-indigo-600 underline"
                  href="https://laravel.com/docs/10.x/sail"
                >
                  Laravel Sail
                </a>{' '}
                is a command-line interface for interacting with a local Docker
                development environment. It helps you get started by automating
                the process of setting up the web server and database. These
                instructions teach you how to use Sail and Winter CMS together
                to get up and running.
              </p>
              <aside className="text-sm w-1/3 px-3 py-3 border dark:border-gray-500 rounded-md">
                Since the web server runs seperately from your operating system,
                commands are called using{' '}
                <HightlightText>sail artisan</HightlightText> instead of{' '}
                <HightlightText>php artisan</HightlightText>.
              </aside>
            </div>
            <h2 className="text-2xl dark:text-white pb-6 mt-8">
              Getting started
            </h2>
            <p>
              The instructions to install Sail will differ depending on your
              operating system. Also a different build URL is used to install
              Winter CMS. By default this URL only installs the base environment
              with a MySQL service.
            </p>
            <CodeBlock
              title="Terminal"
              copyText='curl -s "https://winterbuild.vercel.app/api/laravelsail/example-app" | bash'
              tooltip={
                <span>
                  Replace <HightlightText>example-app</HightlightText> with any
                  directory name and this is where Winter CMS will be installed.
                </span>
              }
            >
              curl -s
              &quot;https://winterbuild.vercel.app/api/laravelsail/example-app&quot;
              | bash
            </CodeBlock>
            <p className="text-md mt-4">
              With this different URL in mind, get started by following the
              specific Laravel guide for your operating system.
            </p>
            <ul className="list-disc text-md text-slate-400 ml-10 mt-2">
              <li>
                <a
                  className="text-indigo-400 hover:text-indigo-600 underline"
                  href="https://laravel.com/docs/10.x/installation#getting-started-on-macos"
                >
                  macOS
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-400 hover:text-indigo-600 underline"
                  href="https://laravel.com/docs/10.x/installation#getting-started-on-windows"
                >
                  Windows
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-400 hover:text-indigo-600 underline"
                  href="https://laravel.com/docs/10.x/installation#getting-started-on-linux"
                >
                  Linux
                </a>
              </li>
            </ul>
            <p className="text-md mt-4">
              Once everything is ready, you are prompted to run these commands
              to start the web server.
            </p>
            <CodeBlock
              title="Terminal"
              copyText="cd example-app && ./vendor/bin/sail up"
            >
              cd example-app<br></br>./vendor/bin/sail up
            </CodeBlock>
            <p className="text-md mt-4">
              Next, open another console window, navigate to the same directory
              and run these commands to install Winter CMS. The database
              settings are preconfigured and ready to go.
            </p>
            <CodeBlock
              title="Terminal"
              tooltip="This command will migrate database and generate a random administrator password."
              copyText="./vendor/bin/sail artisan winter:up"
            >
              ./vendor/bin/sail artisan winter:up
            </CodeBlock>
            <p className="text-md mt-4">
              After the installation is complete, open the website using the{' '}
              <HightlightText>http://localhost</HightlightText> address. You can login to the administration panel with the previous generated password. 
            </p>
            <h2 className="text-2xl dark:text-white mt-8 pb-4">See also</h2>
            <a
              className="text-indigo-400 hover:text-indigo-800"
              href="https://laravel.com/docs/10.x/sail"
            >
              <svg
                id="book"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 inline-block mr-2"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              Laravel Sail Documentation
            </a>
          </article>
        </section>
      </main>
    </>
  )
}
