import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";

export const EditorComponent = () => {
  const [themeData, setThemeData] = useState(null);

  useEffect(() => {
    async function loadTheme() {
      const response = await fetch('/DarkTheme.json'); // ✅ Fetching from public
      const data = await response.json();              // ✅ Important: add ()
      setThemeData(data);
    }
    loadTheme();
  }, []);

  function handleEditorTheme(editor, monaco) {
    if (themeData) {
      monaco.editor.defineTheme('my-dark-theme', themeData);
      monaco.editor.setTheme('my-dark-theme');
    }
  }

  return (
    <>
      {themeData && (
        <Editor
          height="80vh"
          width="100%"
          defaultLanguage="javascript"
          defaultValue="// Welcome to the playground"
          onMount={handleEditorTheme}
          options={{
            fontSize: 18,
            fontFamily: "monospace",
            minimap: { enabled: false },
          }}
        />
      )}
    </>
  );
};
