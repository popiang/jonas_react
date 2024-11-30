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
5. the go to supabase authentication, policies, create policy for cabin to allow access for create and update
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

# 356
1. in CabinRow.jsx, add an edit button before delete button
2. create showForm state
3. set onClick for the button to toggle showForm boolean values
4. below TableRow, if showForm, display CreateCabinForm
5. now we need to send the cabin data to CreateCabinForm, simply send as prop as cabinToEdit
6. then we accept the prop in CreateCabinForm, but set default as empty object
7. destructure cabinToEdit, get the id as editId and then spread the rest as editValues
8. create a variable to flag wheather the form is creating new or editing, isEditSession = Boolean(editId)
9. now we need to send the cabin data to the form, in useForm({}), set the defaultValues: isEditSession ? editValues : {}
10. use isEditSession flag in the button at the bottom to display either Edit cabin or Create new cabin
11. now we need to update code in createCabin in apiCabin.js so we will use the same function for both creating and updating
12. first, in the insert code, appaend .select().single() so the the create code will return data of the created cabin
13. rename createCabin function in apiCabin.js to createEditCabin
14. also rename the function calls in CreateCabinForm.jsx
15. in createEditCabin, also accept 'id' as the second parameter, to diffrentiate between a create and an edit call
16. use if to check the id, before create the cabin, only create when there's no id settings
    - refactor a bit, follow the code in github
17. now to update
    - make sure the policy for cabin update is already created
	- go to apiDocs and get the code for update
	- if id is available, use the update code, almost similar with insert
18. create a const variable hasImagePath by checking newCabin.image startsWith supabaseUrl
    - use hasImagePath when defining imagePath, to choose between newCabin.image path for existing image or create the new imagePath when user upload a new image
19. now in CreateCabinForm, duplicate the useMutation code for the editing
    - change isLoading to isCreating and isEditing respectively
	- change mutate to createCabin and editCabin respectively
	- create a const variable isWorking for isCreating || isEditing and replace isLoading with it through out the code
	- for editCabin, add the id in the parameter
	- change the toast.success message respectively
	- in onSubmit function, create a const variable image, check the data.image typeof, if equal to string then simply populate data.image to image, if not then populate data.image[0]
	- then replace the image[0] in the createCabin with just this const image variable
20. now to choose between createCabin or editCabin in onSubmit function, we use isEditSession value in if else, is true then call editCabin: editCabin({ newCabinData: { ...data, image }, id: editId }), and if false, simple call createCabin
21. now go ahead and test and see if there's any bug

# 357
1. some housekeeping, in CabinRow.jsx, display discount if there's any discount, and if there isn't any discount, simply display dash (refer github for code)
2. create useDeleteCabin.js in cabins folder
3. bring deleteCabin code from CabinRow into this file
4. wrap in exported function useDeleteCabin, and bring in all the imports
5. rename the deleteCabin from apiCabins to deleteCabinApi and rename it also in the useMutation
6. rename mutate to deleteCabin
7. return {isDeleting, deleteCabin}
8. in CabinRow.jsx, in CabinRow component, remove the delete code, import useDeleteCabin and populate isDeleting and deleteCabin
9. replace mutate with deleteCabin through out the code
10. test delete
11. do the same for creating cabin, create useCreateCabin.js in cabins folder, paste the create cabin code, wrap it in exported useCreateCabin function, get all the required imports, remove the reset, return isCreating & createCabin
12. in CreateCabinForm, remove the create cabin code, import useCreateCabin.js, get the isCreating & createCabin function
13. since in useCreateCabin we cannot call reset(), in CreateCabinForm, when we call createCabin in onSubmit, set add second parameter, a options object, onSuccess: (data)=>reset()
14. test it
15. add the second parameter for editCabin as well
16. then create the useEditCabin.js, put the code as usual, import in CreateCabinForm, replace the old editCabin code
17. test it
18. finally, in CabinTable, cut the useQuery code to get the cabins, create useCabins.js in cabins folder, paste the code in exported useCabins function, add all the required imports, return isLoading & cabins
19. call useCabins in CabinTable.jsx and get isLoading & cabins, then everything will be back to normal
20. test it

# 358
1. let's make a button to duplicate a cabin based on the existing on
2. in CabinRow.jsx, create another button before edit button, for the duplicate
3. to save space, change the title of the button to icon, HiSquare2Stack for duplicate, HiPencil for edit and HiTrash for delete
4. then import useCreateCabin() and get the isCreating and createCabin function
5. create handleDuplicate function and assign to on duplicate button onClick event
6. in handleDuplicate function, call createCabin function, assign an object of the cabin will all of the properties, except for the name, we append it with `Copy of ${name}`
7. in apiCabins.js, we make some adjustment
   - if hasImagePath has value, in upload image part simply return the data so the whole uploading image part will be skipped
8. disable the duplicate button using isCreating value 
9. test it out

# 359
1. time for the settings page
2. first, let's create RLS policy to update settings table
3. then, create useSettings.js hook file in settings folder where we put the query code
4. create useSettings function and export it, call useQuery which takes queryKey and queryFn, queryKey = ['settings'], queryFn is getSettings function which is already available in apiSettings.js file
5. useQuery will return isLoading, error and data: settings
6. return these 3 values
7. in UpdateSettingsForm, call useSettings() and get isLoading and settings
8. destructure settings to individual value, minBookingLength, maxBookingLength, maxGuestPerBooking, breakfastPrice
9. in all fields in the form set the defaultValue respectively
10. then in Settings.jsx file, use <Row> and place UpdateSettingsForm after the heading
11. before the component return in UpdateSettingsForm, put an if statement to check isLoading and return Spinner if true

