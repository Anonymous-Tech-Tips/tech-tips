export function openGameSandbox(realUrl: string) {
  // Open about:blank first to hide referrer, then redirect to actual URL
  // This bypasses X-Frame-Options restrictions since we're not using iframes
  const win = window.open("about:blank", "_blank");
  if (!win) return;

  // Write a full HTML page with an iframe to the game
  win.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Loading...</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0a0a0a; overflow: hidden; }
    iframe { width: 100vw; height: 100vh; border: none; }
  </style>
</head>
<body>
  <iframe src="${realUrl}" allowfullscreen></iframe>
</body>
</html>
  `);
  win.document.close();
}
