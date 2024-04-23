const FormInput = ({ label, type, value, onChange, placeholder,accept,classnameI }) => {
  return (
    <div className="border-b border-solid grid min-[900px]:grid-cols-[24rem,1fr,1.2fr] gap-y-2.4 px-0 py-[1.2rem]" style={{ WebkitBoxAlign: 'center', alignItems: 'center' }}>
      <label className="text-[1rem] font-bold max-[900px]:mb-5">{label}</label>
      <input
        type={type}
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
        accept={accept}
        className={classnameI}
      />
    </div>
  );
};
export default FormInput;
