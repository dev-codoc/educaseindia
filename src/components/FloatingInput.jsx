export default function FloatingInput({
    label,
    name,
    value,
    onChange,
    type = "text",
    required = false
  }) {
    return (
      <div className="relative w-full">
  
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer bg-gray-100 w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-sm focus:outline-none focus:border-[#6c25ff]"
        />
  
        <label
          className="
          absolute left-3 
          -top-2.5
          bg-gray-100 px-1
          text-xs text-[#6c25ff]
          transition-all
          pointer-events-none
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-focus:-top-2.5
          peer-focus:text-xs
          peer-focus:text-[#6c25ff]
          "
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
  
      </div>
    );
  }