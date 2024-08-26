import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const App = () => {
  return (
    <>
      <h1>Bunny Styles</h1>

      {/* <button className="btn btn-success">Another Bunny Button</button> */}
      <Button variant="outline-warning">More Styles Please</Button>

      <Toast>
        <Toast.Header>
          <strong>Bunnies!!!!</strong>
        </Toast.Header>
        <Toast.Body>
          <p>We love bunnies!</p>
        </Toast.Body>
      </Toast>
    </>
  )
}

export default App
