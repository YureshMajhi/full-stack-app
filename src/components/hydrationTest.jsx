"use client";

import React, { useEffect, useState } from "react";

const HydrationTest = () => {
  const a = Math.random();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return <div>{isClient && a}</div>;
};

export default HydrationTest;
