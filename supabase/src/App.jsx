import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createClient } from "@supabase/supabase-js";
import './App.css'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

async function createTodo(supabase) {
  const result = await supabase
    .from("todos")
    .insert([
      {
        id: 9,
        title: "Get soap",
        done: false
      },
      {
        id: 10,
        title: "Get water",
        done: false
      }
    ])
    .select()

  if (result.error) {
    console.error(result.error)
    return;
  }

  console.log(result.data)
}

async function fetchTodos(supabase) {
  const result = await supabase
    .from("todos")
    .select("title, done");

  const result2 = await supabase
    .from("todos")
    .select("*");

  if (result.error) {
    console.error(result.error)
    return;
  }

  if (result2.error) {
    console.error(result2.error)
    return;
  }

  console.log(result.data);
  console.log(result2.data);
}

async function fetchFilteredTodos(supabase) {
  const result = await supabase
    .from("todos")
    .select("*")
    .like("title", "Get%");
  // .eq("title", "Get soap")

  if (result.error) {
    console.error(result.error)
    return;
  }

  console.log(result.data);
}

async function fetchPaginatedTodos(supabase) {
  const result = await supabase
    .from("todos")
    .select("*")
    .range(0, 5);

  if (result.error) {
    console.error(result.error)
    return;
  }

  console.log(result.data);
}

async function updateTodo(supabase) {
  const result = await supabase
    .from("todos")
    .update({
      title: "Get cheese"
    })
    .eq("id", 5)
    .select();

  if (result.error) {
    console.error(result.error)
    return;
  }

  console.log(result.data);
}

async function deleteTodo(supabase) {
  const result = await supabase
    .from("todos")
    .delete()
    .eq("id", 10);

  if (result.error) {
    console.error(result.error)
    return;
  }
}

async function deleteTodoRange(supabase) {
  const result = await supabase
    .from("todos")
    .delete()
    .gte("id", 6)
    .lte("id", 8);

  if (result.error) {
    console.error(result.error)
    return;
  }
}

async function signUp(supabase) {
  const result = await supabase
    .auth
    .signUp({
      email: "codrut.ciulacu@digitalstack.ro",
      password: "test123",
      options: {
        data: {
          first_name: "Codrut",
          last_name: "Ciulacu",
          age: 25
        }
      }
    })

  if (result.error) {
    console.error(result.error)
    return;
  }
}

async function signIn(supabase) {
  const result = await supabase
    .auth
    .signInWithPassword({
      email: "codrut.ciulacu@digitalstack.ro",
      password: "test123"
    })

  if (result.error) {
    console.error(result.error)
    return;
  }

  console.log(result.data)
}

async function getCurrentUser(supabase) {
  const result = await supabase
    .auth
    .getUser()

  if (result.error) {
    console.error(result.error)
    return;
  }

  console.log(result.data)
}

async function uploadFile(supabase, file) {
  const result = await supabase
    .storage
    .from("photos")
    .upload(`photos/my_photo.jpg`, file)


  console.log(result)
}

async function getPublicUrl(supabase, setUrl) {
  const result = await supabase
    .storage
    .from("photos")
    .getPublicUrl(`photos/my_photo.jpg`)

  setUrl(result.data.publicUrl)
}

function App() {
  const [count, setCount] = useState(0)
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const handleFile = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  return (
    <>
      <h1>Todo App</h1>
      <div className="card">
        <button onClick={() => { createTodo(supabase) }}>Insert Item</button>
        <button onClick={() => { fetchTodos(supabase) }}>Fetch Item</button>
        <button onClick={() => { fetchFilteredTodos(supabase) }}>Fetch Filtered Items</button>
        <button onClick={() => { fetchPaginatedTodos(supabase) }}>Fetch Paginated Items</button>
        <button onClick={() => { updateTodo(supabase) }}>Update Item</button>
        <button onClick={() => { deleteTodo(supabase) }}>Delete Item</button>
        <button onClick={() => { deleteTodoRange(supabase) }}>Delete Range Of Items</button>
        <button onClick={() => { signUp(supabase) }}>Sign Up</button>
        <button onClick={() => { signIn(supabase) }}>Sign In</button>
        <button onClick={() => { getCurrentUser(supabase) }}>Get Current User</button>
        <input type="file" onChange={event => handleFile(event)} />
        <button onClick={() => { uploadFile(supabase, file) }}>Upload File</button>
        <button onClick={() => { getPublicUrl(supabase, setUrl) }}>Get Public Url for File</button>
        { url && <img src={url} /> }
      </div>
    </>
  )
}

export default App
