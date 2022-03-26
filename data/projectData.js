import ProjSchema from "./projectSchema";

export const PROJECT_DATA = [
  new ProjSchema(
    "Ten Takeaways",
    "/projects/ten-takeaways.png",
    "A web application used to store summaries and takeaways from books I read. It is meant to share interesting facts I took from a given narrative. This project utilizes a React front end with a Node backend connecting to a PostgresSql server.",
    "https://github.com/stevenarellano/book-summaries-client",
    "https://book-summaries.vercel.app/ ",
    "",
    ["React", "Nodejs", "Postgress Sql", "ChakraUI"]
  ),
  new ProjSchema(
    "Speed Typer",
    "/projects/personal-project-typing.png",
    "A web application designed with 14 lessons to help individuals increase typing speed. This application contains 14 different lessons, all with varying difficulty. It utilized event handlers to ensure valid inputs are entered, and, consequently, uses a clock to time the user.",
    "https://github.com/stevenarellano/speed-typing",
    "https://stevenarellano.github.io/speed-typing/",
    "",
    ["React", "Vanilla CSS"]
  ),
  new ProjSchema(
    "File Hoster",
    "/projects/file-hoster.png",
    "A web application designed to host varying files and web apps that I have created. It utilzies a postgresql backend to host hold the data download link.",
    "https://github.com/stevenarellano/file-hoster-client",
    "https://file-hoster-client.vercel.app/",
    "",
    ["React", "Vanilla CSS", "PostgreSQL", "Nodejs"]
  ),
];