# 360
1. let's update the settings
2. we duplicatethe useEditCabin.js in cabins folder and rename it to useUpdateSetting.js
3. refactor the code for settings
4. the mutationFn is the function from apiSettings called updateSetting, but we rename it to updateSettingsApi because we want to call the mutate function as updateSetting
5. call useUpdateSetting in UpdateSettingsForm.jsx and get the isUpdating and updateSetting function
6. to update the settings, we'll use onBlur event on inputs
7. onBlur, call handleUpdate, send e and field name as parameters, example handleUpdate(e, "minBookingLength")
8. in handleUpdate function, get the sent parameters
9. get the value for target, const {value} = e.target
10. if no value, simple return
11. if there's value, call udpateSetting and send the name of the field to update and the value: updateSetting({[field]: value})
12. use isUpdating to disbaled input is isUpdating is true
13. do the same for the rest of the input fields
14. test it out

# 367
1. time to create modal for the form to create cabin
2. Modal is already created by jonas, rfc in the file, accept children prop, and return the components -> Overlay -> StyledModal -> Button, div -> children
   - for the button, set the icon HiXMark (close button)
3. in cabins folder, create AddCabin.jsx 
4. in this file is where we will call the modal
5. create a state called isOpenModal to control the visibility of the modal
6. use the Button component for the add cabin button
7. set the onClick to toggle the isOpenModal value
8. below the button, if isOpenModal is true, display the Modal
9. set the children of the Modal the CreateCabinForm component
10. send a prop call onClose to the Modal and set it to the function call () => setIsOpenModal(false)
11. accept the onClose prop by the Modal, and set it as a function for onclick event for the close button
12. also send the same prop to CreateCabinForm: onCloseModal={() => setIsOpenModal(false)}
13. accept it in CreateCabinForm component, call it in onClick event for the Cancel button, however use optional chaining operator, just in case the CreateCabinForm is called elsewhere where the onCloseModal prop is not provided
14. also called onCloseModal with the optional chaining operator in onSubmit function on the onSuccess part after reset()
15. do the same on onSuccess in editCabin
16. in the CreateCabinForm, now we need to send type prop to the Form, to let it know if the Form is being displayed in a modal or not. by using the onCloseModal prop received by CreateCabinForm, we can tell that
   - type={onCloseModal ? "modal" : "regular"}
17. now in Form styled component, jonas already handle the prop, but just make a little adjustment
   - explicitly compare the type to "regular" instead of !== "modal"
   - set the Form.defaultProps type to "regular"
18. test it out
19. now we want to use createPortal in the Modal
   - in Modal component function, return createPortal(xxx, document.body)
   - what will happen is, when check in browser inpect, the modal is now directly in the html body element
   - but in react tree, it still remain the same
   - the reason using portal is reusibility, to avoid ccs conflict if for example the Modal component is used by other developer in other places that can cause css conflict

# 368
1. let's change the modal to use Compound component
2. the idea is, the component using the Modal should not be held responsible to create the state to control weather the Modal should be displayed or not, the Modal itself must know and handle it
3. first comment out the existing code in AddCabin for future reference
4. then create a new AddCabin -> refer github for the code
5. in the Modal.Open, we send a prop open and set it to the name of modal window that we want to open, it this case is open="cabin-form"
6. this is because technically we want to allow multiple Modal windows can be sent to the Modal component
7. the Modal.Window also accept a prop called name which in this case is name="cabin-form", so it knows which modal to open
8. basically, model.open part is for the button, and model.window part is for the actually modal to display
9. in Modal.jsx, we follow the standard steps. first we create the content, ModalContext
10. then we create the parent component, which is the Modal function component
   - it accepts children as props
   - create a state openName set default as empty string, this is the name of the modal to be opened
   - create the function close : simply set function call to setOpenName(""), this is to close the modal, by setting the name of modal to open to empty string
   - the create the function opebn : simply set it to the setOpenName state function
   - return the ModalContext.Provider with values = openName, close, open, and also pass the children
11. then create the child components, first the function Open
   - accept props children and open (this is not a function, but actually the name of the modal to be opened), no idea why it's called open, thus it is rename to openWindowName
   - useContext the ModalContext and get the function open
   - return a cloneElement(children, {onClick: () => open(openWindowName)})
   - this is because we can't send the open function from the context to the Button sent as children to Modal.Open
   - so we use cloneElement, clone the children which in this case happen to be the Button component
   - then we set the onClick, as shown in the code
   - onClick: () => open(openWindowName)
   - cloneElement must be used with care
12. then create the second child component, the function Window component
   - accepts the props children & name
   - name is the name of the modal to display
   - useContext the ModalContext and get openName and close
   - now check if name from the props and openName from the context are the same, if they are not, simply return null, meaning do nothing
   - if they are, return the createProtal
13. try it out
14. now let's activate the second modal in the Modal component, set the open and name to "table", the button title to Show table, and the children for modal.window is CabinTable
15. try it out

# 369
1. now we want to detect a click outside the modal to close to modal
2. in Modal.jsx, in Window component function, define ref = useRef();
3. use ref={ref} in StyledModal the get the reference of the modal
4. add useEffect
   - create handleClick function
   - accept e
   - check if ref.current -> modal is exist and check !ref.current.contains(e.target) -> checking if the click (in e.target) is outside of the modal(ref.current)
   - if true, call close();
5. add the click event listener to the document, send the handleclick function, and also the true value
6. add the cleanup function code at the end of the useEffect
   - return () => document.removeEventListener('click', handleClick)
7. test it out
8. now let's move this functionality to a function hook
9. in hooks folder, create a file useOutsideClick.js
10. create and export function useOutsideClick
11. bring all the code from Modal to here, manage the imports
12. this function must accept 2 parameters, handler and listenCapturing which is by default is true
13. replace the close function to handler function, and replace the true value in the event listener to listenCapturing
14. return the ref
15. in Modal, delete the old code, call the useOutsideClick, send the argument close function, receive ref from the call
16. now the function should work again 

# 370
1. first, let's clean up previous files that we worked with
2. remove the modal for the table, coz it was only for demo purpose
3. then wrap the remaining modal in AddCabin with a div so the button doesn't occupy the whole width
4. now, let's use modal window for editing and deleting cabin
5. in CabinRow.jsx, wrap both edit and delete button with Modal
6. then let's add the child components
7. wrap the first button with Modal.Open
8. as we did previously, after Modal.Open, we place Modal.Window
9. set "edit" for open and name props for Modal.Open & Modal.Window
10. in Modal.Window, we place the component that we want to display in the modal, that is CreateCabinForm
   - clean the remaining code
   - remove the onClick handler in the edit button
