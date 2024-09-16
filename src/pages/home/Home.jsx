import Posts from "../../components/layout/posts/Posts";
import Stories from "../../components/layout/stories/Stories";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Stories />
        <Posts />
      </div>
    </>
  );
};

export default Home;
