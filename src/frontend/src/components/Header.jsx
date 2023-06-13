import Image from "next/image"
import f1Logo from "/public/images/f1_logo.svg"
import f1LogoRed from "/public/images/f1_logo_red.svg"
import Link from "next/link"

export const HeaderF1 = () => {
  return (
    <div className="flex text-white h-16 items-center justify-between">
      <Link href="/home">
        <Image alt="" src={f1Logo} className="h-6 w-auto flex" />
      </Link>
    </div>
  )
}

export const HeaderF1Red = () => {
  return (
    <div className="flex text-white h-16 items-center justify-between">
      <Link href="/home">
        <Image alt="" src={f1LogoRed} className="h-6 w-auto flex" />
      </Link>
    </div>
  )
}
