import React from "react";

export default function Presentational({ dogs }: { dogs: any }) {
  return dogs.map((dog: any, i: number) => <img src={dog} key={i} alt="Dog" />);
}