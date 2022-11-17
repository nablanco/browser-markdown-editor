In Browser Markdown Editor - Tasks

Outstanding Issues:

- Build Theme context for Dark Mode
- Build Navbar
  - Build Sidebar
    - Needs to push Home component to side when active
- Build Home
  - Build TextEditor (Left) and Preview (Right) windows.
- Figure out how the hell to convert markdown to html
- Figure out how to CRUD markdown files from LocalStorage

1. Set up project (feature/setup)

- Install create-reacte-app
- Remove unnecessary files and dependencies
- Install dependencies
  - ESlint
  - React Route
  - Styled Components
  - add prettier config file
- Move assets to src folder
  - Organize asset data in assets_data file. Import images to pass to components.
- Create main component folders and files, create basic component for each.
  - Navbar
    - Sidebar as sub-component
  - Home
    - TextEditorWindow
    - PreviewWindow
- Add GlobalStyles to index.js to pass basic styling.
  - Pass margin/padding 0px along with color variables.

2. Theme context (feature/themes)

- Create theme context to enable dark mode theme
  - Create theme.styled.js file for light and dark theme objects. This will supply theme context with styles.
    - Add basic light and dark theme for testing
  - Wrap App contents with ThemeProvider.
    - Temporarily set theme={light} and switch to dark to test functionlity. (Passed)

3. Navbar (feature/setup)

- Create navbar layout and style
  - Import assets from asset folder
  - Ignore functionaly of buttons for now
- Create sidebar layout and style
  - Import assets from asset folder
  - Ignore functionaly of buttons for now
- Bring in sidebar button functionality
