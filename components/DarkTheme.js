function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* Dark Theme */
        :root {
          --background-color: rgba(32, 31, 31, 0.956);
          --link-color: rgb(255, 196, 0);
          --text-color: rgb(233, 232, 232);
        }
      `}
    </style>
  );
}

export default DarkTheme;
