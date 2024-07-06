import Image from "next/image";
import LogoImage from "../../../../public/logo.png"

export default function Logo({...props }) {
  return (
    <Image src={LogoImage} alt="logo" width={120} height={120}/>
  )
}
