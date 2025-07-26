import ThemeProvider from "@/app/context/Theme";
import Processing from "@/app/processing/Processing";
import SelectPlayers from "./view/SelectPlayers/SelectPlayers";

export default function Home() {
  return (
    <ThemeProvider>
      <Processing />
      <SelectPlayers />
    </ThemeProvider>
  );
}
