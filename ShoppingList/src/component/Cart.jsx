import { useState } from "react"; // Importing the useState hook from React
import "../styles/Cart.css"; 

export const Cart = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.trim() === "") return; 
        const newItemObj = { id: Date.now(), text: newItem, bought: false };
        setItems([...items, newItemObj]);
        setNewItem(""); 
      };

      const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
      };
    
      
      const toggleBought = (id) => {
        setItems(items.map(item => 
          item.id === id ? { ...item, bought: !item.bought } : item
        ));
      };

      const editItem = (id, newText) => {
        if (newText.trim() === "") return;
        setItems(items.map(item => 
          item.id === id ? { ...item, text: newText } : item))
        };  

      return(
        <div className = "Cart">
            <center><h1>Shopping Lists</h1></center>
            <div className="add-item">
                <input
                    type = "text"
                    value = {newItem}
                    onChange = {(e) => setNewItem(e.target.value)}
                    placeholder="Add a new item :D"
                />
                <button onClick={addItem}>Add</button>
            </div>
            <ul>
        {items.map(item => (
          <li 
            key={item.id} 
            style={{ 
              textDecoration: item.bought ? 'line-through' : 'none', 
              color: item.bought ? 'green' : 'black'
            }}
          >
            <span onClick={() => toggleBought(item.id)}>{item.text}</span>
            <div className="modify">
                <button className = "edit" onClick={() => {
                const newText = prompt("Edit item", item.text);
                if (newText !== null) editItem(item.id, newText);
                }}>Edit</button>
                
                <button className = "remove" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;