import './Home.css';

export default function Home() {
  return (
    <div>
      <h1>Home component</h1>
      <>
        <div className='centerContent'>
          <div className='columnComponent'>column, less generalized</div>
          <div className='centerPhoto'>CENTER PHOTO</div>
          <div className='scrollableContent'>Scrollable Component</div>
        </div>
      </>
    </div>
  );
}
