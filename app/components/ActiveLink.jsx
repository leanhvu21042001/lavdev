import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ActiveLinkDesktop = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={classNames(
        pathname === href
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "rounded-md px-3 py-2 text-md font-medium h-fit"
      )}
      aria-current={pathname === href ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export const ActiveLinkMobile = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Disclosure.Button
      as="a"
      href={href}
      className={classNames(
        pathname === href
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "block rounded-md px-3 py-2 text-base font-medium"
      )}
      aria-current={pathname ? "page" : undefined}
    >
      {children}
    </Disclosure.Button>
  );
};
