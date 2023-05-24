import "./App.css";

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  const link = "http://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{'hello ninjas'}</p>
        <p>[1,2,3,4,5,8]</p>
        <p>{Math.random()}</p>
        <a href={link} >Google site</a>
      </div>
    </div>
  );
}

export default App;
