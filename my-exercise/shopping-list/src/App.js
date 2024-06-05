import { useState } from "react";

const initialItems = [
    {
        id: 1,
        name: "Egg",
        total: 10,
        isDone: false,
    },
    {
        id: 2,
        name: "Book",
        total: 1,
        isDone: false,
    },
];

export default function App() {
    return <ShoppingList />;
}

function ShoppingList() {
    const [items, setItems] = useState(initialItems);

    function handleAddItem(newItem) {
        setItems((curItems) => [...curItems, newItem]);
    }

    function handleRemoveItem(id) {
        setItems((curItems) => curItems.filter((item) => item.id !== id));
    }

    function handleItemDone(id) {
        setItems((curItems) =>
            curItems.map((item) => {
                if (item.id === id) {
                    item.isDone = item.isDone === true ? false : true;
                }
                return item;
            })
        );
    }

    function handleClearShoppingList() {
        setItems([]);
    }

    return (
        <div className="container">
            <Header />
            <FormAddItem onAddItem={handleAddItem} />
            <List
                items={items}
                onRemoveItem={handleRemoveItem}
                onItemDone={handleItemDone}
                onClearList={handleClearShoppingList}
            />
        </div>
    );
}

function Header() {
    return <h2 className="header">Shopping List</h2>;
}

function List({ items, onRemoveItem, onItemDone, onClearList }) {
    return (
        <>
            {items.length === 0 && <p>No shopping item in your list!</p>}
            {items.length > 0 && (
                <div>
                    <ul className="shopping-list">
                        {items.map((item) => (
                            <Item
                                item={item}
                                key={item.id}
                                onRemoveItem={onRemoveItem}
                                onItemDone={onItemDone}
                            />
                        ))}
                    </ul>
                    <button className="btn-clear" onClick={onClearList}>
                        Clear List
                    </button>
                </div>
            )}
        </>
    );
}

function Item({ item, onRemoveItem, onItemDone }) {
    return (
        <li className="shopping-item">
            <p className={`name ${item.isDone ? 'done' : ''}`}>
                {item.name}
            </p>
            <p className="total">{item.total}</p>
            <button className="button" onClick={() => onRemoveItem(item.id)}>
                X
            </button>
            <button onClick={() => onItemDone(item.id)}>Done</button>
        </li>
    );
}

function FormAddItem({ onAddItem }) {
    const [item, setItem] = useState("");
    const [total, setTotal] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

        if (!item || total < 1) return;

        const newItem = {
            id: crypto.randomUUID(),
            name: item,
            total: total,
            isDone: false,
        };

        onAddItem(newItem);
        setItem("");
        setTotal(0);
    }

    return (
        <form className="form-add-item" onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Item name: </label>
                <input
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>How many to buy: </label>
                <input
                    type="number"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                />
            </div>

            <button>Add</button>
        </form>
    );
}
