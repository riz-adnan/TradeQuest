"use client";
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

// Importing context
import { useAccount } from '@/context/AccountContext'

// Importing image
import LogoImage from '@/public/images/Logo.png'

export default function Header() {
  const { jwtToken, accountId, setAccountId, setJwtToken } = useAccount()

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="rounded-full" src={LogoImage} width={100} height={100} alt="Testimonial 02" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              {accountId !== null && <><li>
                <Link
                  href='/trade'
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Trade
                </Link>
              </li>
                <li>
                  <Link
                    href='/wallet'
                    className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Wallet
                  </Link>
                </li>
              </>}
              <li>
                <Link
                  href='/predictions'
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Our Predictions
                </Link>
              </li>
              {accountId !== null && <li>
                <Link
                  href='/:profileId'
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Profile
                </Link>
              </li>}
              {accountId === null && <>
                <li>
                  <Link
                    href="/signin"
                    className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                    Sign up
                  </Link>
                </li>
              </>}
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
