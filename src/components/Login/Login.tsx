import * as React from "react";
import Image from "next/image";
import Button from '../Button';
import { Input } from '../Form';

interface LoginFormProps {
  // Add any necessary props here
}

function LoginForm({}: LoginFormProps) {
  return (
    <div className="flex flex-col px-6 pt-6 pb-7 bg-white rounded-lg border border-solid shadow-2xl border-zinc-100 max-md:px-5 w-[520px]">
      <div className="self-center text-3xl font-semibold leading-10 text-zinc-900">
        Sign In
      </div>
      <div className="flex flex-col mt-5 max-md:max-w-full">
        <div className="flex flex-col text-base leading-5 whitespace-nowrap text-neutral-400 max-md:max-w-full gap-3">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />        
        </div>
        <div className="flex gap-5 justify-between mt-4 mb-5 w-full max-md:flex-wrap max-md:max-w-full">
            <label htmlFor="rememberme" className="flex items-center gap-2">
              <input type="checkbox" id="rememberme" className="shrink-0 w-5 h-5 bg-white rounded border border-solid border-stone-300" />
              <span className="leading-5 text-stone-500">Remember me</span>
            </label>
          <a className="text-sm leading-5 text-stone-500" href="#">
            Forget Password
          </a>
        </div>
      </div>
      <Button variant="fill" fullWidth>Login</Button>
      <div className="flex gap-1 self-center py-0.5 mt-5 text-sm leading-5">
        <div className="text-stone-500">Do not have account?</div>
        <a className="font-medium text-zinc-900" href="#">Register</a>
      </div>
    </div>
  );
}

export default LoginForm;