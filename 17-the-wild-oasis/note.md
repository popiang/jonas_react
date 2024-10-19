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