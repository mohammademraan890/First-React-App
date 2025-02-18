import { useLocation } from "react-router-dom";

// export function ScrollToHash() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.querySelector(location.hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });

//         // ✅ Remove the hash from URL after scrolling (so we can click it again)
//         navigate(location.pathname, { replace: true });
//       }
//     }
//   }, [location, navigate]);

//   return null; // This component doesn't render anything
// }


const Practice1 = () => {

    let location1= useLocation()
    // console.log(location1.search)
    let searchParams = new URLSearchParams(location1.search)
    console.log(searchParams.get("category"))
  return (
    <div>
      {/* {location1.pathname=== "/about" ? alert("Welcome in about page") : console.log("hello") } */}

    </div>
  )
}

export default Practice1
