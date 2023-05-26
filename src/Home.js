import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    {title: 'web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
]);

const [name, setName] = useState('mario');

const handleDelete = (id) => {
  const newBlogs = blogs.filter(blog => blog.id !== id)
  setBlogs(newBlogs)
}

useEffect(() => {
  console.log('useEffect ran')
  console.log(name)
}, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('Luigi')}>Change name</button>
    </div>
  );
};

export default Home;
