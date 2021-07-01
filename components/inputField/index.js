import { useState } from 'react'
import get from 'lodash.get'

const InputField = ({
  errorMessage,
  isDisabled,
  onBlur,
  edited,
  className,
  ...props
}) => {
  const [active, setActive] = useState(false)
  const [focus, setFocus] = useState(false)

  const label = props.placeholder
  delete props.placeholder
  delete props.onBlur

  const handleFocus = () => {
    setActive(true)
    setFocus(true)
  }

  const handleBlur = (e) => {
    onBlur(e)
    if (!props.value) {
      setActive(false)
    }
    setFocus(false)
  }

  const touched = edited
    ? get(edited, props.name) && errorMessage
    : errorMessage

  const input = (
    <div
      className={`h-12 relative border-2 rounded-md w-full py-[0.188rem] px-3 
    ${isDisabled ? 'bg-[#cee1ff88] border-none' : ''}
    ${
      errorMessage && (touched || props.value)
        ? 'border-red-500'
        : focus
        ? 'border-[#03658C]'
        : 'border-gray-300'
    }`}
    >
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="box-border w-full h-full pt-4 text-base leading-tight text-gray-800 bg-transparent border-0 outline-none"
        disabled={isDisabled}
      />
      <label
        className={`absolute left-[0.75rem] top-1/2 text-[#A6ADB4] pointer-events-none labelTrans 
      ${
        active || props.value ? 'floatLabel text-xs font-bold' : 'label text-sm'
      }`}
      >
        {label}
      </label>
    </div>
  )

  return (
    <div className={className} data-testid="input-field">
      {input}
      {touched || props.value ? (
        <p className="mt-1 text-xs text-left text-red-500">{errorMessage}</p>
      ) : null}
    </div>
  )
}

export default InputField
