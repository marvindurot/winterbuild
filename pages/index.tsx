import ThemeChanger from '@/components/ThemeChanger'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="dark:bg-slate-900 bg-white">
      <Head>
        <title>Install Winter CMS with Laravel Sail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <nav>
            <ul className="flex flex-col items-end">
              <li className="p-6">
                <ThemeChanger />
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex items-center flex-col">
          <article className="max-w-3xl font-sans dark:text-slate-400 text-gray-600 py-20">
            <h1 className="font-bold dark:text-white text-black text-3xl">
              Installing Winter CMS with Laravel Sail
            </h1>
            <h2 className="text-xl mt-2">
              Learn how to install Winter CMS with a local Docker environment.
            </h2>
            <div className="mt-4 flex items-start">
              <p className="text-md w-2/3 pe-8">
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
                <span className="bg-gray-100 font-mono text-xs dark:bg-slate-800">
                  sail artisan
                </span>{' '}
                instead of{' '}
                <span className="bg-gray-100 font-mono text-xs dark:bg-slate-800">
                  php artisan
                </span>
                .
              </aside>
            </div>
            <h2 className="text-2xl mt-8 dark:text-white">Getting started</h2>
            <p className="text-md mt-6">
              The instructions to install Sail will differ depending on your
              operating system. Also a different build URL is used to install
              Winter CMS. By default this URL only installs the base environment
              with a MySQL service.
            </p>
            <div className="mt-4 text-sm">
              <div className="bg-gray-100 p-4 rounded-t-md dark:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="inline-block w-5 h-5 mr-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                Replace{' '}
                <span className="bg-gray-200 font-mono text-sm dark:bg-slate-800">
                  example-app
                </span>{' '}
                with any directory name and this is where Winter CMS will be
                installed.
              </div>
              <div className="bg-slate-800 text-slate-400 p-1 text-xs">
                <span>Terminal</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 float-right hover:text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <div className="bg-slate-700 p-4 rounded-b-md">
                <span className="text-slate-200 font-mono">
                  curl -s
                  &quot;https://winterbuild.vercel.app/api/laravelsail/example-app&quot;
                  | bash
                </span>
              </div>
            </div>
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
            <p className="text-md text-justify mt-4">
              Once everything is ready, you are prompted to run these commands
              to start the web server.
            </p>
            <div className="mt-4 text-sm">
              <div className="bg-slate-800 text-slate-400 p-1 text-xs rounded-t-md">
                <span>Terminal</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 float-right hover:text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <div className="bg-slate-700 p-4 rounded-b-md">
                <span className="text-slate-200 font-mono">
                  cd example-app<br></br>./vendor/bin/sail up
                </span>
              </div>
            </div>
            <p className="text-md mt-4">
              Next, open another console window, navigate to the same directory
              and run these commands to install Winter CMS. The database
              settings are preconfigured and ready to go.
            </p>
            <div className="mt-4 text-sm">
              <div className="bg-slate-800 text-slate-400 p-1 text-xs rounded-t-md">
                <span>Terminal</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 float-right hover:text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <div className="bg-slate-700 p-4 rounded-b-md">
                <span className="text-slate-200 font-mono">
                  ./vendor/bin/sail artisan winter:up
                </span>
              </div>
            </div>
            <p className="text-md mt-4">
              After the installation is complete, open the website using the{' '}
              <span className="bg-gray-100 font-mono text-sm dark:bg-slate-800">
                http://localhost
              </span>{' '}
              address.
            </p>
            <h3 className="text-2xl mt-6 pb-4 dark:text-white">See also</h3>
            <a
              className="text-indigo-400 hover:text-indigo-800"
              href="https://laravel.com/docs/10.x/sail"
            >
              Laravel Sail Documentation
            </a>
          </article>
        </section>
      </main>
    </div>
  )
}
