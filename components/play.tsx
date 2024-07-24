import React from "react"
import ReactPlayer from 'react-player'
 
type CounterProps = {
  url: string
}

export default function GetVideo({url}: CounterProps) {
  return (
    <div className="scale-75 lg:scale-100 w-full mx-auto flex items-start justify-center">
      <ReactPlayer width={580} url={url} />;
    </div>
  )
}