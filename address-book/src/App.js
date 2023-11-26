import { useEffect, useState } from "react";

const initialUsersList = [
    {
        id: "12345",
        name: "Shahril Mad Shah",
        phone: "0166981034",
        address: "No 57 Jalan TP 5 Taman Putra",
        city: "Puchong",
        postal: "47100",
        state: "Selangor",
    },
    {
        id: "12346",
        name: "Rukiah binti Sahak",
        phone: "0169771242",
        address: "No 12 Jalan Anggerik 13 Taman Puchong Perdana",
        city: "Puchong",
        postal: "47100",
        state: "Selangor",
    },
    {
        id: "12347",
        name: "Rozaimi bin Mansur",
        phone: "0122344567",
        address: "No 4 Jalan Dahlia 80D Taman Segar",
        city: "Bandar Seri Serdang",
        postal: "43300",
        state: "Selangor",
    },
    {
        id: "12348",
        name: "Siti Nurhaliza Taruddin",
        phone: "0197878987",
        address: "No 80 Jalan Orang Kaya 123 Taman Orang Orang Kaya",
        city: "Bangsar",
        postal: "56998",
        state: "Kuala Lumpur",
    },
];

const emptyUser = {
    id: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    state: "",
};

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [usersList, setUsersList] = useState(initialUsersList);

    const handleSelectedUser = (user) => {
        setSelectedUser(user);
    };

    const handleSaveUser = (user) => {
        if (user.id) {
            setUsersList((prevList) => [
                ...prevList.filter((u) => u.id === user.id),
                user,
            ]);
        }
    };

    const handleDeleteUser = (id) => {
        setUsersList((prev) => prev.filter((user) => user.id !== id));
		handleSelectedUser(emptyUser);
    };

    return (
        <div>
            <h3>Address Book</h3>

            <div className="main">
                {usersList.length > 0 && (
                    <UsersList
                        usersList={usersList}
                        onSelectedUser={handleSelectedUser}
                        selectedUser={selectedUser}
                        onDeleteUser={handleDeleteUser}
                    />
                )}

                <AddressDetails
                    selectedUser={selectedUser}
                    onHandleSaveUser={handleSaveUser}
                />
            </div>
        </div>
    );
}

function UsersList({ usersList, onSelectedUser, selectedUser, onDeleteUser }) {
    return (
        <div className="sidebar">
            <ul className="users">
                {usersList &&
                    usersList.map((user) => (
                        <User
                            user={user}
                            key={user.id}
                            onSelectedUser={onSelectedUser}
                            selectedUser={selectedUser}
                            onDeleteUser={onDeleteUser}
                        />
                    ))}
            </ul>
        </div>
    );
}

function User({ user, onSelectedUser, selectedUser, onDeleteUser }) {
    return (
        <li
            className={`user ${selectedUser?.id === user.id ? "selected" : ""}`}
            onClick={() => onSelectedUser(user)}
        >
            <p>{user.name}</p>
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </li>
    );
}

function AddressDetails({ selectedUser, onHandleSaveUser }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postal, setPostal] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setPhone(selectedUser.phone);
            setAddress(selectedUser.address);
            setCity(selectedUser.city);
            setPostal(selectedUser.postal);
            setState(selectedUser.state);
        }
    }, [selectedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();

        //* validate input
        if (!name || !phone || !address || !city || !postal || !state) {
            return;
        }

        const user = {
            id: selectedUser ? selectedUser.id : crypto.randomUUID(),
            name: name,
            phone: phone,
            address: address,
            city: city,
            postal: postal,
            state: state,
        };

        onHandleSaveUser(user);
    };

    return (
        <form className="address-details" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>Phone Number:</label>
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <label>Address:</label>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <label>City:</label>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <label>Postal:</label>
            <input
                type="text"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
            />
            <label>State:</label>
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <button>Save</button>
        </form>
    );
}

export default App;
