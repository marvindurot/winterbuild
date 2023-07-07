import {
  PropsWithChildren,
  MouseEvent,
  useCallback,
  ReactElement,
  useState,
} from 'react'

interface CodeBlockProps extends PropsWithChildren {
  title: string
  copyText?: string
  tooltip?: ReactElement | string
}

const CodeBlock = (props: CodeBlockProps) => {
  const { children, title, tooltip, copyText } = props

  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(
    async (e: MouseEvent<SVGSVGElement>) => {
      if (typeof copyText === 'string') {
        // Copy text to clipboard
        if ('clipboard' in navigator) {
          await navigator.clipboard.writeText(copyText)
        } else {
          document.execCommand('copy', true, copyText)
        }
        // Show feedback text
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
      }
    },
    [copyText]
  )

  return (
    <div className="mt-4 pb-2 text-sm">
      {tooltip && (
        <div className="bg-gray-100 p-4 rounded-t-md dark:bg-transparent">
          <svg
            id="info"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline-block w-5 h-5 mr-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          {tooltip}
        </div>
      )}
      <div>
        <div className="bg-slate-800 text-slate-400 p-1 text-xs">
          <span>{title}</span>
          <div className="float-right flex">
            {copied && <span className="px-4">Copied!</span>}
            <svg
              id="copy"
              onClick={(e) => handleCopy(e)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-slate-700 p-4 rounded-b-md">
          <span className="text-slate-200 font-mono">{children}</span>
        </div>
      </div>
    </div>
  )
}

export default CodeBlock
