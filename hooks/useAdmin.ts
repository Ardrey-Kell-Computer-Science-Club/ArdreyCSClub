import React from "react";
import { AdminContext } from "@/components/admin/AdminProvider";

export function useAdmin() {
	const ctx = React.useContext(AdminContext);
	if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
	return ctx;
}
