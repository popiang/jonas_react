import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
    const [items, setItems] = useState([]);

    const handleAddItems = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const handleDeleteItems = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleToggleItems = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    };

    const handleClearItems = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    };

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItems}
                onToggleItem={handleToggleItems}
                onClearItems={handleClearItems}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
