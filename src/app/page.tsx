import Image from "next/image";
import ThemeProvider from "@/app/components/Context/Theme";
import Processing from "@/app/components/Processing/Processing";

export default function Home() {
  return (
    <ThemeProvider>
      <Processing />
    </ThemeProvider>
  );
}
