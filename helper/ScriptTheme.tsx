import { COOkIE_DATA_THEME } from "@/constants";

export default function ScriptTheme() {
  const codeToRunOnClient = `(function() {
      const match = document.cookie.match(/(^|;)\\s*${COOkIE_DATA_THEME}=(dark|light)/);
      const theme = match ? match[2] : "light";
      document.body.classList.add(theme); 
    })()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
}
