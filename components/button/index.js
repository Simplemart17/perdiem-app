const Button = (props) => {
  const { className, type, disabled, name, onClick } = props

  return (
    <button
      data-testid="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`text-sm py-2 px-4 rounded-sm focus:outline-none ${className}`}
    >
      {name}
    </button>
  )
}

export default Button
