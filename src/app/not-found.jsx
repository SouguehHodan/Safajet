import Link from "next/link"
const Not_found = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <p>Désole, cette page n'existe pas sur cette application </p>
            <Link href="/">Return home</Link>
        </div>
    );
  };
  
  export default Not_found ;