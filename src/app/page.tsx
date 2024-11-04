import { JAMSR_UI_GITHUB_URL, JAMSR_UI_URL } from "@/config";
import { Button, Link, Typography } from "@jamsr-ui/react";
import { GithubIcon } from "./icons";

export default function Home() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="grow flex justify-center flex-col items-center gap-4">
        <Typography
          as="p"
          variant="h1"
          className="max-w-screen-sm font-medium text-center text-balance"
        >
          Make{" "}
          <Typography
            as="span"
            variant="h2"
            className="italic"
            gradient="yellow"
          >
            Stunning
          </Typography>{" "}
          websites Effortlessly with JamsrUI
        </Typography>
        <Typography as="p" variant="body1">
          A Beautiful, Fast, and Modern Next.js UI Library for Everyone
        </Typography>
        <div className="flex gap-3">
          <Button
            as="a"
            href={JAMSR_UI_URL}
            target="_blank"
            color="primary"
            isRounded
          >
            Documentation
          </Button>
          <Button
            variant="outlined"
            isRounded
            startContent={<GithubIcon size={20} />}
            as="a"
            href={JAMSR_UI_GITHUB_URL}
            target="_blank"
          >
            GitHub
          </Button>
        </div>
        <div className="mt-8 rounded-full border-divider border-2 py-2 px-4">
          Get started by editing{" "}
          <span className="bg-primary-100 rounded-md p-1">app/page.tsx</span>
        </div>
      </div>
      <div>
        Powered by{" "}
        <Link target="_blank" href={JAMSR_UI_URL}>
          Jamsr UI
        </Link>
      </div>
    </section>
  );
}
