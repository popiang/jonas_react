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

## section 26 supabase
1. create account on supabase.com
2. create a project in supabase
3. create bookings, cabins, guests and settings table
4. btw, bookings table has foreign keys
5. insert some dummy data into the table
6. add security policy to all the tables, enable read access for all users
7. then go to APIDocs and choose any table to test, go to read all rows, reveal the apikey, then copy the curl code and test in the terminal
8. npm install --save @supabase/supabase-js
9. then in services folder, create supabase.js file, copy paste the code from supabase site to the file 
10. get the apikey from supabase project settings => api, then put it in the supabase.js file in the code
11. then export default supabase
12. then create apiCabins.js file in services folder, create getCabins async function
13. go to APIDocs => cabins => read all rows, copy the code and paste it in the getCabins function
14. clean up the code a bit, add checking on error, then if all ok, return the data
15. try it in Cabins page, useEffect, call getCabins async function, handle the promise with a then, console log the data
16. in supabase, go to storage and creat 2 buckets, avatars & cabin-images
17. upload cabin images in the data folder to cabin-images bucket in supabase

## 347
1. npm install @tanstack/react-query@4
2. in App.jsx, create queryClient = new QueryClient()
3. set some options, check the code in github
4. wrap the whole App component with <QueryClientProvider>
5. set the client to queryClient
6. npm install @tanstack/reack-query-devtools@4
7. set as sibling in QueryClientProvider the <ReactQueryDevtools />
8. set the initialOpen={false}

## 349
1. clear up Cabins.jsx
2. in CabinTable.jsx, rfc and return CabinTable
3. import it in Cabins.jsx, put it in different Row, wrap them in fragment
4. the TEST change to Filter / Sort
5. in CabinTable, use useQuery
   - queryKey: ['cabin']
   - queryFn: getCabins
6. assign to a variable, and console log to check
7. destructure the result of the useQuery to isLoading, data: cabins and error
8. add checking if isLoading, display Spinner
9. use styled component Table, wrap TableHeader, set the headers (check github for code)
10. set the role for Table and TableHeader
11. loop cabins, for every cabin call CabinRow, send the prop cabin
12. in CabinRow.jsx, rfc
13. accept the cabin prop and destructure it to name, maxCapacity, regularPrice, discount and image
14. use the styled component TableRow, set the role to row
15. display the image using Img styled component
16. display cabin name using Cabin
17. display maxCapacity using just div
18. display regularPrice using Price, use formatCurrency
    - npm install date-fns
19. display discount using Discount, use formatCurrency
20. add another row of data for cabin in supabase
21. change the staleTime:0

## 350
1. time to delete
2. in apiCabins.js, create and export async function deleteCabin that receives an id as a parameter
3. go to supabase cabin apiDoc, find delete row and copy the code, paste it in the function
4. as usual, check for error
5. return the data
===> create new policy for cabin to allow delete to all user
6. in CabinRow.jsx, in the destructure add id: cabinId
7. to delete, we use useMutation that receive functions for mutationFn and onSuccess
8. assign to mutationFn the deleteCabin function
9. onSuccess assign a function to invalidate the query
10.to invalidate the query, we need queryClient
11. to get queryClient in CabinRow, we use useQueryClient() and assign it to queryClient const
12. call queryClient.invalidateQueries and send the queryKey:['cabins']
13. useMutation return isLoading and a function called mutate
14. call mutate function in onClick of the delete button and send the cabinId as the parameter
15. change isLoading: isDeleting in the destructure, and use it in the button for disabled attribute
16. useMutation also has onError in the parameter, which accept a function, so simply alert the error using alert()
17. also alert onSuccess
18. when there's an error, react query will retry automatically

## 351
1. change the alert to a better notification message
2. we will use toast
3. npm install react-hot-toast
4. configure the Toaster in App.jsx (refer git for code)
5. in CabinRow.jsx, for error use toast.error() and for success use toast.success()
6. now we improve the layout in the Cabin page a little bit
7. in AppLayout, create a Container styled component with a div element and style it (refer git for the code)
8. wrap Outlet with the Container component

