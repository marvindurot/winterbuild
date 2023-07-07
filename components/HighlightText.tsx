import { PropsWithChildren } from 'react'

const HightlightText = ({ children }: PropsWithChildren) => {
  return (
    <span className="bg-gray-100 font-mono text-xs dark:bg-slate-800">
      {children}
    </span>
  )
}

export default HightlightText
