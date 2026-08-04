import type { InfoScreen } from "../../Types";

export default function Header({ title }: InfoScreen) {
  return (
    <header className="flex w-full items-center justify-between py-6">
      <h1 className="flex-1 text-center text-3xl font-semibold">{title}</h1>
    </header>
  );
}
