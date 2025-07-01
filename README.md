# Personal Portfolio

This is my personal portfolio website, built with lume.

## Getting Started

### Prerequisites

- [Deno](https://deno.com/manual@v1.x/getting_started/installation) installed on your machine.

### Running Locally

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/vwh/web-portfolio.git
    cd web-portfolio
    ```

2.  **Start the development server:**
    This command will start the Lume server with live reloading.

    ```sh
    deno task serve
    ```

    The site will be available at `http://localhost:3000`.

3.  **Build for production:**
    This command will build the static files and place them in the `_site` directory.
    ```sh
    deno task build
    ```

## Deployment

This site is automatically deployed to [Deno Deploy](https://deno.com/deploy) on every push to the `main` branch.
