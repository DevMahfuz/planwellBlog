"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Splitting the current pathname into an array of parts
  const pathParts = pathname.split("/").filter((part) => part !== "");

  return (
    <nav aria-label="breadcrumbs">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home/ Planwell Blog</Link>
        </li>
        {pathParts?.map((part, index) => {
          const isLast = index === pathParts.length - 1;
          const fullPath = `/${pathParts.slice(0, index + 1).join("/")}`;
          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
            >
              {isLast ? (
                // If it's the last part, just render the text
                part
              ) : (
                // Otherwise, render a link
                <Link href={fullPath}>{part}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
