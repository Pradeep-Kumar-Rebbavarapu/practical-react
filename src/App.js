import './App.css';
import { FaReact } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
console.log(toast);
function App() {
  const notify = () => {
    toast('hello', {
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  }
  return (
    <div className="App">
      <FaReact color="purple" size="4rem" />
      
      {/* Same as */}
      <ToastContainer className={'bg-rose-500'}/>
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default App;
