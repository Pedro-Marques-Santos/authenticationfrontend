"use client";

import { signInWithGooglePopup } from "@/utils/firebase.utils";

export function Login() {
  async function loginWithGoogle() {
    try {
      const response = await signInWithGooglePopup();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      type="submit"
      style={{
        width: "300px",
        height: "80px",
        cursor: "pointer",
        background: "yellow",
        fontSize: "19px",
      }}
      onClick={loginWithGoogle}
    >
      GOOGLE
    </button>
  );
}
