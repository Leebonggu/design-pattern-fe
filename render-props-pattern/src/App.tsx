import { ReactNode, useState } from 'react'
import Fahrenheit from './Fahrenheit'
import Input from './Input'
import Kelvin from './Kelvin'
import RenderPropInput from './RenderPropInput'

const Title = (props: {render: () => JSX.Element}) => props.render()

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Title render={() => (
          <h1>Hello, this is render Props</h1>
        )} 
      />

      <Input value={value} handleChange={setValue}/>
      <Kelvin value={value} />
      <Fahrenheit value={value} />

      <RenderPropInput
        render={(value: any) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
      <RenderPropInput>
        {(value: any) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </RenderPropInput>
    </div>
  )
}

export default App
