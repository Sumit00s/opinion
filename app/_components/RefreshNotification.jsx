"use client";

import { useEffect, useState } from "react";

export default function RefreshNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 5000); // Hide after 5 sec
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    show && (
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg">
        New opinions might be available! Refresh if needed.
      </div>
    )
  );
}
