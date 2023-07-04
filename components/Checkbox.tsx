export const Checkbox = ({
  label,
  id,
  onChange,
  checked,
  strikethrough,
}: {
  label: string
  id: string
  onChange: any
  checked?: boolean
  strikethrough?: boolean
}) => {
  return (
    <div className="flex items-center mb-4">
      <input
        onChange={onChange}
        checked={checked}
        id={id}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={id}
        className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
          strikethrough && 'line-through text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  )
}
