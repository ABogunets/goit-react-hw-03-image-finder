
// * from Repeta lecture1
// import paintings from './paintings.json';
// // import Painting from './components/Painting';
// import PaintingList from './components/PaintingList';

// export default function App() {
//   return (
//     <div>
//       <PaintingList items={paintings} />
//     </div>
//   );
// }

// * Lesson2-styles Example from lecture notes
import "./index.css";
import { Alert } from "./components/Alert";
const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" elevated>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined>
        Please update your profile contact information
      </Alert>
    </>
  );
};

export default App;


