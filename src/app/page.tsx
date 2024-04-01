import Button from "@/components/btn";
import { checkIfCookieIsSet, checkIfUserIsLoggedInOrNot } from "./actions";

export default async function Home() {
  const sessionId = await checkIfCookieIsSet();
  const noSessionAvailable: any = "No Session ID";
  console.log(sessionId, "inside home page");
  await checkIfUserIsLoggedInOrNot();

  const rb = [
    {
      title: "Millennials and GenZ in a retirement home…",
      link: "https://www.reddit.com/r/weirddalle/comments/1b2r8de/millennials_and_genz_in_a_retirement_home/",
    },
    {
      title: "Millennials and GenZ in a retirement home…",
      link: "https://www.reddit.com/r/weirddalle/comments/1b2r8de/millennials_and_genz_in_a_retirement_home/",
    },
    {
      title: "Millennials and GenZ in a retirement home…",
      link: "https://www.reddit.com/r/weirddalle/comments/1b2r8de/millennials_and_genz_in_a_retirement_home/",
    },
    {
      title: "Millennials and GenZ in a retirement home…",
      link: "https://www.reddit.com/r/weirddalle/comments/1b2r8de/millennials_and_genz_in_a_retirement_home/",
    },
    {
      title: "Millennials and GenZ in a retirement home…",
      link: "https://www.reddit.com/r/weirddalle/comments/1b2r8de/millennials_and_genz_in_a_retirement_home/",
    },
  ];

  return (
    <main className="flex flex-col justify-between p-24">
      <div>
        <div className="flex justify-between">
          <div>
            {sessionId != undefined ? sessionId.value : noSessionAvailable}
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-4xl font-mono font-semibold mb-8 underline underline-offset-8">
          Reddit bookmarks
        </div>
        {rb.map((v, i) => {
          return (
            <ul className="mb-4" key={i}>
              <a target="_blank" href={v.link}>
                {v.title}
              </a>
            </ul>
          );
        })}
      </div>
    </main>
  );
}
