import { Button, Text, TextField } from "@radix-ui/themes";
import React from "react";

function Login({ handleChangeTabsValue, tabsValue }) {
  return (
    <div>
      <form className="flex flex-col gap-y-9">
        <div className="flex flex-col gap-y-3">
          {tabsValue === "sign-up" && (
            <div>
              <TextField.Root
                type="text"
                placeholder="Full Name"
                className="!w-full !min-h-[50px] !bg-gray-200"
              />
            </div>
          )}
          <div>
            <TextField.Root
              type="email"
              placeholder="Email Id"
              className="!w-full !min-h-[50px] !bg-gray-200"
            />
          </div>
          <div>
            <TextField.Root
              type="password"
              autoComplete="off"
              className="!w-full !min-h-[50px] !bg-gray-200"
              placeholder="Password"
            />
          </div>
        </div>

        <footer className="w-full">
          <Button
            type="submit"
            className="!w-full !rounded-lg !bg-buttonBackground !text-base !h-[40px] hover:cursor-pointer hover:opacity-75 !mb-2"
          >
            {tabsValue === "sign-up" ? "Sign Up" : "Sign In"}
          </Button>
          <Text as="p" weight="medium" className="!text-gray-400 !text-base">
            {tabsValue === "sign-up"
              ? "Already registered? "
              : "New to Netflix? "}
            <Text
              as="span"
              className="!text-white hover:underline hover:cursor-pointer"
              onClick={() => {
                handleChangeTabsValue(
                  tabsValue === "sign-up" ? "login" : "sign-up"
                );
              }}
            >
              {tabsValue === "sign-up" ? "Sign in now" : "Sign up now"}
            </Text>
          </Text>
        </footer>
      </form>
    </div>
  );
}

export default Login;
