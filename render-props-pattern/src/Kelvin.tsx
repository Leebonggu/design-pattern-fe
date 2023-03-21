export default function Kelvin({ value = 0 }: any) {
  return <div className="temp">{value + 273.15}K</div>;
}