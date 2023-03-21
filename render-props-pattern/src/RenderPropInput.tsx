import { useState } from "react"

export default function RenderPropInput(props: any) {
  const [value, setValue] = useState('')

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.children ? props.children(value) : props.render(value)}
    </>
  )
}
