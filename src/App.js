import { useReducer } from "react";
import { useState } from "react";
import "./styles.css";

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Clicked {count} times</button>;
}

function MyButton2({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
};

function MyImage() {
  return (
    <>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

function ConditionalForm() {
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
}

function AdminPanel() {
  return <h2>this is admin panel</h2>;
}

function LoginForm() {
  return <h2>this is login form</h2>;
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 }
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen"
      }}
    >
      {product.title}
    </li>
  ));

  return <ul class="leftcontents">{listItems}</ul>;
}

export default function App() {
  const [sharedcount, setSharedCount] = useState(0);

  function handleClick2() {
    setSharedCount(sharedcount + 1);
  }

  return (
    <div className="App">
      <AboutPage />

      <h2>Counters that update separately</h2>
      <MyButton />
      <MyButton />

      <h2>Counters that update together</h2>
      <MyButton2 count={sharedcount} onClick={handleClick2} />
      <MyButton2 count={sharedcount} onClick={handleClick2} />

      <MyImage />

      {(isLoggedIn = false)}
      <ConditionalForm />

      <ShoppingList />
    </div>
  );
}
