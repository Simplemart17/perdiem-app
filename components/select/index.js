const Select = (props) => {
  const { options, onChange, value, className, description } = props

  return (
    <div className={className}>
      <div className="relative">
        <label className="ml-2">{description}</label>
        <select
          onChange={onChange}
          value={value && value}
          className="block w-full h-12 p-2 mb-2 overflow-hidden text-sm leading-tight text-gray-700 bg-white bg-no-repeat border border-gray-300 border-solid rounded-md outline-none appearance-none cursor-pointer bg-custom-right focus:border-[#03658C] focus:outline-none bg-select-caret"
        >
          {options &&
            options.map((option, index) => (
              <option value={index + 1} key={index}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Select
