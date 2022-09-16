import { React, Fragment } from "react"
import Logo from "../images/Logo.PNG"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {


    return (
        <div className="border-2 justify-between flex items-center rounded-lg w-full h-20 bg-green-500 -z-10">
            <Link to={"/home"} className="h-[95%] rounded-lg">
                <img src={Logo} alt="La Reserva" className="h-[95%] rounded-lg" />
            </Link>
            <ul className="flex justify-between px-[20%]">
                <Link to={"/home"}>
                    <li className="ml-3 flex py-5 text-2xl w-full justify-center rounded-lg px-4 font-mono shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ">
                        Home
                    </li>
                </Link>
                <li className="ml-3 flex py-5 text-2xl w-full justify-center rounded-lg px-4 font-mono shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ">
                    Contacto
                </li>
                <Menu as="div" className="ml-3 relative inline-block text-xl font-mono mr-5 py-3">
                    <div>
                        <Menu.Button className="flex py-2 text-2xl w-full justify-center rounded-lg  px-4 font-mono shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            Torneos
                            <ChevronDownIcon className="-mr-1 ml-5 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            FUTBOL 11
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            FUTBOL 7
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            FEMENINO
                                        </a>
                                    )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full px-4 py-2 text-left text-sm'
                                                )}
                                            >

                                            </button>
                                        )}
                                    </Menu.Item>
                                </form>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </ul>
            <ul className=" flex mr-[3%]">
                <img src="" alt="IMGS" className="mr-4 py-1" />
                <li className="text-2xl font-mono">User1210</li>
            </ul>
        </div>
    )
}