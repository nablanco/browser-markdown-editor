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

  - General thoughts:
    - Focus on using the basic React Context API and hooks, instead of using Styled Components ThemeProvider. While ThemeProvider is very useful when using Styled Components, it is more important to master the tools of React.
  - Create themes.js.
    - Add basic light and dark themes for testing.
  - Create ThemeContext.js
    - Serves as the repository for theme context related logic.
      - Contains :
        - createContext to access React context API
        - ThemeContextWrapper which is a component used to wrap all relevant lower order components. It is added in the index, within the <React.StrictMode>.
          - useState to manage theme state.
          - useEffect (1) to set current theme to local storage on theme change.
          - useEffect (2) to set theme to the theme held in local storage (if it exists).
          - handleThemeChange to handle.. theme... change....
  - useContext hook.
    - Now with context passed to the entire app, it can be accessed using the useContext hook in the specific components that need it. Since both theme and handleThemeChange are passed in context, these are destructered as needed. handleThemeChange is obviously only needed for the ThemeSelection component which contains the theme switch.
  - Fill out light/dark themes using Figma file

3. Navbar (feature/navigation)

- Create navbar layout and style
  - Import assets from asset folder
  - Ignore functionaly of buttons for now
- Create sidebar layout and style
  - Import assets from asset folder
  - Ignore functionaly of buttons for now
- Bring in sidebar button functionality
