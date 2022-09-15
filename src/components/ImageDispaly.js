/* import skor1 from '../img/skor1.jpg' */
import React from "react"
const ImageDispaly = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'center',
      }}
    >
      <img src={skor1} alt='skor mask picture' height={600} width={450} />
    </div>
  )
}
export default ImageDispaly
