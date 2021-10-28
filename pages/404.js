import Image from "next/image"

export default function Custom404() {
  return (
    <div className="py-40 flex justify-center m-head">
      <Image src={'/lotties/404.gif'} width={320} height={320}/>
    </div>
  )
}
