import React from "react"
import ReactPlayer from 'react-player'
 
type CounterProps = {
  url: string
}

export default function GetVideo({url}: CounterProps) {
  return <ReactPlayer width={640} url={url} />;
}