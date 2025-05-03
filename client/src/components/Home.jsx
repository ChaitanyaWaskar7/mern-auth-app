const Home = ({ user }) => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full">
    <h1 className="text-3xl font-bold text-center">
      Welcome, {user.fullName}!
    </h1>
  </div>
);

export default Home;
