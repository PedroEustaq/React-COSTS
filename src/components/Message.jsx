import { useState } from "react";
import styles from "./Message.module.css";
import { useEffect } from "react";

export default function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)
    
    useEffect(() => {

        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000);

        return () => clearTimeout(timer);
    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>


                    <p>{msg}</p>
                </div>)
            }
        </>
    )
}