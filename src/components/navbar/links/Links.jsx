import Link from "next/link"
import styles from './linkstyle.css'

const Links = () => {
    const links = [

        {
            title: 'Accueil',
            path: '/',
        },
        {
            title: 'A propos',
            path: '/about',
        },
        {
            title: 'Service',
            path: '/service',
        },
        {
            title: 'Contact',
            path: '/contact',
        }
    ]

    return (
        
        <div className={styles.links}>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>

        )
  };
  
  export default Links;