"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/hooks/useAdmin";
export default function AdminModal() {
  const { isAdmin, setIsAdmin } = useAdmin();
  const [open, setOpen] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");

  function tryCode() {
    if (code.trim() === "987321") {
      setIsAdmin(true);
      setOpen(false);
      setError("");
    } else {
      setError("Incorrect code");
    }
  }

  function signOut() {
    setIsAdmin(false);
  }

  return (
    <div>
      {!isAdmin ? (
        <>
          <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
            Admin
          </Button>

          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
              <div className="mx-4 w-full max-w-sm rounded bg-zinc-900 p-6">
                <h3 className="mb-2 text-lg font-semibold">Admin access</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Enter the admin code to unlock admin features.
                </p>

                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="mb-2 w-full rounded border border-zinc-700 bg-transparent p-2 text-white"
                  placeholder="Enter code"
                />

                {error && (
                  <div className="mb-2 text-sm text-red-400">{error}</div>
                )}

                <div className="flex gap-2">
                  <Button onClick={tryCode}>Unlock</Button>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm text-green-400">Admin</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={signOut}
            className="text-sm"
          >
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
