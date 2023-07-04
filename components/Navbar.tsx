import Image from 'next/image'
import Link from 'next/link'

import { NavLinks } from '@constants'
import { getCurrentUser } from '@lib/session'

import AuthProviders from './AuthProviders'
import ProfileMenu from './ProfileMenu'
import { signOut } from 'next-auth/react'
import Button from './Button'

const Navbar = async () => {
  const session = await getCurrentUser()

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={115}
            height={43}
            alt='Flexibble'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}> {link.text}</Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link
              href='/create-project'
            >
                <Button title='Share work' />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar