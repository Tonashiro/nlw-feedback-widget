import { useState } from "react";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";
import { Success } from "../Success";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  const [screenshotSuccess, setScreenshotSuccess] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    setScreenshotSuccess(false);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    setTimeout(() => {
      setScreenshotSuccess(true);
    }, 800);

    setTimeout(() => {
      setIsTakingScreenshot(false);
      onScreenshotTook(base64image);
    }, 2500);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end bg-lightMode-bg text-lightMode-text dark:text-zinc-200 dark:hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 dark:bg-zinc-800 rounded-md border-transparent bg-lightMode-bg text-lightMode-text dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? (
        screenshotSuccess ? (
          <Success />
        ) : (
          <Loading />
        )
      ) : (
        <Camera className="w-6 h-6" />
      )}
    </button>
  );
}
