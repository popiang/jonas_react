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
