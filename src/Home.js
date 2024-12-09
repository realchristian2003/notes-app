import React from 'react';

function Home() {
  return (
    <div className="auth-container">
      <h2>Welcome to the To Do List</h2>
      <p>
        Please <a href="/login">Login</a> or <a href="/signup">Sign Up</a> to continue.
      </p>
    </div>
  );
}

export default Home;
