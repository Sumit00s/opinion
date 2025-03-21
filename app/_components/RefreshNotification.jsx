"use client";

import { RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function RefreshNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 4000); // Hide after 5 sec
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    show && (
      <div className="fixed flex gap-2 bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-full text-black px-4 py-2 shadow-lg">
       <RefreshCcw className="text-blue-800"/> Refresh if needed.
      </div>
    )
  );
}