11. test it out
12. then we do the same for delete button, we wrap the button in Modal.Open
13. then we create Modal.Window below it and we add ConfirmDelete component which is already provided by Jonas
14. provide the value for all the props for ConfirmDelete, resourceName="cabins", disabled={isDeleting}, onConfirm{() => deleteCabin(cabinId)}
   - again, clean the remaining code
15. now go to ConfirmDelete.jsx to make all the buttons work
16. since now the ConfirmDelete component is the child component of Modal component, it automatically has the onCloseModal, use it on the onClick of the cancel button 
17. place the onConfirm prop on the onClick of the delete button
18. all the functionality should work now

# 371
1. first, let's fix the bug from previous chapter, add "delete" for open & name in Modal.Open and Modal.Window for the delete button
2. in Table.jsx, create Table component function and then export default it
3. in CabinTable.jsx, delete the Table styled component, and at the bottom link the Table to the Table component we just created above
4. we can also remove the role in the Table
5. then send a prop into the Table called columns and place the grid-template-columns value into it
6. change the table header to Table.Header
7. now in CabinRow.jsx, change the TableRow to Table.Row, and we can comment out the TableRow styled component
8. in Table, as usual, we create TableContext using createContext
9. the parent component is the Table
   - accept props, columns and children
   - return the context provider, with value = columns
   - wrap the StyledTable with role=table
   - the StyledTable wrap the children
10. create the children component
11. first, the Header, accept children, get the columns from TableContext and return StyledHeader with props role=row, columns=columns and also set as=header so it will be header html element, symantically more correct, and wrap the children
12. second, the Row, accept children, get the columns from TableContext and return StyledRow, with role=row, columns=columns and wrap the children
13. then the body
14. then assign the children to the parent
15. the cabin table should already work by now

# 372
1. for Table.Body, in CabinTable, we use self closing <Table.Body />
2. we send the data={cabins}
3. then we send the render the function to display the cabin (refer the code in github)
4. in Table, in Table.Body, we accept data and render
5. first check, if there's no data, simply return Empty component with simple message
6. then return StyledBody, wrapping the data.map(render)
7. it should work now

# 373
1. in Menus.jsx, rfc
2. we need to wrap the whole table so Menus can know which context menu is opened at a time
3. go to CabinTable and wrap Table with Menus
4. now in CabinRow.jsx, we create the menu
   - below modal, we create Menus.Menu
   - it contains Menus.Toggle
   - then it also contains Menu.List
     - this contains Menu.Button for duplicate, edit and delete
   - we give id={cabinId} for Toggle and List to connect them
5. in Menus.jsx, change the styled component StyledMenu to just Menu
6. now we create the children function components, Toggle({id}), List({id}) and Button({children})
7. add the children component to the parent component
8. new we creathe MenusContext using createContext
9. in the parent component, create openId state to keep track the menu to open
10. create close function to set the openId to empty string
11. create open function and just assign the setOpenId
12. now in Button function, return li element wrapping StyledButton component which wraps the children
13. for the Toggle component, get openId, close and open from MenusContext
14. return StyledToggle, wrapping HiEllipsisVertical icon
15. StyledToggle onclick is assigned with handleClick function
16. create the handleClick function:
	=> openId === '' || openId !== id ? open(id) : close()
17. for the List component, it will also accept children props
18. get the openId from MenusContext
19. if openIf !== id, return null
20. return createPortal
    - first argument for createPortal is StyledList wrapping children
	- StyledList accepts props position={{x:20, y:20}}
	- second argument is document.body
21. can test it, the context menu should at least appear now
22. now we want to calculate the location to put the context menu based on the click
23. in handleClick, we accept the e to get the size and position of the button
    - e.target.closes("button").getBoudingClientRect();
24. but we need to send the position to List component, so we lift the state up and create it in the parent component Menus
    - const [position, setPosition] = useState(null);
25. now we send position and setPosition to the Provider value
26. in Toggle component, accept setPosition from MenusContext and in handleClick function, set the position: 
    - setPosition({ x: window.innerWidth - rect.width - rect.x,
            y: rect.y + rect.height + 8})
	- the calculation has already been made by Jonas, but please try to understand it
27. in List component, accept position from MenusContext and set it to the position in the StyledList component
28. try it out now
29. now in CabinRow.jsx, send icon to the 3 buttons in Menus.List
    - eg: icon={<HiSquare2Stack />}
30. for duplicate button, we also send the handleDuplicate to the onClick
31. in Menus.jsx, in Button component, we accept icon and onClick
32. we get close function from MenusContext
33. then create handleClick function the call onClick conditionally, and after that call the close function
    - onClick?.();
34. in StyledButton, we wrap the children with span, and then put the icon before the span
35. then we set the onClick of the StyledButton with the handleClick function that we create above 
36. now we want to make that when user click outside of the context menu, it will close
37. we will use the useOutsideClick hook
38. call it in List component, set the close function as the argument, don't forget to get the close function from MenusContext, then assign the result of useOutsideClick to const ref
39. set the ref to StyledList component, ref={ref}
40. now it's time to make the edit and delete menu in the context menu works
41. first we delete the old duplicate button
42. then we merge the code from modal and list together, please refer github code because it's really confusing
43. finally it's completed, try it out

