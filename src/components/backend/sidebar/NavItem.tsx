'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavItem = ({item}: {item: {title: string, path: string}}) => {
  const pathname = usePathname();
  return (
    <Link href={item.path} className={`py-3 px-3 hover:bg-bgLightPrimary hover:dark:bg-bgDarkPrimary rounded-md text-xl font-semibold hover:text-txtSecondary hover:dark:text-txtDarkSecondary ${item.path === pathname && "bg-btnPrimary text-white"}`}>
      {item.title}
    </Link>
  )
}

export default NavItem
