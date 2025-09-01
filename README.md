> [!WARNING]
> you can use https://github.com/nulab/backlog-power-ups

# Backlog Theme Icon Changer

A browser extension that dynamically changes the Backlog favicon to match the color of your current theme. This helps you quickly identify your Backlog tabs when you have multiple tabs open.

## Installation

As this extension is not published on the Chrome Web Store, you can load it manually in a Chromium-based browser (like Chrome, Edge, or Brave).

1.  **Clone or download the repository:**
    ```bash
    git clone https://github.com/katayama8000/backlog-theme-icon-changer.git
    cd backlog-theme-icon-changer
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Build the extension:**
    ```bash
    yarn build
    ```
    This will create a `dist/content.js` file.

4.  **Load the extension in your browser:**
    -   Open your browser's extension management page (e.g., `chrome://extensions` or `edge://extensions`).
    -   Enable "Developer mode".
    -   Click "Load unpacked".
    -   Select the root directory of this project (`/path/to/backlog-theme-icon-changer`).

The extension should now be active. Navigate to your Backlog space, and you'll see the favicon change as you switch themes.

## For Nulabers

This extension includes a feature that modifies the page title for specific Nulab development environments.

-   If the hostname is `nulab.localhost`, the title will be prefixed with `[ローカル環境] `.
-   If the hostname is `nulab.dev`, the title will be prefixed with `[開発環境] `.

This helps to distinguish between different development environments at a glance.

## License

This project is licensed under the MIT License.