# 375
1. in this chapter, we will add filter buttons on the cabins table
2. first we create CabinTableOperations.jsx in cabins folder
3. here is where we'll place filter and sorting functionality/interactions
4. rfc in the page, then return TableOperations which already provided by jonas, wrapping Filter component which is also provided by Jonas
5. now in Filter component, rfc to return the component
6. return StyledFilter which already created by Jonas at the top, wrapping three FilterButton styled components for All, No Discount and With Discount
7. now bring CabinTableOperations into Cabins.jsx under the Heading
8. it should now be already visible
9. when we press the button, we want to update the URL state, so the updated URL is sharebale and bookmarkable, and also to make the table and filter components indipendent of each other
10. in Filter.jsx, we first create handleClick function to handle clicks from the 3 buttons
11. the function will receive  value upon clicking, which is "all", "no-discount" and "with-discount"
12. assign the funtion to onClick of all 3 buttons
13. then bring in useSearchParams(), which will return searchParams, setSearchParams
14. in the function, assign the params : searchParams.set("discount", value)
15. then set the params: setSearchParams(searchParams);
16. try clicking the buttons and the params should be available in the URL
17. next step is to read the state from URL in CabinTable.jsx
18. we use the useSearchParams hook, get the searchParams, and the get the filter: searchParams.get("discount")
19. we append the statement with || "all", because if the go to the page for the first time, the value will become null, when logically we want the value to be "all" so the table will display call cabins
20. next we create a let variable filteredCabins to hold the cabins that have been filteredCabins
21. simply use if statement to check the filterValue
    - all: simply assign the cabins
	- no-discount: cabins.filter(cabin=>cabin.discount===0)
	- with-discount: cabins.filter(cabin=>cabin.discount>0)
22. try it out, the filter should work now
23. now we want to make the Filter reusable
24. the Filter component should accept 2 props, filterField and options
25. set the searchParams.set(filterField, value)
26. in StyledFilter component, map the options and in each iteration display the FilterButton with handleClick argument set to option.value and the label of the button set to option.label
27. don't forget to set the key for the FilterButton
28. try it out, it should work now
29. now to finish, we also want to display with of the option being selected
30. we simply need to send the action prop to FilterButton because FilterButton styled component already has a logic to handle the active prop
31. first we need to get the current selected filter by using searchParams.get(filterField) || options.at(0).value, we append the safe guard in case to button is clicked yet
32. then in FilterButton, we add props active={currentFilter === option.value}, it will result to true when the option.value equals to the current selected button
33. test it out

# 376
1. first, in Filter.jsx, in FilterButton, we forgot to add disabled prop. so add it: disabled={currentFilter === option.value}, so now if the button is currently selected, we can't click it anymore
2. now, first we create SortBy.jsx file in ui because we want it to be reusable
3. rfc, then it should receive options as props, and return Select component which already created by jonas in ui folder, send the options value as props to the Select component
4. in Select.jsx, rfc at the bottom, it receives options and value as props
5. return StyleSelect styled component provided by jonas at the top of the page
6. it should receive value as props
7. it wraps options.map which return option html element, with option.value as value, option.label as label and option.value as the key
8. now we use the SortBy component in CabinTableOperations, put it after Filter component
9. we need to send options into this SortBy, refer github for code coz it's a bit lengthy
10. the select element should now be visible 
11. now we want to send type props to Select component because it's child component StyledSelect can receive type props to change some styling on the dropdown
12. new trick, if we have multiple props that we receive as parameters, and we want to pass it to the child component, we can do ...props, and then in the child component we simple send {...props}
13. this way, we don't have to explicitly assign the props to any variable
14. do the above in Select component
15. in SortBy.jsx, we send type="white" props in Select component
16. next we need to handle the onChange event on the select, so in SortBy, we create a function handleChange, we assign it to onChange as props in Select component
17. then in Select.jsx, we receive onChange as parameters, then send it to onChange event in the StyledSelect component
18. this way, we are making the Select component 100% reusable
19. next, in SortBy component, we use useSearchParams and get searchParams and setSearchParams
20. in handleChange function, set searchParamas.set("sortBy", e.target.value)
    - e.target.value is the value of the dropdown select
21. then call setSearchParams(searchParams)
22. try it out now and see the changes in the URL
23. now we get the current sortBy = searchParams.get("sortBy") || "", assign it as value props on Select component
24. this will retain selected sortBy in the dropdown even if we refresh the page
25. now to make the sorting works, in CabinRow.jsx, get the sortBy value using searchParams.get("sortBy") || "startDate-asc"
26. split sortBy by "-", and store in field and direction const variable
27. set the modifier by checking the direction, if asc then 1, if desc then -1
28. the we use the filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier)
    - we used field as then index in the sort because we have multiple sort type
	- we times the modifier because to make the sort ascending, the result of the substraction must be positive number, and to make it descending the result of the subtraction must be negative number. that's why we set the modifier 1 or -1 based on the direction asc or desc
29. the sorting should work by now, test it out

# 377
1. let's bring booking data to the application
2. in supabase, create a second guest, and then create another booking using the second guest
3. now, lets create getBookings in apiBookings.js to get all the bookings
   - write the query yourself
4. jonas already provided BookingTable.jsx in bookings folder, add it into Bookings.jsx, put it below the Row, wrap the with fragment <>
5. in the BookingTable component, if bookings is empty return the Empty component provided by jonas with resourceName set to "bookings"
   - change the Empty component a bit, change resource to resourceName
6. do the same in CabinTable, if cabins is empty return Empty component with resourceName set to "cabins"
7. now we need to connect the BookingTable with the bookings api
8. we will use react query
9. in bookings table, create useBookings.js
10. create useBookings function, export it
11. call useQuery, send an object with queryKey: ["bookings"], queryFn: getBookings
12. it will retuern {isLoading, data: bookings, error}
13. then return the {isLoading, error, bookings}
14. now in BookingTable, call useBookings and get bookings, isLoading
15. below it, if isLoading, return the Spinner
16. in the bookings table, we don't only want to get bookings data, but also the cabin and the guest related to the bookings
17. so in apiBookings.js, in getBookings, in the select() we add ("*, cabins(*), guests(*)")
18. but this will query the whole row of data for cabins and guests, when only need a few
19. so we adjust it: ("*, cabins(name), guests(fullName, email)")
20. we can also do the same for bookings table, so the final select: select("id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)")
21. activate back the Table.Body part and the bookings table should be displayed accordingly now
22. please study the code in BookingRow.jsx to understand how and why the table is displayed the way it is displayed