## 352
1. npm install react-hook-form@7
2. in Cabins.jsx, add showForm state
3. add Button component Add New Cabin and onClick toggle showForm
4. showForm && CreateCabinForm
5. in CreateCabinForm, use useForm(), distructure to register & handleSubmit
6. in the form, in every Input, add {...register("the Input ID")}
7. in the Form, in onSubmit call the handleSubmit function from the useForm()
8. we create another onSubmit function that receives data and we console log it
9. in the called handleSubmit function, send the onSubmit function that we just created

## 353
1. in apiCabin.js create and export async function createCabin that receive newCabin parameter
2. in supabase apidoc, find insert row, copy the code and paste it into the function
3. in the insert part, in the array simply put the newCabin
4. as usual, check for error, and if ok return the data
5. the go to supabase authenticaion, policies, create policy for cabin to allow access for create and update
6. in CreateCabinForm, call useMutation again, get the mutate and isLoading
7. mutationFn: call the createCabin function and send the new cabin
8. onSuccess: call toast for success message, call queryClient to invalidates queries with queryKey ['cabins'], and then call reset function that we get from destructure of useForm(), btw call useQueryClient to get queryClient
9. onError: call function to toast an error message
10. call mutate in onSubmit function
11. change isLoading to isCreating, and use it in the Button disabled attribute

## 354
1. fix the AppLayout to make the header and sidebar to fix, in the AppLayout.jsx, in Main styled component, just add overflow:scroll
2. in the Input component, in the useForm register function, after the name of the input element, simply add curly braces to add validation
3. add required: "error message"
4. can also add validation for min and max, set the value and the error message
5. we can also add our won custom validation function, for example in the discount input because we need to check that the discount value must be less or equal the Price
6. to create the custom validation function: 
validate: *the function*. the function will receive a value, and that value is the value of the discount
7. but how to get the price? we use getValues from useForm, getValues().regularPrice
8. refer github for the code
9. if vaidation return false, instead of calling onSubmit, handleSubmit will call another function call onError
10. we create the onError function, instead of received form data, it will receive errors from the form
11. how to get the errors from the form so we can display properly? use formState from useForm, and then destructure to get errors
12. since we have the errors from the form, we can display it accordingly. after name Input, we do optional chaining to check errors?.name?.message, if available, display the message inside Error component
13. the form is a bit repeatitive, so we create FormRow component, bring all the styles there, receave label, error and children as parameters
14. since the name of the component is the same with the Styled FormRow, we need to change the styled component name to StyledFormRow
15. refer github for the code
16. we also need to make the htmlFor part to receive dynamic value, because it receive the id of the Input
17. so since Input is the children, we can do children.props.id
18. refactor the CreateCabinForm to use the new FormRow
19. add disabled upon isCreating

# 355
1. in CreateCabinForm, we register the FileInput similar to TextArea
2. but we don't have to set the type to file, because we can set the attribute in the styled component => styled.input.attrs({styled: "file"})
3. in onSubmit function, we need to add the image into the data, although the image is already in the data, but it's an a list. so we first spread the data({...data}), then we add image: data.image.at(0) to it => {...data, image: data.image.at(0)}
4. now in apiCabin.js, we first create the imageName, it must be unique, so we append with Math.random(), then we replace all slashes to empty string(refer code in github)
5. the we create the imagePath
   - we import supabaseUrl from supabase.js
   - then we create the imagePath
   - `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
6. then add the imagePath in the newCabin when creating the cabin
   - spread the newCabin, then add the image
   - { ...newCabin, image: imagePath }
7. next we upload the image
   - according to documentation, first we need to add policies for the bucket to allow the upload, do it in the supabase
   - after that, find the code in the documentation to upload file to the bucket
   - adjust the code to our case (refer github)
   - check for error, if got storageError, delete the cabin because we don't want the cabin to be created when there's an error when uploading the image
   - use the code from deleteCabin function, just adjust the id
   - console.log the error and then throw new Error()
8. go ahead and test it

