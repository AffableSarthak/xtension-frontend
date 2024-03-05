"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function loginToXtension(presState: any, queryData: any) {
  const userName = queryData.get("userName");
  const passKey = queryData.get("passKey");

  // API call to xTension server
  const loginFormData = new FormData();
  loginFormData.append("userName", userName);
  loginFormData.append("passKey", passKey);

  try {
    const res = await fetch("http://localhost:6969/login", {
      method: "POST",
      body: loginFormData,
      mode: "cors",
      credentials: "include",
    });
    if (res.status === 400) {
      return {
        toast: {
          message: "Username or password incorrect",
          type: "ERROR",
        },
      };
    }

    const [name, value] = res.headers
      .getSetCookie()[0]
      .split(";")[0]
      .split("=");

    console.log(name, value);
    cookies().set({
      name: name,
      value: value,
      httpOnly: true,
      path: "/",
      maxAge: 86400,
    });

    if (res.status === 200) {
      return {
        redirectPath: "/",
        toast: {
          message: "Login successful",
          type: "SUCCESS",
        },
      };
    }
  } catch (err: unknown | any) {
    return {
      toast: {
        message: "Something unknow occured",
        type: "ERROR",
      },
    };
  }
}

export async function checkIfCookieIsSet() {
  const cookieStore = cookies();

  const sessionID = cookieStore.get("session_id");
  console.log(sessionID);

  return sessionID;
}

export async function checkIfUserIsLoggedInOrNot() {
  const cookieStore = cookies();
  const sessionID = cookieStore.get("session_id");
  console.log(sessionID, "Inside server");
  if (sessionID?.value.length == 0 || sessionID == undefined) {
    redirect("/login");
  }
}

export async function deleteCookie(data: string) {
  cookies().delete(data);
}