# 378
1. in this chapter, we simply gonna upload dummy data provided by jonas
2. the data is in data folder in three files, bookings, cabins and guests
3. there also a Uploader.jsx component file where the button to upload is placed
4. we simply need to bring the Uploader component to the Sidebar.jsx, put it below MainNav
5. now, the upload button should be visible in the sidebar
6. but before we can upload, we need to create policies for bookings and guests table
7. once done, then click Upload All
8. now the data should be visible in bookings table and cabins table

# 379
1. time to add filtering into bookings table
2. jonas already created BookingTableOperations.jsx component, similar concept with CabinTableOperations, with the Filter and SortBy components already in place
3. simply add it to Bookings component under the Heading
4. by now if we click the filter buttons, the URL should be changed accordingly
5. in Bookings filter, we will implement the logic differently compared to the one in Cabins filter, where this time the filteration will happen in the server. for Cabins, we get all the data from server, then we filter it before displaying it in the table
6. the best to do it is in the useBookings.js file because we can call useSearchParams
7. get searchParams, get("status"), store in filterValue
8. check if there's no filterValue or if filterValue is "all", if yes return null
9. if not, create an object {field: "status", value: filterValue} and assign it to filter
10. send this filter value to getBookings in queryFn
    - queryFn: () => getBookings({filter})
11. in apiBookings.js, in getBookings function, accept filter and sortBy parameters
12. amend the code: let query = supabase.from("bookings").....
13. then check if filter is not null, add the filter to the query
    - query.eq(filter.field, filter.value)
14. then: const {data, error} = await query
15. then in useBookings.js, in queryKey of the useQuery, we add filter after "bookings"
    - it works the same way like dependency array in useEffect, meaning if the filter value is changed, the useQuery will run again to fetch the data
	- so when we click different button, the filter changes, the useQuery will run again
16. try it out, it should work now
17. here, the react query will store the queried data into cache. so for example, if we have click the button checked-out, the data is retrieved, displayed and also stored in the cache, then we click the button Checked-in, the same thing happens, then if click back to button checked-out, the data will be retrieved from the cache
18. this improve user experience due to data will be displayed almost instantly
19. to make the getBookings function more dynamic, we can also send the method of the filter, for example either eq, gt, gte, lt, lte
20. in useBookings, in the filter object, we add the third entry, method: "eq"
21. in apiBookings, getBookings function, in the query, change the "eq" to [filter.method || "eq"]
22. this way, it has become more dynamic
23. the table filter still work as before

# 380
1. let's make the sorting function for bookings to work
2. in useBookings.js, we get the sortBy params using searchParams or set the default value to "startDate-asc"
3. assign it to a const variable called sortByRaw
4. then we split it by "-", assign it to : const [field, direction]
5. create an object with this value and assign it to sortBy
6. put sortBy in the queryFn and also in the queryKey
7. then in apiBookings, we accept the sortBy parameter in getBookings function
8. after the filter part, we check if the sortBy exist
9. if it does, then add the order to the query
   - query = query.order(sortBy.field, {ascending: sortBy.direction === "asc"})
10. the sort should work right now
12. react query cache will also kick in for both filter and sort

# 381
1. time to add pagination to the bookings table
2. jonas already provided a Pagination component
3. rfc in the component
4. return StyledPagination component provided by jonas, wrapping P component and Buttons component, both also provided by jonas
5. pagination receive a prop count, representing the total number of records to display
6. the idea is to send the parameters for pagination in the URL
7. so call useSearchParams to get searchParams and setSearchParams
8. check if page is not available in the url (!searchParams.get("page")), if it is not, assign 1 to currentPage, if available, get the "page" value and change it to type number using Number javascript function, then assign it to currentPage
9. then get the pageCount by using this formula:
   - pageCount = Math.ceil(count / PAGE_SIZE)
   - PAGE_SIZE is a const variable that we set at the moment to 10
10. in P component, we set the string to display:
    - Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
                <span>10</span> of <span>{count}</span> results
11. in Buttons component, we call PaginationButton component provided by jonas, 2 times, one for previous button, and one for next button
12. the first one, we call HiChevronLeft icon, after that a span wrapping the word Previous
13. the second one, we call HiChevronRight icon, after that a span wrapping the word Next
14. then we create 2 funcions, nextPage() and prevPage(), assign it to onClick of respection Pagination button
15. in nextPage(), we get the next page number like this:
    - next = currentPage === pageCount ? currentPage : currentPage + 1
	- it means, if the currentPage is already the same with the pageCount, meaning the currentPage is already at the last page, then the next remain the same page number
	- but if it is not, the next page number will get currentPage + 1, hence the next page
16. in prev(), we get the prev page number like this:
    - prev = currentPage === 1 ? currentPage : currentPage - 1
	- it means, if the currentPage is 1, it means this is the first page, so we cannot got lower any further, so it next page number remain no 1
	- if not, the prev page will be currentPage - 1
17. in prev PaginationButton, we set it to disabled when the currentPage === 1
18. in next PaginationButton, we set it to disabled when the currentPage === pageCount
19. now in BookingTable, we will use Table.Footer component for the pagination
20. below Table.Body, put the Table.Footer component, wrapping the Pagination component
21. sent the dummy data count={15} as the prop to Pagination
22. 
23. now if we try the buttons, it should be reflected in the URL
24. update the P component, change the 10 to {currentPage === pageCount ? count : currentPage * PAGE_SIZE}

# 382
1. time to make the pagination really works
2. in BookingTable.jsx, we need to send the count to the pagination
3. we will use supabase query to get the count
4. in getBookings in apiBookings.js, in the select part, add an object containing: {count: "exact"}
5. this will return a count of the records by the query, destructre in the await query to a count const variable
6. the the count in the return statement, along with the data, combine in an object
7. in useBookings, receive the count from useQuery:
   - data: {data: bookings, count} = {}
8. then add the count in the return object
9. in the BookingTable.jsx where we call useBookings, receive the count 
10. send the count as props in Pagination component
11. it should work now
12. next, to make the pagination reflects the displayed records in bookings table, in useBookings, get the page from URL using searchParams
    - page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))
	- default the page to 1 if the parameter is not available in the URL
	- put this code after the sort part
