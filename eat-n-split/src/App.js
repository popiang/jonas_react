import { useState } from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function Button({ children, onHandleClick }) {
    return (
        <button className="button" onClick={onHandleClick}>
            {children}
        </button>
    );
}

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleShowAddFriend = () => {
        setShowAddFriend((prev) => !prev);
    };

    const handleAddFriend = (friend) => {
        setFriends((prev) => [...prev, friend]);
        setShowAddFriend(false);
    };

    const handleSelection = (friend) => {
        setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    };

    const handleSplitBill = (value) => {
        setFriends((prev) =>
            prev.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );

		setSelectedFriend(null);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelection}
                    selectedFriend={selectedFriend}
                />

                {showAddFriend && (
                    <FormAddFriend onHandleAddFriend={handleAddFriend} />
                )}

                <Button onHandleClick={handleShowAddFriend}>
                    {showAddFriend ? "Close" : "Add friend"}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}

function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            <Button onHandleClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
}

function FormAddFriend({ onHandleAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !image) {
            return;
        }

        const id = crypto.randomUUID();

        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onHandleAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    };

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>👫 Friend's name</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>🎆 Image URL</label>
            <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />

            <Button>Add</Button>
        </form>
    );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    const paidByFriend = bill ? bill - paidByUser : "";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bill || !paidByUser) {
            return;
        }

        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    };

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="text"
                onChange={(e) => setBill(Number(e.target.value))}
                value={bill}
            />

            <label>🧍‍♂️ Your expense</label>
            <input
                type="text"
                onChange={(e) =>
                    setPaidByUser(
                        Number(e.target.value) > bill
                            ? paidByUser
                            : Number(e.target.value)
                    )
                }
                value={paidByUser}
            />

            <label>👫 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={paidByFriend} />

            <label>Who is paying the bill</label>
            <select
                onChange={(e) => setWhoIsPaying(e.target.value)}
                value={whoIsPaying}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Add</Button>
        </form>
    );
}
