import styles from "../../styles/primary-button.module.css"
interface PrimaryButtonProps {
    cta: string

    handleCta(): void
}

export function PrimaryButton(props: PrimaryButtonProps) {

    return (
        <button className={styles.container}
                onClick={() => props.handleCta()}>
            {props.cta}
        </button>
    )

}
