import styles from "../../styles/List.module.css"
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props : { users: data }
    }
}

const AllList = ({users}) => {
    return ( 
        <div>
            <h1>All List</h1>
            {users.map(user => (
                <Link 
                    href={'/list/'+user.id}
                    key={user.id} 
                    className={styles.single}
                >
                    {user.name}
                </Link>
            ))}
        </div>
     );
}
 
export default AllList;