13. send it into the useQuery, in the queryFN in the getBookings, and also in the queryKey so the changes of the pagination parameter in the URL will trigger the query to run again
14. in getBookings, we receive the page parameter
15. after sort part, we check if page is available
16. if available we set the query range
    - query = query.range(from, to)
17. now we need to set the from and to
18. but first we need to get the const PAGE_SIZE, the one in the Pagination component
19. solution is, in utils folder, create a constant.js file and export the const
    - export const PAGE_SIZE=10;
20. import it in the Pagination component to replace in in file PAGE_SIZE declaration
21. also import PAGE_SIZE in apiBookings.js
22. now set the from and to:
	- const from = (page - 1) * PAGE_SIZE;
	- const to = from + PAGE_SIZE - 1;
23. the pagination should work now, give it a try
24. react query cache also kicks in

# 383
1. we want to implement prefeting of react query to improve user experience
2. if user is in page 1 of the pagination, react query will automatically fetch page 2, so when user click pagination to page 2, the result will appear immediately without experiancing loading time
3. first, in useBookings.js, we import queryClient hook
4. then after pagination part, we first get the pageCount
   - pageCount = Math.ceil(count / PAGE_SIZE);
5. the we check if page < pageCount, we call queryClient hook
   - the if is to make sure the prefetch is not happening when the last page has already been prefetched
6. queryClient.prefetchQuery({})
7. inside the object option, we add the same code with the useQuery, except that the page + 1
8. try it out, it should work already, click the react flower to see it
9. to do the other way around, copy paste the whole code
10. change the if to page > 1, to make sure prefetch is not happening for page 0
11. change page + 1 to page - 1
12. it should work now

# 384
1. now we want to add a context menu on the bookings table, and one of the menu is to see the details of the booking
2. since bookings table is wrapped with Menus, we can use Menus children component to build the menu
3. Menus wrapped Table -> Table wrapped Table.Body -> Table.Body wrapped BookingRow, and in BookingRow is where we'll and the Menus children component
4. in BookingRow.jsx, after Amount column, we add Menus children component
5. Menus.Menu -> Menus.Toggle, Menus.List -> Menus.Button
6. in Toggle and List we add id={bookingId} to link both of them together
7. in Menus.Button send props: icon={<HiEye />} and also onClick
8. when we click the menu, we want to navigate to booking details page, which we haven't created yet
9. in BookingRow, call useNavigate() and get navigate
10. at the onClick of the button, we set () => navigate(`/bookings/${bookingId}`)
11. the Menus.Button simply wrap a text "See details"
12. now we create a Booking.jsx file in pages folder, rfc, and just add some text
13. in App.jsx, we add the routing
    - <Route path="bookings/:bookingId" element={<Booking />} />
14. if we click the menu now, it should navigate to the page
15. next, we need to get the booking data from supabase
16. in apiBookings.js, jonas already prepared the getBooking function that received an id
17. now we need to create a custom hook to call the api, we create a useBooking.js file in bookings folder
18. in useBooking function, we call useQuery, send the queryKey "bookings" and queryFn () => getBooking()
19. it return isLoading, data: booking and error
20. we call useParams and get the bookingId from the URL, assign it to bookingId, then we send it to the getBooking() in the queryFn
21. we return isLoading, error, booking
22. in BookingDetail component, we call useBooking hook and get booking and isLoading
23. we check, if isLoading is true, return Spinner
24. destructure booking to the status and bookingId
25. replace the #X in the Heading to {bookingId}
26. the status is automatically used by the provided code
27. activate the BookingDataBox which accept the booking as a prop
28. now the booking detail page should already work

# 385
1. in this chapter we want to handle check in
2. first in BookingRow we add the button
   - after See details button, we add similiar button, copy paste
   - ichon HiArrowDownOnSquare
   - navigate to /checkin/${bookingId}
   - label "Check in"
3. now the menu should already be available
4. next we create Checkin.jsx page in pages, rfc, and return CheckinBooking component which already provided by jonas
   - comment out the BookingDataBox part as booking data not available yet
5. then in App.jsx, we add the routing for checkin
   - path booking/:bookingId
   - element Checkin 
6. now in CheckingBooking.jsx, we bring in the booking and isLoading using useBooking()
7. then we check, if isLoading is true, return the Spinner
8. now we can comment in the BookingDataBox coz the booking is now available
9. the checkin page should be visible now
10. the idea is, payment is received externally. the staff has to do the confirmation that the payment has been received in the system
11. first we use a Box component which is available in the same file
12. Box will wrap a Checkbox, which also has been provided by jonas in ui folder
13. to track the confirmation, we will use state, confirmPaid, setConfirmPaid
13. in the CheckBox, set the value={confirmPaid}, set the onChange to () => setConfirmPaid(!confirm), and id="confirm", and the label to I confirm the {guests.fullName} has paid the total amount
14. now the checkbox should be visible in the page
15. the confirmPaid is set false initially
16. then we use useEffect to set the confirmPaid based on the booking.isPaid
    - setConfirmPaid(booking?.isPaid ?? false)
17. then we set the Checkbox disabled attribute disabled={confirmPaid}
18. so if it is already paid, we cannot uncheck the checkbox
19. do the same on the checkin Button, disabled={!confirmPaid},
it's the reverse, the button can only be click when it is not paid yet
20. we need to fix a bug, in useBooking, we need to add bookingId in the queryKey
21. next, we will do the actual checkin, which technically will update the bookings table, setting the status to "checked-in" and isPaid to true
22. in check-in-out folder, we create useCheckin.js hook file
23. create and export useCheckin function
    - call useMutation which return mutate: checkin, and isLoading: isCheckingIn
	- send object option of mutationFn, onSuccess and onError (refer github for the code)
	- return checkin function and isCheckingIn
24. call useCheckin in CheckinBooking.jsx after moveBack declaration, get the checkin and isCheckingIn
25. in handleCheckin function, first check if !confirmPaid, simply return 
26. else, call checkin function and send in the bookindId as argument
27. use isCheckingIn in disabled attribute for Checkbox and check in Button
28. everything should be good and ready now, give it a test

