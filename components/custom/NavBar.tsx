'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button, buttonVariants } from '@/components/ui/button'
import { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
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
        <NavigationMenuItem className='hidden md:block'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#services'>Usluge</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem className='hidden md:block'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#gallery'>Galerija</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem className='hidden md:block'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#about'>O nama</Link>}
          />
        </NavigationMenuItem>
        <NavigationMenuItem className='hidden md:block'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href='/#contact'>Kontakt</Link>}
          />
        </NavigationMenuItem>

        <Drawer open={open} onOpenChange={setOpen} swipeDirection={'right'}>
          <DrawerTrigger
            render={<Button variant='outline' />}
            className='md:hidden'
          >
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerClose
                render={<Button variant='outline' className='ml-auto' />}
              >
                <X />
              </DrawerClose>
            </DrawerHeader>
            <div className='p-4'>
              <ul className='grid gap-2'>
                <li>
                  <a
                    href='#hero'
                    className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}`}
                    onClick={() => setOpen(false)}
                  >
                    <strong>DM ELEKTRO FRIGO</strong>
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}`}
                    onClick={() => setOpen(false)}
                  >
                    Usluge
                  </a>
                </li>
                <li>
                  <a
                    href='#gallery'
                    className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}`}
                    onClick={() => setOpen(false)}
                  >
                    Galerija
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}`}
                    onClick={() => setOpen(false)}
                  >
                    O nama
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className={`${buttonVariants({ size: 'lg', variant: 'ghost' })}`}
                    onClick={() => setOpen(false)}
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavBar
