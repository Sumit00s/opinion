"use client";

import { useState, useEffect } from "react";

export default function AdminAuthWrapper({ children }) {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const password = prompt("Enter Admin Password:");
        if (password !== "adminbro123") { // Change this to your desired password
            alert("Incorrect password! Access denied.");
            setAuthenticated(false);
        } else {
            setAuthenticated(true);
        }
    }, []);

    if (!authenticated) {
        return null; // Block rendering if not authenticated
    }

    return <>{children}</>;
}
