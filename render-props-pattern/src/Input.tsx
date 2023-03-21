export default function Input({ value, handleChange }: any) {

  return (
    <input
      type="text"
      value={value}
      onChange={e => handleChange(e.target.value)}
      placeholder="Temp in °C"
    />
  );
}
