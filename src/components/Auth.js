import { Box, Tabs } from "@radix-ui/themes";
import React, { useState } from "react";
import Login from "./Login";

function Auth() {
  const [tabsValue, setTabsValue] = useState("sign-up");
  function handleChangeTabsValue(value) {
    setTabsValue(value);
  }
  return (
    <div className="flex">
      <div className="w-2/4 ">
        <img
          src={require("../assets/netflix-background.jpg")}
          alt=""
          className="h-screen object-cover object-center"
        />
      </div>

      <div className="bg-black h-screen w-2/4 flex flex-col items-center m-auto justify-center">
        <div>
          <img
            src="https://pngimg.com/uploads/netflix/netflix_PNG10.png"
            className="h-[100px] w-[100px]"
            alt=""
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
            <Tabs.Trigger value="sign-up" className="!text-white !text-base">
              Signup
            </Tabs.Trigger>
            <Tabs.Trigger value="login" className="!text-white !text-base">
              Login
            </Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="sign-up">
              <Login
                handleChangeTabsValue={handleChangeTabsValue}
                tabsValue={tabsValue}
              />
            </Tabs.Content>

            <Tabs.Content value="login">
              <Login
                handleChangeTabsValue={handleChangeTabsValue}
                tabsValue={tabsValue}
              />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Auth;
