import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const NavBar = () => {
  return (
    <NavigationMenu className='sticky top-0 bg-background shadow-xs z-10 max-w-full'>
      <NavigationMenuList className='container px-4 py-2 gap-4'>
        <NavigationMenuItem className='mr-auto'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href='/#hero'>
                <strong>DM ELEKTRO FRIGO</strong>
              </Link>
            }
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#services'>Usluge</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#gallery'>Galerija</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#about'>O nama</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#contact'>Kontakt</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavBar
