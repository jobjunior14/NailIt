import { useState } from "react";

//check if the email is valid or not
export function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}
