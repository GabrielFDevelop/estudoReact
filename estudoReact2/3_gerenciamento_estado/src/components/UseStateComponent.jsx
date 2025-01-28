import { useState } from 'react';

const UseStateComponent = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount +1);
        // setCount(count + 1);
        console.log(count);
    };

    const [user, setUser] = useState({
        name: "Ana",
        age: 25,
        hobbies: ["Leitura", "Programação"],
    });

    const updateUserAge = () => {
        setUser((prevUser) => (
            {
                ...prevUser, age: prevUser.age + 1,
            }
        ))
    }

    return (
    <div>
        <h2>Contador</h2>
        <p>Voc~e clicou {count} vezes.</p>
        <button onClick={increment}>Incrementar</button>

        <p>Nome: {user.nome} e idade: {user.age}</p>

        <button onClick={updateUserAge}>Incrementar idade</button>
    </div>
  );
}

export default UseStateComponent;