# 386
1. in this chapter we want to add the optional breakfast checkbox and it's functionality
2. in CheckinBooking.jsx, first we add addBreakfast state to track the checkbox
3. then we call useSettings hook to get settings data
   - settings, isLoading: isLoadingSettings
4. we calculate the breakfast price:
   optionalBreakfastPrice = settings.breakfastPrice * numNights * numGuests
5. then before confirm paid checkbox, we add another Box component, wrapping Checkbox component with props:
   - checked={addBreakFast}
   - onChange={() => {
		setAddBreakfast((add) => !add);
        setConfirmPaid(false);
   	}}
   - id="breakfast
   - the setConfirmPaid(false) is because, if we add breakfast, there is additional payment to be made, so if originally user has paid for the booking, but when add breakfast, there's additional payment, so the checkbox for payment is got unchecked
6. for the Checkbox label, a bit lengthy, check github code
7. in handleCheckin function, we check, if there's addBreakfast, we send an object:
   {
	bookindId,
	breakfast: {
		hasBreakfast: true,
        extrasPrice: optionalBreakfastPrice,
    	totalPrice: totalPrice + optionalBreakfastPrice,
	}
   }
8. if there's no addBreakfast, simple send:
	{bookingId, breakfast: {}}
9. in useCheckin, we change the parameter of mutationFn to an object {bookingId, breakfast}, where breakfast is an object
10. in the updateBooking, after isPaid:true, we simple spread the breakfast object, ...breakfast, so all the fields to be updated will be sent to updateBooking function
11. the whole things should work now, give it a try

# 387
1. time to implement checking out functionality
2. copy paste useCheckin hook in check-in-out folder
3. change checkin to checkout through out the code, only need to send bookingId to mutationFn, and only need to update status: "checked-out"
4. in BookingRow.jsx, simply copy paste the checkin Menus.Button including the status checking
5. only display when status === checked-in
6. bring in the useCheckout() and the checkout function and isCheckingOut
7. in the Menus.Button, on the onClick just send the checkout function with bookingId
8. set disabled to isCheckingOut
9. change label to Check out
10. it should already work now, give it a try
11. remove the navigate to dashboard code because it's not really relevant
12. again, copy the whole button code, paste it in BookingDetails.jsx after checkin button
13. change Menus.Button to only Button
14. bring in all the necessary imports
15. try it out
16. let's fix a bug, where when we are at the page = 3, then we click a filter for example unconfirmed, an error occured because there are no 3 pages of unconfirmed data
17. the fix is, when we click any filter, we need to set the page to 1
18. in Filter.jsx, in the handleClick, after the first searchParams.set, 
check if searchParams.get("page") exist, and if it does, set it to 1, searchParams.set("page", 1)
19. the issue should be resolved now

# 388
1. let's implement deleting booking
2. first we creathe the hooking to delete booking 
   - in bookings folder, create useDeleteBooking.js
   - it will use deleteBooking function in apiBookings, already provided by jonas
   - return isDeleting and deleteBooking function
   - for the remaining of the code, refer github
3. then in BookingRow.jsx we wrap Menus.Menu with Modal because we want to have a confirmation modal when we click the delete menu
4. next after the checkout button, add Modal.Open wrapping Menus.Button
   - give icon=HiTrash to the button
   - label is "Delete"
5. then outside of Menus.List, we add Modal.Window, wrapping ConfirmDelete component
6. then link Modal.Open with Modal.Window, Modal.Open open="delete", Modal.Window name="delete"
7. for the ConfirmDelete
   - resourceName="bookings"
   - disabled={isDeleting}
   - onConfirm{() => deleteBooking(bookingId)}
8. the delete menu from the context menu should work now
9. then we want to bring the delete button into BookingDetails.jsx
10. copy paste the Modal.Open and Modal.Window for the delete functionality from BookingRow to BookingDetails.jsx, put it after the checkout button
11. change the Menus.Button to just Button, with variation props set to "danger" so the button will be red in color
12. bring in any required imports including useDeleteBooking hook
13. the delete button should work now, but there's a bug where the delete modal windows stays after deleting
14. in BookingDetail.jsx, in the deleteBooking function in ConfirmDelete component, after bookingId argument, we add an object of option
    - onSettled: () => navigate(-1)
15. this should solve the above issue

# 389
1. time to implement authentication for this project
2. Login.jsx is already exist, and if we type login in the url, it will go to the blank page
3. LoginForm.jsx is already provided by jonas, add it into Login.jsx and put it between LoginLayout
4. There's a bug, FormRowVertical does not exist in ui folder, refer to github and add it
5. above LoginForm, add Heading and Logo component in that order
   - for Heading, set as="h4" as props
   - go to Heading component, create a new logic for h4, copy paste the existing code, set font-size to 3rem, font-weight to 600, and text-align currentFilter
   - by now the login form should look good already
   - although i'm a bit confused, as normally h4 is supposed to be a bit smaller than h3
6. next in supabase, let's manually create a user, but before that, navigate to Authentication -> Provider, under Auth Providers list click on email, then uncheck confirm email and click save
7. then go to Authentication -> Users -> Add User -> create user
8. then go to Api Docs -> User Managements, go to Log In With Email/Password, copy the code provided by supabase
9. go back to vscode, create a service file called apiAuth.js in services folder
10. create a async function called login which accepts an object containing email and password
11. paste the code from supabase, import supabase, remove the hard coded data in signInWithPassword function
12. check if there's error, throw new Error(error.message)
13. if there's no error, simply return the data
14. let's give it a try to see if it works, in LoginForm, in handleSubmit function:
	- e.preventDefault
	- if no email or password, return
	- call login({email, password})
	- try to login and check the console log
15. then, delete the login function call in the code above, then hardcoded the email and password temporarily in useState in LoginForm, to ease the development
16. then we are gonna use react-query
    - create useLogin hook in authentication folder
	- create the useLogin function
	- call useMutation
	  - mutationFn: ({email, password}) => loginApi({email, password})
	    - loginApi is the login function from apiAuth, renamed
	  - onSuccess: user => console.log(user); navigate("/dashboard")
	    - import navigate
	  - onError: err => console.log(err); toast.error("message....")
	    - import toast
	- const {mutate: login, isLoading} = useMutation.....
