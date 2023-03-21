export default function Fahrenheit({ value = 0 }: any) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}