import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <p>Not Found</p>
      <p>Sorry the page you are looking for is not available.</p>
      <Link href={"/"}>Return to home page</Link>
    </>
  );
};

export default NotFound;
