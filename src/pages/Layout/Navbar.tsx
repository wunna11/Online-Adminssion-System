import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Disclosure
        as="nav"
        className="backdrop-blur bg-white-100/30 sticky top-0 border-b border-gray-300 z-50"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}{" "}
                    width={36}
                    height={36}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      src="/img/logo.png"
                      className="block h-8 w-auto"
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block md:mt-3 lg:mt-0 sm:mt-2 2xl:mt-0">
                    <div className="flex space-x-4">
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 group cursor-pointer">
                    {/* <h1 className="text-primary">Hello</h1> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2"></div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </>
  );
}
