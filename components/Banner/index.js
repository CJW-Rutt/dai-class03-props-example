import styles from '/Banner.module.css'

export default function Banner({
    colour = "red"
}) {
    return(
       <div className={styles.container}>
            Banner Here.
       </div>
    )
}