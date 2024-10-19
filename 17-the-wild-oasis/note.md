# steps
1. run npm create vite@4
2. run npm install
3. copy paste 2 lines of rules in .eslinrc.cjs file
4. delete unnecessary files and clean up app and main files 
5. bring the starter files into src folder

6. we will use styled components, so run npm install styled-components
7. install vscode extension styled components if not installed yet
8. in App.jsx
   - create H1 styled component
   - create StyledApp styled component to replace main div in App component to style App component
8. create GlobalStyles.js in styles folder
   - create const GlobalStyles = createGlobalStyles``
   - place all the styles code in index.css in GlobalStyles
   - import in App.jsx and put it as sibling to StyledApp to apply all the styles in GlobalStyles in App.jsx and it's children
   - create styled component for Button in Button.jsx and import it in App to display
     - style the button using css variable
	 - add hover to the button
   - create styled component for Input in Input.jsx and import it in App to display
     - style the input using css variable
9. create heading style component, so it can be reused for different heading style, bring the H1 code, change the name to Heading and import in back in App
   - send a prop, as="h1" in the Heading
   - in Heading.jsx, accept the prop like below:
       ${(props) =>
        props.as === "h1" &&
        css`
            font-size: 3rem;
            font-weight: 600;
        `}
	- because it use template literal, we can put javascript code 
	- put the css keyword before the first backtick to add syntax highlighting
	- try create for h2 and h3, the rest of the code, check the video

## 332

1. create a Row styled components with a div element
2. display is flex
3. accept a props called type, horizontal and vertical
4. the code, check github
5. set the default props with type vertical, so if this component is used without providing the props, the vertical styles will be used
6. return default
7. in App.jsx, use the Row style component, wrap it around the first part with horizontal type and also wrap the second part with vertical type
8. and then wrap the whole thing with another row with vertical type
9. time to adjust the Button sytled component
10. leave Button style only with the basic styles, border, border-radius and box-shadow
11. accept props.size and props.variation, check the github for code
12. create default props, variations: primary and size: medium
13. in App.jsx, for check in button, variation=primary and size=medium
14. for check out button, variation=secondary and size small

## 333
1. time to create the routing
2. in App.jsx, delete everything, then rfc
3. as usual, BrowserRouter->Routes->Route
4. create the route for all the pages
5. bring the GlobalStyles

## 334
1. create AppLayout component in ui and wrap all routes in App.jsx except login and pagenotfound
2. create Header and Sidebar components in ui and import them in AppLayout
3. arrange => Header, Sidebar, and Outlet wrapped in main
4. time to start styling
5. in Header, create styled component StyledHeader, style it (refer github for code) and replace the div in Header
6. in Sidebar, create Styled component StyledSidebar, style it (refer github for code) and replace the div in Sidebar
7. in AppLayout, create Main styled component, style it (refer github for code) and repace the main element in AppLayout
8. create StyledAppLayout styled component to replace the div in AppLayout, style it (refer github for code)
9. add grid-row: 1 / -1 in Sidebar

## 335
1. in Sidebar, import and put Logo and MainNav components
2. move the images from data/image folder to public folder so the logo appears
3. in MainNav, change div to nav
4. use NavList styled component as the ul for navigation menu and add a few li for the list of menu
5. in the Link styled component, instead of using 'a' html element, use NavLink as it will prevent page reload upon clicking : styled(NavLink)
6. change the name from Link to StyledNavLink
7. in below li, add StyledNavLink styled component for dashboard, bookings, cabins, users and settings
8. import react-icons and go to react icons page, go to Heroicons 2, search for HiOutlineHome icon for the dashboard
9. add respective icons for the rest of the menu
10. in sidebar, in the StyledSidebar styled component, set the display to flex, flex-direction to column and add some gap(3.2rem) so there's some gap between the logo and the navigation menu



