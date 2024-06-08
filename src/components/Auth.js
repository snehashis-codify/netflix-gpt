import { Box, Button, Tabs, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Auth() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [tabsValue, setTabsValue] = useState("sign-up");
  const [togglePassword, setTogglePassword] = useState(false);
  function handleChangeTabsValue(value) {
    setTabsValue(value);
    reset();
  }
  function handleAuthSubmit(data) {
    console.log(data);
  }
  function handleTogglePassword() {
    setTogglePassword((prev) => !prev);
  }
  return (
    <div className="flex">
      <div className="w-2/4 ">
        <img
          src={require("../assets/netflix-background.jpg")}
          alt="netflix_background_img"
          className="h-screen object-cover object-center"
        />
      </div>

      <div className="bg-black h-screen w-2/4 flex flex-col items-center m-auto justify-center">
        <div>
          <img
            src={require("../assets/netflix_short_logo.png")}
            className="h-[100px] w-[100px]"
            alt="netflix_short_logo"
          />
        </div>

        <Tabs.Root
          className="!w-[350px]"
          value={tabsValue}
          onValueChange={(value) => handleChangeTabsValue(value)}
        >
          <Tabs.List
            className="!flex !items-center !justify-center"
            color="red"
          >
            <Tabs.Trigger
              value="sign-up"
              className="!text-white !text-base hover:cursor-pointer"
            >
              Signup
            </Tabs.Trigger>
            <Tabs.Trigger
              value="login"
              className="!text-white !text-base hover:cursor-pointer"
            >
              Signin
            </Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value={tabsValue}>
              <form
                className="flex flex-col gap-y-9"
                onSubmit={handleSubmit(handleAuthSubmit)}
                noValidate
              >
                <div className="flex flex-col gap-y-3">
                  {tabsValue === "sign-up" && (
                    <div>
                      <TextField.Root
                        type="text"
                        {...register("name", {
                          required: {
                            value: tabsValue === "sign-up",
                            message: "Name is required",
                          },
                        })}
                        placeholder="Full Name"
                        className="!w-full !min-h-[50px] !bg-gray-200"
                      />
                      {errors.name && (
                        <Text
                          as="p"
                          weight="medium"
                          className="!text-errorText !text-sm !mt-1"
                        >
                          {errors.name.message}
                        </Text>
                      )}
                    </div>
                  )}
                  <div>
                    <TextField.Root
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email id is required",
                        },
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                          message: "Email id is invalid",
                        },
                      })}
                      placeholder="Email Address"
                      className="!w-full !min-h-[50px] !bg-gray-200"
                    />
                    {errors.email && (
                      <Text
                        as="p"
                        weight="medium"
                        className="!text-errorText !text-sm !mt-1"
                      >
                        {errors.email.message}
                      </Text>
                    )}
                  </div>
                  <div>
                    <TextField.Root
                      type={!togglePassword ? "password" : "text"}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        pattern: {
                          value:
                            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,8}$/,
                          message:
                            "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 6-8 characters long.",
                        },
                      })}
                      autoComplete="off"
                      className="!w-full !min-h-[50px] !bg-gray-200"
                      placeholder="Password"
                    >
                      <TextField.Slot
                        side="right"
                        className="hover:cursor-pointer"
                        onClick={handleTogglePassword}
                      >
                        {!togglePassword ? (
                          <FaEyeSlash height="20" width="20" />
                        ) : (
                          <FaEye height="20" width="20" />
                        )}
                      </TextField.Slot>
                    </TextField.Root>
                    {errors.password && (
                      <Text
                        as="p"
                        weight="medium"
                        className="!text-errorText !text-sm !mt-1"
                      >
                        {errors.password.message}
                      </Text>
                    )}
                  </div>
                </div>

                <footer className="w-full">
                  <Button
                    type="submit"
                    className="!w-full !rounded-lg !bg-buttonBackground !text-base !h-[40px] hover:cursor-pointer hover:opacity-75 !mb-2"
                  >
                    {tabsValue === "sign-up" ? "Sign Up" : "Sign In"}
                  </Button>
                  <Text
                    as="p"
                    weight="medium"
                    className="!text-gray-400 !text-base"
                  >
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
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Auth;
