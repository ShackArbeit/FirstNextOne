"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  //  toogleDropdown 是用來設定行動版的點擊開關
  const [toggleDropdown, setToggleDropdown] = useState(false);
  // provider 是用來設定是否有登入狀態
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/Taiwan.svg"
          alt="logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <p className="logo_text">Just Share  </p>
      </Link>
      {/*  Desktop  Navigation */}
      <div className='sm:flex hidden'>
        {session?.user?(
          <div className="flex gap-3 md:gap-5">
            <Link href='/create-prompt' className='black_btn'>
              Beitrag Erstellen
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
             Abmelden
            </button>
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ):(<>
               {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Anmelden
                </button>
              ))}
            </>)}
      </div>
        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
        {session?.user? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mein Profil
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Beitrag Erstellen
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Abmelden
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Anmelden
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
