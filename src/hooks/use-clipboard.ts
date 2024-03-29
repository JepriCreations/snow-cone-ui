import { useState } from 'react'

type HookType = {
  timeout?: number
}
export function useClipboard({ timeout = 3000 }: HookType = {}) {
  const [error, setError] = useState<Error | null>(null)
  const [copied, setCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState<any>(null)

  const handleCopyResult = (value: boolean) => {
    copyTimeout && clearTimeout(copyTimeout)
    setCopyTimeout(setTimeout(() => setCopied(false), timeout))
    setCopied(value)
  }

  const copy = (valueToCopy: any) => {
    if (!valueToCopy) return

    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch((err) => setError(err))
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'))
    }
  }

  const reset = () => {
    setCopied(false)
    setError(null)
    copyTimeout && clearTimeout(copyTimeout)
  }

  return { copy, reset, error, copied }
}