17. return { login, isLoading }
18. now in LoginForm, call useLogin and get the login function and isLoading
19. use the login function in the handleSubmit function to send {email, password}
20. use the isLoading state in the inputs and button with disabled attribute
21. jonas already provided a SpinnerMini component, so in the button, add a condition, if !isLoading : "Login" ? <SpinnerMini />
22. the login form should work now, give it a try
23. remove the console.logs, and now try again with wrong email or password


# 390
1. time to implement authorization
2. in App.jsx, because all routes are within AppLayout components, so we simply need to protect AppLayout component, then automatically all children components will be protected as well
3. create ProtectedRoute.jsx in ui folder, accept a children prop then simply return it back
4. then in AppLayout, wrap the AppLayout with ProtectedRoute component
5. next, in apiAuth.js, we create a funciton getCurrentUser
   - await supabase.auth.getSession()
   - check if a session is exist, if not, simply return null
   - if exist, then call await supabase.auth.getUser()
   - get data & error from it
   - console.log the data
   - if there's an error, throw new Error(error.message);
   - return data?.user
6. next create a hook called useUser.js in authentication folder to handle getting the user
   - create and export userUser
   - call useQuery which return isLoading and data: user
   - queryKey: ['user']
   - queryFn: getCurrentUser
   return {isLoading, user}
7. in ProtectedRoute.jsx, call useUser hook and get user and isLoading
8. if isLoading true, return FullPage wrapping Spinner
   - create FullPage styled component, refer github for code
9. in useUser.js, in the return statement, we add isAuthenticated: user?.role === "authenticated"
10. in ProtectedRoute, we receive isAuthenticated from useUser()
11. the we call useEffect, before checking isLoading
    - check if !isAuthenticated && !isLoading, navigate to "/login"
	- import navigate
12. after the part checking isLoading, check if isAuthenticated, return children
13. to improve user experience, when user login, we manually save the user data to react query cache
    - in useLogin.js, import queryClient
    - in onSuccess, before navigate, set it:
	  - queryClient.setQueriesData(["user"], user)
    - so in useUser.js, the useQuery will not have to query the user again because the user data is already available in react query cache
	- thus, the loading in the main page after login should be a lot really quick or maybe not visible at all
14. a bug is discovered, the solution where after loggin in, the app still stays at the login form:
    - in useUser, the useQuery also return fetchStatus, get it and send in the return statement
15. in ProtectedRoute, accept the fetchStatus from useUser, then in the useEffect, in the if checking part add also the fetchStatus, this will fix the bug
16. next, when the user enter wrong username and password, we want to clear the login form when the toast message appear
    - in the LoginForm.jsx, in the handleSubmit, in the login function, we can add an object of options after the argument
	- {onSettled: () => {setEmail(""); setPassword("")}}
17. the login form is done, give it a try 

# 391
1. let's allow user to logout
2. first, let's create a Logout component in authentication folder
3. rfc, then simply return <ButtonIcon> wrapping <HiArrowRightOnRactangle />
4. then in apiAuth.js we create a logout function
   - it's an async function logout
   - call await supabase.auth.signOut()
   - return {error}
   - check if there's an error, throw new Error(error.message)
5. then in authentication folder, we create useLogout.js hook 
   - create and export useLogout function 
   - call useMutation
     - mutationFn: logoutApi(the logout function from apiAuth)
	 - onSucces:
	   - queryClient.removeQueries()
	     - import queryClient first
		 - this will remove all caches in react query
	   - navigate("/login", {replace: true})
	     - will navigate to login after logout
		 - replace to true will make sure, if user click back button on the browser after logout, they won't be able to go back into the app
		 * implement this in the ueLogin as well
		 - import the navigate first
	  - useMutation returns mutate:logout & isLoading
6. useLogout return {logout, isLoading}
7. then, in Logout.jsx, call useLogout and get logout function and isLoading
8. in ButtonIcon
   - disabled={isLoading}
   - onClick={logout}
9. check : !isLoading ? display icon : SpinnerMini
10. logout function is ready, try it out

# 392
1. this is a bug fix chapter
2. the bug is related to the one we found in chapter 390
3. the fix by jonas:
   - in useLogin.js, change the setQueriesData to setQueryData
   - in the setQueryData, change to user to user.user
4. done and done

# 393
1. let's make the signup form
2. signup form is already provided by jonas
3. import the SignupForm component into Users.jsx, put it below the heading, wrap between react fragments
4. in SignupForm, we call useForm() and get register and formState
5. then get the errors from formState: {errors} = formState
6. link all input field with the register from form hook
   - {...register("fullName", {required: "This field is required"})}
7. the form ui is ready now, give it a try

# 394
1. let's make the signup form functionality works
2. first, in apiAuth, create a signup function
   - accept {fullName, email, password}
   - await supabase.auth.signUp({email, password, options})
   - options: {data: {fullName, avatar: ""}}
   - return {data,error}
   - if there's an error, throw new Error
   - if not, return data
3. next, create useSignup hook in authentication folder
   - export function useSignup
   - call useMutation
     - mutationFn: signupApi(signup function from apiAuth)
	 - onSuccess: user => console.log(user); toast.success("messge")
   - return signup and isLoading
4. in SignupForm.jsx, call useSignup and get signup and isLoading
5. in onSubmit function, destructure the parameter : {fullName, email, password}
6. then in the onSubmit function call signup({fullname, email, password})
7. now in supabase, activate the confirm email checkbox
8. go to URL configuration
   - Site URL: http://localhost:5173/dashboard
   - Redirect URL: http://localhost:5173
9. next, go to temp-mail.org to get a working fake email for registration
10. use the email to create a new user
19. in supabase, the new user is in, but it's waiting for verification
20. go to temp-mail.org, a verify email is received from supabase, open it and click verify email
21. now the new user is already verified in supabase
